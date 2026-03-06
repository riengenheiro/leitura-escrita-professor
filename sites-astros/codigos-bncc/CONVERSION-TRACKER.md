# Conversion Tracker - Documentação

## O que é

O **Conversion Tracker** é um script de rastreamento leve que monitora a jornada do usuário desde o clique no CTA até a conversão (compra). Ele envia eventos para um worker que armazena e analisa os dados.

---

## Arquivos do Sistema

### 1. Componente Astro - `src/components/ConversionTracker.astro`

Este é o script principal que deve ser incluído no layout do site.

```astro
---
// Rastreamento de conversão para o worker (site: codigos-bncc)
---
// Rastreamento de conversão para o worker (site: codigos-bncc)
// Usa cookie com domain wildcard para rastrear entre subdomínios
---
<script>
  const workerEndpoint = "https://conversion-worker.ricardo-e99.workers.dev";
  // Rastreamento: identificador único do site (nome + código). 
  // Usado no worker para segmentar eventos e conversões. 
  // Não altere ao duplicar para outro projeto.
  const siteId = "codigos-bncc-cb7k2m";

  // Configuração do cookie - AJUSTE O DOMÍNIO PARA SEU CASO
  // Exemplos:
  // - ".doutoraescola.com.br"  → funciona em *.doutoraescola.com.br
  // - ".seusite.com"           → funciona em *.seusite.com
  // - "localhost"              → dev local (sem subdomínios)
  const COOKIE_DOMAIN = ".doutoraescola.com.br";
  const COOKIE_NAME = "_px_session";  // Checkout PHP: $_COOKIE['_px_session']
  const COOKIE_MAX_AGE = 30 * 24 * 60 * 60; // 30 dias = 2.592.000 segundos

  // Função para ler cookie
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  // Função para definir cookie com domain wildcard
  function setCookie(name, value, domain, maxAge) {
    document.cookie = `${name}=${value}; domain=${domain}; path=/; max-age=${maxAge}; SameSite=Lax`;
  }

  function generateSessionId() {
    let session = getCookie(COOKIE_NAME);
    if (!session) {
      session = crypto.randomUUID();
      setCookie(COOKIE_NAME, session, COOKIE_DOMAIN, COOKIE_MAX_AGE);
    }
    return session;
  }

  const sessionId = generateSessionId();
  const startTime = Date.now();

  function track(event, extra = {}) {
    fetch(workerEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        site_id: siteId,
        session_id: sessionId,
        page: window.location.pathname,
        event,
        ...extra
      })
    });
  }

  // Rastrear clique no CTA (botão de compra)
  window.addEventListener("DOMContentLoaded", () => {
    const cta = document.querySelector("#btn-comprar");
    if (!cta) return;
    cta.addEventListener("click", () => {
      const timeToClick = Math.floor((Date.now() - startTime) / 1000);
      track("cta_click", {
        time_to_click: timeToClick
      });
    });
  });

  // Detectar página de obrigado (conversão)
  if (window.location.pathname.includes("obrigado")) {
    track("conversion");
  }
</script>
```

---

## Como Funciona

### 1. Geração da Sessão (Cookie com Domain Wildcard)

```javascript
// Configuração do cookie
const COOKIE_DOMAIN = ".doutoraescola.com.br";  // Subdomínios podem ler
const COOKIE_NAME = "cro_session";
const COOKIE_MAX_AGE = 30 * 24 * 60 * 60;  // 30 dias

// Função para ler cookie
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

// Função para definir cookie com domain wildcard
function setCookie(name, value, domain, maxAge) {
  document.cookie = `${name}=${value}; domain=${domain}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

