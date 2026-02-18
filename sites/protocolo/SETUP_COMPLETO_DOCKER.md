# 🐳 Setup Completo - Facebook Pixel com Docker

Guia passo a passo para implementar o Facebook Pixel no seu projeto Docker.

---

## ⚡ Setup Rápido (5 minutos)

### 1️⃣ Configurar Variáveis de Ambiente

Edite o arquivo **`backend/.env`**:

```bash
vim backend/.env
# ou
nano backend/.env
```

Adicione no final:

```env
# Facebook Pixel
FACEBOOK_PIXEL_ID=seu_pixel_id_aqui
FACEBOOK_ACCESS_TOKEN=seu_token_aqui
FACEBOOK_TEST_EVENT_CODE=TEST12345
FACEBOOK_DEBUG=true
```

### 2️⃣ Rebuildar Backend

**Opção A - Script Automático:**
```bash
./rebuild-backend.sh
```

**Opção B - Manual:**
```bash
docker-compose stop backend
docker-compose build backend
docker-compose up -d backend
```

### 3️⃣ Testar

```bash
# Health check
curl http://localhost:3001/health

# Testar Facebook Pixel API
curl -X POST http://localhost:3001/api/facebook-pixel/track \
  -H "Content-Type: application/json" \
  -d '{"event_type": "PageView", "config_id": "default"}'
```

### 4️⃣ Adicionar Pixel no Frontend

Edite **`src/App.tsx`**:

```tsx
import { FacebookPixel } from './components/FacebookPixel';

function AppContent() {
  // ... código existente ...

  return (
    <>
      <FacebookPixel 
        pixelId="123456789" 
        autoPageView={true}
        trackRouteChanges={true}
      />
      
      <Routes>
        {/* suas rotas */}
      </Routes>
    </>
  );
}
```

**Para desenvolvimento** (hot-reload automático):
- Salve o arquivo
- Vite detecta automaticamente ✅

**Para produção** (precisa rebuild):
```bash
docker-compose build app-prod
docker-compose restart app-prod
```

### 5️⃣ Verificar no Navegador

Acesse:
- **Dev**: http://localhost:5173
- **Prod**: http://localhost:8081

Abra DevTools (F12) > Console:
```javascript
window.fbq // Deve retornar uma função
window.fbq('track', 'PageView') // Testa evento
```

---

## 📁 Arquivos Criados

### ✅ Backend (Node.js)
```
backend/
├── FacebookPixelClient.js      ✅ Cliente CAPI do Facebook
├── pixelConfig.js               ✅ Gerenciamento de múltiplos pixels
├── server.js                    ✅ Atualizado com endpoint /api/facebook-pixel/track
├── package.json                 ✅ Atualizado (node-fetch, cookie-parser)
└── .env                         ⚠️  Configure com seus tokens!
```

### ✅ Frontend (React)
```
src/
├── components/
│   └── FacebookPixel.tsx        ✅ Componente para injetar pixel
├── hooks/
│   └── useFacebookPixel.ts      ✅ Hook para eventos
├── config/
│   └── facebookPixels.ts        ✅ Config de múltiplos pixels
└── examples/
    └── ExampleLandingPageWithPixel.tsx  ✅ Exemplos
```

### ✅ Documentação
```
/var/www/sales_page/
├── DOCKER_SETUP.md              ✅ Guia Docker detalhado
├── QUICKSTART_FACEBOOK_PIXEL.md ✅ Início rápido
├── FACEBOOK_PIXEL_SETUP.md      ✅ Documentação completa
├── EXEMPLO_IMPLEMENTACAO.md     ✅ Exemplos práticos
├── rebuild-backend.sh           ✅ Script helper
└── pixels.json.example          ✅ Config múltiplos pixels
```

---

## 🎯 Como Funciona no Docker

### Arquitetura

```
┌─────────────────────────────────────────────────┐
│  Nginx (Frontend - Porta 8081)                  │
│  ├── Serve arquivos estáticos (React build)     │
│  └── Proxy reverso para /api → Backend          │
└─────────────────────────────────────────────────┘
                    ↓ /api/facebook-pixel/track
┌─────────────────────────────────────────────────┐
│  Backend (Node.js - Porta 3001)                 │
│  ├── FacebookPixelClient.js (CAPI)              │
│  ├── Endpoint: POST /api/facebook-pixel/track   │
│  └── Conecta com Facebook Graph API             │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│  Facebook Graph API                             │
│  https://graph.facebook.com/v18.0/{pixel}/events│
└─────────────────────────────────────────────────┘
```

### Fluxo de Dados

