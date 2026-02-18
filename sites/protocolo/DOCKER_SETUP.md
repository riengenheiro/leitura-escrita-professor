# 🐳 Configuração Docker - Facebook Pixel

Guia específico para rodar o projeto com Facebook Pixel em Docker.

## 📋 O que mudou

### ✅ Backend
- Adicionadas dependências: `node-fetch`, `cookie-parser`
- Novos arquivos: `FacebookPixelClient.js`, `pixelConfig.js`
- Endpoint novo: `/api/facebook-pixel/track`
- Variáveis de ambiente novas no `.env`

### ✅ Frontend
- Novos arquivos em `src/hooks/`, `src/components/`, `src/config/`
- Sem dependências novas (usa apenas React)

---

## 🚀 Setup Rápido

### 1. Atualizar o Backend `.env`

Edite **`/var/www/sales_page/backend/.env`**:

```env
# ... suas configurações existentes ...

# ⬇️ ADICIONE NO FINAL:
# Facebook Pixel
FACEBOOK_PIXEL_ID=seu_pixel_id_aqui
FACEBOOK_ACCESS_TOKEN=seu_token_aqui
FACEBOOK_TEST_EVENT_CODE=TEST12345
FACEBOOK_DEBUG=true
```

### 2. Rebuildar e Reiniciar os Containers

```bash
# Ir para o diretório do projeto
cd /var/www/sales_page

# Parar os containers
docker-compose down

# Rebuildar o backend (com novas dependências)
docker-compose build backend

# Subir novamente (produção)
docker-compose --profile prod up -d

# OU para desenvolvimento:
docker-compose --profile dev up -d
```

### 3. Verificar se está funcionando

```bash
# Ver logs do backend
docker-compose logs -f backend

# Testar o endpoint do Facebook Pixel
curl -X POST http://localhost:3001/api/facebook-pixel/track \
  -H "Content-Type: application/json" \
  -d '{
    "event_type": "PageView",
    "pixel_id": "123456789",
    "access_token": "seu_token",
    "test_event_code": "TEST12345"
  }'
```

---

## 🔧 Comandos Docker Úteis

### Parar containers
```bash
docker-compose down
```

### Rebuildar apenas o backend
```bash
docker-compose build backend
```

### Rebuildar tudo
```bash
docker-compose build
```

### Subir em produção
```bash
docker-compose --profile prod up -d
```

### Subir em desenvolvimento
```bash
docker-compose --profile dev up -d
```

### Ver logs
```bash
# Todos os serviços
docker-compose logs -f

# Apenas backend
docker-compose logs -f backend

# Apenas frontend
docker-compose logs -f app-prod  # ou app-dev
```

### Entrar no container do backend
```bash
docker exec -it manual-backend sh

# Dentro do container:
ls -la
cat .env
node -v
npm list
```

### Reiniciar apenas o backend (sem rebuild)
```bash
docker-compose restart backend
```

---

## 📁 Estrutura Docker

```
/var/www/sales_page/
├── docker-compose.yml          # Orquestração dos containers
├── Dockerfile                  # Frontend produção (Nginx)
├── Dockerfile.dev              # Frontend desenvolvimento (Vite)
└── backend/
    ├── Dockerfile              # Backend produção (Node.js)
    ├── .env                    # ⬅️ Configure aqui!
    ├── server.js               # ✅ Atualizado
    ├── FacebookPixelClient.js  # ✅ Novo
    ├── pixelConfig.js          # ✅ Novo
    └── package.json            # ✅ Atualizado
```

---

## 🌐 Portas

| Serviço | Porta Host | Porta Container | URL |
|---------|-----------|-----------------|-----|
| Frontend (Dev) | 5173 | 5173 | http://localhost:5173 |
| Frontend (Prod) | 8081 | 80 | http://localhost:8081 |
| Backend | 3001 | 3001 | http://localhost:3001 |

---

## 🔄 Atualizar Frontend (adicionar o Pixel)

### Opção 1: Editar direto no volume

Os arquivos em `/var/www/sales_page/src/` são montados como volume, então:

1. Edite o arquivo localmente
2. O hot-reload do Vite detecta automaticamente (em dev)
3. Para produção, precisa rebuildar

### Opção 2: Rebuild completo

```bash
# Parar
docker-compose down

# Rebuildar frontend
docker-compose build app-prod  # ou app-dev

# Subir novamente
docker-compose --profile prod up -d
```

---

## 📝 Adicionar o Pixel no Frontend

### No `src/App.tsx` (dentro do container ou no host):

```tsx
import { FacebookPixel } from './components/FacebookPixel';

function AppContent() {
  // ... código existente ...

  return (
    <>
      {/* ⬇️ ADICIONE AQUI */}
      <FacebookPixel 
        pixelId="123456789" 
        autoPageView={true}
        trackRouteChanges={true}
      />

      <Routes>
        {/* rotas existentes */}
      </Routes>
    </>
  );
}
```