function generateSessionId() {
  let session = getCookie(COOKIE_NAME);
  if (!session) {
    session = crypto.randomUUID();
    setCookie(COOKIE_NAME, session, COOKIE_DOMAIN, COOKIE_MAX_AGE);
  }
  return session;
}
```

- Usa **cookie** em vez de `localStorage` (funciona entre subdomínios)
- Domain wildcard (`.doutoraescola.com.br`) permite que subdomínios leiam o mesmo cookie
- Dura 30 dias
- **Importante:** Configurar `COOKIE_DOMAIN` para seu domínio

### 2. Configuração do Cookie Domain

O cookie usa **domain wildcard** para funcionar entre subdomínios:

```javascript
const COOKIE_DOMAIN = ".doutoraescola.com.br";  // Note o ponto no início
```

#### Opções de Configuração

| Ambiente | COOKIE_DOMAIN | Funciona em |
|----------|---------------|-------------|
| Produção (subdomínios) | `.doutoraescola.com.br` | `*.doutoraescola.com.br` |
| Produção (www) | `.seusite.com` | `*.seusite.com` |
| Desenvolvimento local | `localhost` | Apenas localhost |

**⚠️ Importante:**
- Sempre comece com ponto (`.`) para wildcard
- Sem o ponto, o cookie só funciona no domínio exato
- Em HTTPS, o cookie é mais seguro

### 3. Eventos Rastreados

#### Evento: `cta_click`

Disparado quando o usuário clica no botão de compra (elemento com `id="btn-comprar"`).

**Dados enviados:**
```json
{
  "site_id": "codigos-bncc-cb7k2m",
  "session_id": "uuid-da-sessao",
  "page": "/",
  "event": "cta_click",
  "time_to_click": 45
}
```

- `time_to_click`: tempo em segundos desde o carregamento da página até o clique

#### Evento: `conversion`

Disparado automaticamente quando o usuário acessa uma página que contenha `"obrigado"` no pathname.

**Dados enviados:**
```json
{
  "site_id": "codigos-bncc-cb7k2m",
  "session_id": "uuid-da-sessao",
  "page": "/obrigado",
  "event": "conversion"
}
```

---

## Instalação no Layout

### Arquivo: `src/layouts/Layout.astro`

```astro
---
import '../styles/global.css';
import ConversionTracker from '../components/ConversionTracker.astro';
---

<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <!-- ... metadados ... -->
  </head>
  <body>
    <slot />
    <ConversionTracker />  <!-- Adicionar aqui, antes do </body> -->
  </body>
</html>
```

---

## Configuração do Botão de Compra

O botão/CTA deve ter o `id="btn-comprar"`:

```astro
<a id="btn-comprar" href="#" class="js-open-checkout-modal">
  Quero o Básico
</a>
```

Ou:

```html
<button id="btn-comprar">
  Comprar Agora
</button>
```

**Importante:** O script usa `document.querySelector("#btn-comprar")` para encontrar o elemento. Se não encontrar, o rastreamento de clique não funcionará.

---

## Configurações Importantes

### 1. site_id

Formato: `"nome-do-site-codigo-unico"`

```javascript
const siteId = "codigos-bncc-cb7k2m";
```

- **nome-do-site:** identificação legível
- **codigo-unico:** 6 caracteres aleatórios para evitar conflitos
- Cada site/projeto deve ter seu próprio `site_id` único

### 2. Worker Endpoint

```javascript
const workerEndpoint = "https://conversion-worker.ricardo-e99.workers.dev";
```

- URL do worker que recebe e armazena os eventos
- Todos os sites enviam para o mesmo endpoint
- O worker usa `site_id` para separar os dados

### 4. Sessão

A sessão é armazenada em um **cookie com domain wildcard** no nome que o checkout já usa:

```javascript
getCookie("_px_session");  // retorna: "uuid-da-sessao"
```

O checkout PHP captura com `$_COOKIE['_px_session']` (e opcionalmente `$_GET['px_sid']`), sem precisar mudar código no backend.

- Persiste mesmo após fechar o navegador
- Funciona entre **subdomínios** do mesmo domínio pai (ex.: `codigos.doutoraescola.com.br` e `fm.doutoraescola.com.br`)
- Dura 30 dias
- Para rastrear entre domínios **completamente diferentes**, veja a seção "Rastreamento Cross-Domain"

---

## Rastreamento Cross-Domain

### Caso 1: Mesmo Domínio, Subdomínios Diferentes ✅ (Funciona Automaticamente)

Com o **cookie domain wildcard**, o rastreamento funciona automaticamente entre subdomínios:

- Site: `codigos.doutoraescola.com.br`
- Checkout: `fm.doutoraescola.com.br`

**Nenhuma configuração extra necessária!** O cookie `.doutoraescola.com.br` é lido em ambos.

### Caso 2: Domínios Completamente Diferentes ⚠️ (Precisa de URL)

Quando o checkout está em outro domínio (ex.: `vivasuamissao.top`), o cookie **não** funciona. O checkout não consegue ler a sessão do site Astro.

**Solução:** Passar na URL ao abrir o checkout:

```javascript
const sessionId = getCookie("_px_session");  // Função getCookie do script
const checkoutUrl = `https://checkout.exemplo.com/?s=ABC&px_sid=${sessionId}`;  // fallback se não usar cookie
```

### No Checkout (outro domínio)

O checkout deve ler da URL e usar a mesma sessão:

```javascript
const urlParams = new URLSearchParams(window.location.search);
const sessionId = urlParams.get('px_sid') || document.cookie.match(/_px_session=([^;]+)/)?.[1] || crypto.randomUUID();
const siteId = urlParams.get('site_id') || 'desconhecido';