1. **Cliente (Browser)**:
   - `<FacebookPixel>` injeta script do Facebook
   - `fbq('track', 'PageView')` → Facebook direto

2. **Server-Side (CAPI)**:
   - `fetch('/api/facebook-pixel/track')` → Backend
   - Backend usa `FacebookPixelClient` → Facebook API
   - **Não bloqueado por ad-blockers** ✅

3. **Desduplicação**:
   - Cliente e servidor usam **mesmo `eventID`**
   - Facebook reconhece como evento único

---

## 🔧 Comandos Docker Essenciais

### Ver Status
```bash
docker-compose ps
```

### Ver Logs
```bash
# Backend
docker-compose logs -f backend

# Frontend
docker-compose logs -f app-prod

# Filtrar por "Facebook"
docker-compose logs -f backend | grep -i facebook
```

### Reiniciar Serviços
```bash
# Reiniciar backend (sem rebuild)
docker-compose restart backend

# Reiniciar tudo
docker-compose restart
```

### Rebuild
```bash
# Só backend
docker-compose build backend

# Só frontend
docker-compose build app-prod

# Tudo
docker-compose build
```

### Entrar no Container
```bash
# Backend
docker exec -it manual-backend sh

# Dentro do container:
ls -la                 # Ver arquivos
cat .env              # Ver variáveis
npm list              # Ver dependências instaladas
node server.js        # Testar server
```

---

## 🌐 URLs e Portas

| Serviço | Porta | URL | Descrição |
|---------|-------|-----|-----------|
| Frontend (Dev) | 5173 | http://localhost:5173 | Vite hot-reload |
| Frontend (Prod) | 8081 | http://localhost:8081 | Nginx + React build |
| Backend | 3001 | http://localhost:3001 | API Node.js |
| Backend API | 8081/api | http://localhost:8081/api | Proxy via Nginx |

**Importante**: Em produção, use `http://localhost:8081/api/facebook-pixel/track` (através do Nginx)

---

## 📊 Testar Implementação

### 1. Backend Health Check
```bash
curl http://localhost:3001/health

# Resposta esperada:
# {"status":"ok","timestamp":"...","service":"manual-backend"}
```

### 2. Facebook Pixel API
```bash
curl -X POST http://localhost:3001/api/facebook-pixel/track \
  -H "Content-Type: application/json" \
  -d '{
    "event_type": "PageView",
    "config_id": "default"
  }'

# Resposta esperada:
# {"success":true,"event_id":"evt_...","external_id":"..."}
```

### 3. Via Nginx (como o frontend faz)
```bash
curl -X POST http://localhost:8081/api/facebook-pixel/track \
  -H "Content-Type: application/json" \
  -d '{
    "event_type": "Lead",
    "config_id": "default",
    "client_data": {
      "email": "test@example.com"
    }
  }'
```

### 4. Frontend
Abra http://localhost:8081 e no Console (F12):

```javascript
// Verificar se pixel carregou
console.log(typeof window.fbq); // Deve ser "function"

// Testar evento
window.fbq('track', 'PageView');

// Verificar cookies
document.cookie; // Deve ter _fbp
```

---

## 🎨 Adicionar Pixel em Páginas Específicas

### Landing Page Principal

**Arquivo**: `src/pages/LandingPage.tsx`

```tsx
import { FacebookPixel } from '../components/FacebookPixel';
import { FACEBOOK_PIXELS } from '../config/facebookPixels';

export function LandingPage() {
  const pixel = FACEBOOK_PIXELS.landingPagePrincipal;

  return (
    <>
      <FacebookPixel pixelId={pixel.pixelId} autoPageView={true} />
      
      <main className="min-h-screen bg-dark-900">
        {/* conteúdo existente */}
      </main>
    </>
  );
}
```

Salve e veja o hot-reload (dev) ou rebuild (prod).

### Adicionar Tracking no Pricing

**Arquivo**: `src/components/Pricing.tsx`

```tsx
import { useFacebookPixel } from '../hooks/useFacebookPixel';

export function Pricing() {
  const { trackInitiateCheckout } = useFacebookPixel({
    pixelId: '123456789'
  });

  const handleBuyClick = (planId: string, price: number) => {
    // Track evento
    trackInitiateCheckout(price, 'BRL', [planId]);
    
    // Redirecionar para Kiwify
    window.location.href = `https://kiwify.app/checkout/${planId}`;
  };

  return (
    <button onClick={() => handleBuyClick('plano-1', 197)}>
      Comprar
    </button>
  );
}
```

---

## 🔄 Workflow Completo

### Desenvolvimento

```bash
# 1. Fazer mudanças no código
vim src/App.tsx
vim backend/server.js