Como os arquivos são montados como volume:
- **Desenvolvimento**: Hot-reload automático ✅
- **Produção**: Precisa rebuildar container ❌

---

## 🧪 Testar

### 1. Health Check do Backend

```bash
curl http://localhost:3001/health
```

Resposta esperada:
```json
{
  "status": "ok",
  "timestamp": "2024-01-27T...",
  "service": "manual-backend"
}
```

### 2. Testar Facebook Pixel API

```bash
curl -X POST http://localhost:3001/api/facebook-pixel/track \
  -H "Content-Type: application/json" \
  -d '{
    "event_type": "PageView",
    "config_id": "default"
  }'
```

### 3. Testar Frontend

Abra no navegador:
- **Dev**: http://localhost:5173
- **Prod**: http://localhost:8081

Abra DevTools (F12) e no Console digite:
```javascript
window.fbq('track', 'PageView')
```

---

## 🐛 Troubleshooting

### Backend não inicia

```bash
# Ver logs
docker-compose logs backend

# Verificar se .env está correto
docker exec -it manual-backend sh
cat .env
```

### Dependências faltando

```bash
# Forçar rebuild sem cache
docker-compose build --no-cache backend

# Reinstalar dependências
docker exec -it manual-backend sh
npm install
```

### Facebook Pixel não carrega no frontend

```bash
# Ver logs do frontend
docker-compose logs app-prod  # ou app-dev

# Verificar se arquivos foram copiados
docker exec -it sales-page-prod sh  # ou sales-page-dev
ls -la /app/src/components/FacebookPixel.tsx
ls -la /app/src/hooks/useFacebookPixel.ts
```

### Porta já em uso

```bash
# Verificar portas em uso
netstat -tulpn | grep -E '5173|8081|3001'

# Ou parar outros containers
docker ps
docker stop <container_id>
```

---

## 🔐 Segurança no Docker

### ✅ Boas práticas:

1. **Nunca commite o `.env`** com tokens reais
2. Use **secrets do Docker** em produção:
   ```yaml
   secrets:
     fb_token:
       external: true
   ```
3. Configure **network isolada** (já está: `sales-network`)
4. Use **health checks** (já configurado)
5. Limite **recursos do container**:
   ```yaml
   deploy:
     resources:
       limits:
         cpus: '1'
         memory: 512M
   ```

---

## 📊 Monitoramento

### Ver uso de recursos

```bash
docker stats
```

### Ver logs em tempo real

```bash
# Backend com filtro
docker-compose logs -f backend | grep "FB CAPI"

# Frontend
docker-compose logs -f app-prod
```

### Verificar saúde dos containers

```bash
docker ps

# Ver detalhes do health check
docker inspect --format='{{json .State.Health}}' manual-backend | jq
```

---

## 🚀 Deploy para Produção

### 1. Configurar `.env` de produção

```env
NODE_ENV=production
PORT=3001
FRONTEND_URL=https://protocolo.vivasuamissao.top

# Facebook Pixel
FACEBOOK_PIXEL_ID=seu_pixel_real
FACEBOOK_ACCESS_TOKEN=token_real
FACEBOOK_DEBUG=false  # ⬅️ Desabilitar em produção
# Remover FACEBOOK_TEST_EVENT_CODE
```

### 2. Build e Deploy

```bash
# Parar containers de dev
docker-compose --profile dev down

# Build produção
docker-compose build

# Subir produção
docker-compose --profile prod up -d

# Verificar
docker-compose ps
docker-compose logs -f
```

### 3. Configurar Proxy Reverso (Nginx)

Se você usa Nginx Proxy Manager ou similar:

```nginx
# Para o frontend
location / {
    proxy_pass http://localhost:8081;
}

# Para o backend API
location /api/ {
    proxy_pass http://localhost:3001;
}
```

---

## 📋 Checklist Docker

- [ ] `.env` configurado com tokens do Facebook
- [ ] Backend rebuildado: `docker-compose build backend`
- [ ] Containers iniciados: `docker-compose --profile prod up -d`
- [ ] Health check OK: `curl http://localhost:3001/health`
- [ ] Endpoint do Pixel testado
- [ ] Frontend com `<FacebookPixel>` adicionado
- [ ] Logs sem erros: `docker-compose logs`
- [ ] Facebook Events Manager recebendo eventos

---

## 🔄 Workflow de Desenvolvimento

```bash
# 1. Fazer alterações nos arquivos
vim backend/server.js

# 2. Se mudou dependências, rebuild
docker-compose build backend

# 3. Reiniciar container
docker-compose restart backend

# 4. Ver logs
docker-compose logs -f backend

# 5. Testar
curl http://localhost:3001/health
```

---

## 📚 Links Úteis

- **Docker Compose**: https://docs.docker.com/compose/
- **Node.js Docker**: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
- **Multi-stage builds**: https://docs.docker.com/develop/develop-images/multistage-build/

---

Tudo configurado para Docker! 🐳🚀

Qualquer dúvida sobre os containers, é só perguntar!
