# 🐳 Guia de Build Docker - Sales Page

## 📋 Estrutura dos Serviços

O projeto possui 3 serviços Docker:

1. **app-prod** - Frontend React (produção) - Porta 8081
2. **backend** - API Node.js - Porta 3001
3. **app-dev** - Frontend React (desenvolvimento) - Porta 5173

---

## 🚀 Build Completo (Produção)

### Build de todos os serviços:

```bash
cd /var/www/sales_page

# Build de todos os serviços (frontend + backend)
docker compose --profile prod build

# Ou build sem cache (forçar rebuild completo)
docker compose --profile prod build --no-cache
```

### Subir todos os serviços:

```bash
# Subir frontend e backend em produção
docker compose --profile prod up -d

# Ver logs
docker compose --profile prod logs -f

# Ver status
docker compose --profile prod ps
```

---

## 🔧 Build Individual

### Build apenas do Frontend (Produção):

```bash
docker compose --profile prod build app-prod
```

### Build apenas do Backend:

```bash
docker compose build backend
```

### Build do Frontend (Desenvolvimento):

```bash
docker compose --profile dev build app-dev
```

---

## 📦 Comandos Úteis

### Parar todos os serviços:

```bash
docker compose --profile prod down
```

### Parar e remover volumes:

```bash
docker compose --profile prod down -v
```

### Rebuild e subir:

```bash
docker compose --profile prod up -d --build
```

### Ver logs de um serviço específico:

```bash
# Logs do frontend
docker compose --profile prod logs -f app-prod

# Logs do backend
docker compose logs -f backend
```

### Reiniciar um serviço específico:

```bash
docker compose --profile prod restart app-prod
docker compose restart backend
```

### Executar comandos dentro do container:

```bash
# Frontend
docker compose --profile prod exec app-prod sh

# Backend
docker compose exec backend sh
```

---

## 🧪 Desenvolvimento

### Subir ambiente de desenvolvimento:

```bash
docker compose --profile dev up -d app-dev
```

### Ver logs do desenvolvimento:

```bash
docker compose --profile dev logs -f app-dev
```

---

## 🔍 Verificar Status

### Ver containers rodando:

```bash
docker compose --profile prod ps
```

### Ver imagens criadas:

```bash
docker images | grep sales
```

### Verificar saúde dos serviços:

```bash
# Frontend
curl http://localhost:8081/health

# Backend
curl http://localhost:3001/health
```

---

## 🛠️ Troubleshooting

### Limpar tudo e recomeçar:

```bash
# Parar tudo
docker compose --profile prod down

# Remover imagens
docker compose --profile prod down --rmi all

# Limpar cache do Docker
docker system prune -a

# Rebuild completo
docker compose --profile prod build --no-cache
docker compose --profile prod up -d
```

### Verificar erros de build:

```bash
# Build com output detalhado
docker compose --profile prod build --progress=plain
```

### Verificar logs de build:

```bash
docker compose --profile prod build 2>&1 | tee build.log
```

---

## 📝 Checklist de Build

Antes de fazer o build, verifique:

- [ ] `package.json` do frontend tem `react-router-dom` instalado
- [ ] `backend/package.json` existe e tem todas as dependências
- [ ] `backend/.env` existe (copiar de `.env.example` se necessário)
- [ ] `backend/data/` tem permissões corretas (ou será criado automaticamente)
- [ ] Arquivo `nginx.conf` existe na raiz

---

## 🎯 Comando Rápido (Tudo de uma vez)

```bash
cd /var/www/sales_page && \
docker compose --profile prod build --no-cache && \
docker compose --profile prod up -d && \
docker compose --profile prod logs -f
```

---

## 📊 Portas dos Serviços

- **Frontend (Produção)**: `http://localhost:8081`
- **Backend API**: `http://localhost:3001`
- **Frontend (Dev)**: `http://localhost:5173`

---

## ⚙️ Variáveis de Ambiente

### Frontend
O frontend não precisa de `.env` localmente, mas em produção você pode criar:

```env
VITE_API_URL=https://seudominio.com/api
```

### Backend
O backend precisa do arquivo `backend/.env`:

```env
PORT=3001
RESEND_API_KEY=re_xxxxxxxxxxxxx
EMAIL_FROM=Manual <noreply@seudominio.com>
FRONTEND_URL=https://seudominio.com
NODE_ENV=production
```

---

**Última atualização:** 23/01/2026