// Incluir o script do ConversionTracker com esses valores
```

---

## Eventos Disponíveis

| Evento | Descrição | Quando Dispara |
|--------|-----------|----------------|
| `cta_click` | Clique no botão de compra | Usuário clica em `#btn-comprar` |
| `conversion` | Conversão confirmada | Página contém `"obrigado"` no pathname |
| `pageview` | Visualização de página | (Opcional) Ao carregar qualquer página |

---

## Testando o Rastreamento

### 1. Verificar no Console

Abra o DevTools (F12) → Console:

```javascript
// Ver sessão atual (cookie)
document.cookie.split('; ').find(row => row.startsWith('_px_session='))?.split('=')[1];

// Ou use a função getCookie do script
getCookie("_px_session");

// Ver se o script está rodando
console.log("Session ID:", sessionId);
console.log("Site ID:", siteId);
```

### 2. Verificar Requisições

DevTools → Network → Filtrar por "conversion-worker":

- Deve aparecer requisições POST ao clicar no CTA
- Deve aparecer requisição ao acessar página de obrigado

### 3. Payload da Requisição

Verifique na aba "Payload" da requisição:

```json
{
  "site_id": "codigos-bncc-cb7k2m",
  "session_id": "550e8400-e29b-41d4-a716-446655440000",
  "page": "/",
  "event": "cta_click",
  "time_to_click": 32
}
```

---

## Implementando em Outros Sites

### Passo 1: Criar o Componente

Copie `ConversionTracker.astro` para o novo projeto.

### Passo 2: Alterar o site_id

```javascript
// Antes
const siteId = "codigos-bncc-cb7k2m";

// Depois (novo site)
const siteId = "nome-do-novo-site-xyz789";
```

### Passo 3: Incluir no Layout

```astro
---
import ConversionTracker from '../components/ConversionTracker.astro';
---

<body>
  <slot />
  <ConversionTracker />
</body>
```

### Passo 4: Adicionar ID no Botão

```html
<button id="btn-comprar">Comprar</button>
<!-- ou -->
<a id="btn-comprar" href="/checkout">Comprar</a>
```

### Passo 5: Criar Página de Obrigado

Crie uma página com `/obrigado` no caminho:
- `/obrigado`
- `/obrigado-pela-compra`
- `/checkout/obrigado`

---

## Considerações de Privacidade

- O script não coleta dados pessoais (nome, email, CPF)
- Apenas rastreia: sessão anônima, página, evento, tempo
- O `session_id` é um UUID aleatório, não identifica o usuário
- Considere adicionar aviso de cookies/analytics se necessário (LGPD/GDPR)

---

## Suporte e Dúvidas

- **Worker:** `https://conversion-worker.ricardo-e99.workers.dev`
- **Formato site_id:** `nome-site-codigo-unico`
- **Cookie name:** `"_px_session"` (mesmo nome que o checkout PHP usa em `$_COOKIE['_px_session']`)

Para adicionar novos eventos ou modificar o comportamento, edite o arquivo `src/components/ConversionTracker.astro`.