# 2. Se mudou backend:
docker-compose restart backend

# 3. Ver logs
docker-compose logs -f

# 4. Testar no navegador
# http://localhost:5173 (hot-reload automático)
```

### Produção

```bash
# 1. Atualizar código
git pull

# 2. Rebuild containers
docker-compose build

# 3. Reiniciar serviços
docker-compose --profile prod up -d

# 4. Verificar
docker-compose ps
docker-compose logs -f

# 5. Testar
curl http://localhost:8081/health
```

---

## 🐛 Troubleshooting

### "curl: Failed to connect"

```bash
# Verificar se backend está rodando
docker-compose ps backend

# Ver logs
docker-compose logs backend

# Reiniciar
docker-compose restart backend
```

### "node-fetch not found"

```bash
# Rebuild sem cache
docker-compose build --no-cache backend
docker-compose up -d backend

# Verificar dependências
docker exec -it manual-backend npm list
```

### "fbq is not defined"

```bash
# Verificar se componente foi adicionado
docker exec -it sales-page-prod cat /usr/share/nginx/html/index.html | grep fbq

# Rebuild frontend
docker-compose build app-prod
docker-compose restart app-prod
```

### "Cannot GET /api/facebook-pixel/track"

```bash
# Verificar nginx.conf
docker exec -it sales-page-prod cat /etc/nginx/conf.d/default.conf | grep api

# Verificar network
docker network inspect sales_page_sales-network
```

### Backend não conecta ao Facebook

```bash
# Ver logs detalhados
docker-compose logs -f backend | grep -i facebook

# Verificar .env
docker exec -it manual-backend cat .env | grep FACEBOOK

# Testar manualmente
docker exec -it manual-backend sh
node -e "console.log(process.env.FACEBOOK_PIXEL_ID)"
```

---

## 🚀 Deploy Produção

### 1. Preparar `.env`

```env
NODE_ENV=production
FACEBOOK_PIXEL_ID=seu_pixel_real
FACEBOOK_ACCESS_TOKEN=seu_token_real
FACEBOOK_DEBUG=false  # ⚠️ Desabilitar em produção
# Remover FACEBOOK_TEST_EVENT_CODE
```

### 2. Build e Deploy

```bash
# Parar dev
docker-compose --profile dev down

# Build prod
docker-compose build

# Subir prod
docker-compose --profile prod up -d

# Verificar
docker-compose ps
```

### 3. Configurar Domínio

Se usar Nginx Proxy Manager ou Cloudflare:

```nginx
# Proxy para frontend
server {
    listen 443 ssl;
    server_name protocolo.vivasuamissao.top;
    
    location / {
        proxy_pass http://localhost:8081;
    }
}
```

---

## 📋 Checklist Final

- [ ] `.env` configurado com tokens do Facebook
- [ ] Backend rebuildado: `./rebuild-backend.sh`
- [ ] Containers rodando: `docker-compose ps`
- [ ] Health check OK: `curl http://localhost:3001/health`
- [ ] API testada: `curl -X POST http://localhost:3001/api/facebook-pixel/track ...`
- [ ] Frontend com `<FacebookPixel>` adicionado
- [ ] Pixel carregando no browser: `window.fbq`
- [ ] Eventos aparecendo no Facebook Events Manager
- [ ] Logs sem erros: `docker-compose logs`

---

## 📚 Documentação Adicional

- **[DOCKER_SETUP.md](./DOCKER_SETUP.md)** - Detalhes Docker
- **[QUICKSTART_FACEBOOK_PIXEL.md](./QUICKSTART_FACEBOOK_PIXEL.md)** - Guia rápido
- **[FACEBOOK_PIXEL_SETUP.md](./FACEBOOK_PIXEL_SETUP.md)** - Documentação completa
- **[EXEMPLO_IMPLEMENTACAO.md](./EXEMPLO_IMPLEMENTACAO.md)** - Exemplos práticos

---

## 🎉 Pronto!

Seu projeto Docker agora está com Facebook Pixel funcionando! 🐳🎯

Comandos úteis:
```bash
# Ver logs do Facebook Pixel
docker-compose logs -f backend | grep -i "FB CAPI"

# Testar endpoint
curl -X POST http://localhost:3001/api/facebook-pixel/track \
  -H "Content-Type: application/json" \
  -d '{"event_type": "PageView", "config_id": "default"}'

# Rebuild tudo
./rebuild-backend.sh
```

Dúvidas? Consulte a documentação ou os logs! 🚀
