# 🏗️ Arquitetura dos Projetos - Explicação Completa

## 📁 Visão Geral das Três Pastas

Você tem três projetos principais que trabalham juntos:

1. **`sales_page`** - Site "Protocolo Energia Total" (frontend React + backend Node.js)
2. **`doutora-escola`** - Site "Doutora Escola" (frontend React)
3. **`nginx-multisite`** - Servidor Nginx que serve múltiplos sites

---

## 🔗 Como Eles Estão Interligados

### Diagrama da Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                    Proxy Manager (Nginx Proxy Manager)      │
│                    Porta: 80/443 (HTTPS)                     │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           │ Roteia por domínio
                           │
        ┌──────────────────┴──────────────────┐
        │                                     │
        ▼                                     ▼
┌───────────────────┐              ┌──────────────────────┐
│  nginx-multisite  │              │  sales_page (prod)   │
│   Container       │              │  Container           │
│   Porta: 8082     │              │  Porta: 8081         │
└─────────┬─────────┘              └──────────┬───────────┘
          │                                    │
          │ Serve múltiplos sites              │ Serve apenas
          │ por server_name                    │ o protocolo
          │                                    │
    ┌─────┴─────┬──────────────┐              │
    │           │              │              │
    ▼           ▼              ▼              ▼
┌─────────┐ ┌──────────┐  ┌─────────┐  ┌─────────────┐
│Protocolo│ │Doutora   │  │Outros   │  │Backend API  │
│(sales_  │ │Escola    │  │sites    │  │(manual-     │
│ page)   │ │          │  │         │  │backend)     │
│         │ │          │  │         │  │Porta: 3001  │
│/dist    │ │/dist     │  │/dist    │  │             │
└─────────┘ └──────────┘  └─────────┘  └─────────────┘
```

---

## 📂 1. `sales_page` - Protocolo Energia Total

### O que é:
- **Frontend React** (Vite + TypeScript + TailwindCSS)
- **Backend Node.js** (API REST)
- Site de vendas/landing page

### Estrutura:
```
sales_page/
├── src/              # Código fonte React
├── dist/             # Build de produção (arquivos estáticos)
├── backend/          # API Node.js
│   ├── .env          # Variáveis de ambiente
│   ├── data/         # Dados (JSON files)
│   └── Dockerfile
├── docker-compose.yml # Container próprio (opcional)
└── package.json
```

### Como funciona:
1. **Desenvolvimento**: Roda com `npm run dev` (porta 5173)
2. **Produção**: 
   - Faz `npm run build` → gera arquivos em `dist/`
   - Pode rodar em container próprio (porta 8081) OU
   - Ser servido pelo `nginx-multisite` (porta 8082)

### Backend:
- Container: `manual-backend`
- Porta: `3001`
- Endpoints: `/api/*` e `/webhook/*`
- Dados: `/backend/data/users.json`

---

## 📂 2. `doutora-escola` - Doutora Escola

### O que é:
- **Frontend React** (Vite + TypeScript + TailwindCSS)
- Site estático (sem backend próprio)

### Estrutura:
```
doutora-escola/
├── src/              # Código fonte React
├── dist/             # Build de produção
├── public/           # Assets estáticos
└── package.json
```

### Como funciona:
1. **Desenvolvimento**: Roda com `npm run dev` (porta 5173)
2. **Produção**: 
   - Faz `npm run build` → gera arquivos em `dist/`
   - **Sempre servido pelo `nginx-multisite`** (porta 8082)
   - Domínio: `devpages.doutoraescola.com.br`

---

## 📂 3. `nginx-multisite` - Servidor Multi-Site

### O que é:
- **Container Nginx** que serve múltiplos sites estáticos
- Um único servidor web para vários projetos
- Faz roteamento por domínio (`server_name`)

### Estrutura:
```
nginx-multisite/
├── nginx.conf              # Configuração do Nginx (server blocks)
├── docker-compose.yml       # Define container Nginx + backend
├── build-all.sh            # Script para buildar todos os sites
├── build-site.sh           # Script para buildar um site específico
└── README.md               # Documentação
```

### Como funciona:

#### 1. Configuração (`nginx.conf`):
```nginx
# Site 1: Protocolo
server {
    listen 80;
    server_name protocolo.vivasuamissao.top;
    root /var/www/protocolo/dist;  # ← Aponta para sales_page/dist
    ...
}

# Site 2: Doutora Escola
server {
    listen 80;
    server_name devpages.doutoraescola.com.br;
    root /var/www/doutora-escola/dist;  # ← Aponta para doutora-escola/dist
    ...
}
```

#### 2. Volumes (`docker-compose.yml`):
```yaml
volumes:
  - /var/www/sales_page/dist:/var/www/protocolo/dist:ro
  - /var/www/doutora-escola/dist:/var/www/doutora-escola/dist:ro
```

**O que isso faz:**
- Monta a pasta `dist/` de cada site dentro do container Nginx
- `:ro` = read-only (Nginx só lê, não escreve)
- Cada site fica disponível em um caminho diferente dentro do container

#### 3. Backend Compartilhado:
O `nginx-multisite` também roda o backend do protocolo:
```yaml
manual-backend:
  build:
    context: /var/www/sales_page/backend
  ports:
    - "3001:3001"
```

**Por quê?**
- O backend precisa estar na mesma rede Docker que o Nginx
- O Nginx faz proxy reverso: `/api/*` → `http://manual-backend:3001`

---

## 🔄 Fluxo de Requisições

### Exemplo 1: Acessar Protocolo

```
1. Usuário acessa: https://protocolo.vivasuamissao.top
   ↓
2. Proxy Manager recebe (porta 80/443)
   ↓
3. Proxy Manager encaminha para: nginx-multisite:8082
   ↓
4. Nginx lê o header "Host: protocolo.vivasuamissao.top"
   ↓
5. Nginx encontra o server block correspondente
   ↓
6. Nginx serve arquivos de: /var/www/protocolo/dist
   (que é montado de /var/www/sales_page/dist)
   ↓
7. Se for /api/*, Nginx faz proxy para: http://manual-backend:3001
```

### Exemplo 2: Acessar Doutora Escola

```
1. Usuário acessa: https://devpages.doutoraescola.com.br
   ↓
2. Proxy Manager recebe
   ↓
3. Proxy Manager encaminha para: nginx-multisite:8082
   ↓
4. Nginx lê o header "Host: devpages.doutoraescola.com.br"
   ↓
5. Nginx encontra o server block correspondente
   ↓
6. Nginx serve arquivos de: /var/www/doutora-escola/dist
```

---

## 🛠️ Como Usar na Prática

### Para atualizar o Protocolo (sales_page):

```bash
# 1. Fazer build
cd /var/www/sales_page
npm run build

# 2. Restart Nginx (se usar nginx-multisite)
cd /var/www/nginx-multisite
docker compose restart nginx-multisite

# OU usar o script automático
cd /var/www/nginx-multisite
./build-site.sh protocolo
```

### Para atualizar Doutora Escola:

```bash
# 1. Fazer build
cd /var/www/doutora-escola
npm run build

# 2. Restart Nginx
cd /var/www/nginx-multisite
docker compose restart nginx-multisite

# OU usar o script automático
cd /var/www/nginx-multisite
./build-site.sh doutora-escola
```

### Para atualizar todos os sites:

```bash
cd /var/www/nginx-multisite
./build-all.sh
```

---

## 🌐 Redes Docker

### `sales-network`:
- Rede criada pelo `sales_page/docker-compose.yml`
- Usada pelos containers do protocolo (app-prod, backend)

### `multisite-network`:
- Rede criada pelo `nginx-multisite/docker-compose.yml`
- Usada pelo nginx-multisite e manual-backend

### Interconexão:
- O `nginx-multisite` está em **ambas as redes**:
  ```yaml
  networks:
    - multisite-network
    - sales-network  # ← Rede externa do sales_page
  ```
- Isso permite que o Nginx acesse o backend do protocolo

---

## 📊 Portas e Containers

| Container | Porta Externa | Porta Interna | Função |
|-----------|---------------|---------------|--------|
| `nginx-multisite` | 8082 | 80 | Serve múltiplos sites |
| `sales-page-prod` | 8081 | 80 | Serve apenas protocolo (alternativa) |
| `manual-backend` | 3001 | 3001 | API do protocolo |
| `sales-page-dev` | 5173 | 5173 | Dev server (hot-reload) |

---

## ✅ Vantagens desta Arquitetura

1. **Economia de recursos**: 1 container Nginx em vez de N containers
2. **Deploy independente**: Cada site faz build quando quiser
3. **Escalável**: Fácil adicionar novos sites
4. **Simples**: Apenas arquivos estáticos em produção
5. **Backend compartilhado**: Um backend pode servir múltiplos sites

---

## 🚨 Pontos Importantes

1. **Build é necessário**: Sempre faça `npm run build` antes de servir em produção
2. **Nginx precisa restart**: Após mudanças no `nginx.conf` ou novos sites
3. **Volumes são read-only**: Nginx não modifica os arquivos, apenas serve
4. **Backend compartilhado**: O backend do protocolo roda no `nginx-multisite`
5. **Domínios no Proxy Manager**: Cada domínio aponta para `nginx-multisite:8082`

---

## 📝 Resumo Rápido

- **`sales_page`**: Site do protocolo (frontend + backend)
- **`doutora-escola`**: Site da doutora (só frontend)
- **`nginx-multisite`**: Servidor que serve ambos os sites + backend

**Fluxo**: Proxy Manager → nginx-multisite → arquivos estáticos (dist/) de cada site

---

**Última atualização:** 27/01/2026
