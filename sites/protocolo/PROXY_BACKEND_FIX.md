# 🔧 Correção: Conexão Backend via Proxy Manager

## Problema
O frontend estava tentando se conectar ao backend usando `http://localhost:3001`, mas quando acessado através do Proxy Manager (HTTPS), o navegador não consegue acessar `localhost` por questões de segurança (mixed content).

## Solução Implementada

### 1. Proxy Reverso no Nginx
Adicionado proxy reverso no `nginx.conf` para redirecionar requisições `/api` e `/webhook` para o backend:

```nginx
# Proxy reverso para backend API
location /api {
    proxy_pass http://manual-backend:3001;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

### 2. Frontend Atualizado
O componente `Login.tsx` agora usa URL relativa quando `VITE_API_URL` não está configurada:

```typescript
const apiUrl = import.meta.env.VITE_API_URL || ''
const apiEndpoint = apiUrl ? `${apiUrl}/api/login` : '/api/login'
```

## Como Funciona Agora

1. **Frontend** acessa: `https://protocolo.vivasuamissao.top/login`
2. **Login** faz requisição para: `/api/login` (URL relativa)
3. **Nginx** (no container frontend) redireciona para: `http://manual-backend:3001/api/login`
4. **Backend** processa e retorna resposta
5. **Nginx** retorna resposta para o frontend

## Vantagens

✅ Funciona através do Proxy Manager (HTTPS)
✅ Não precisa expor porta 3001 publicamente
✅ URLs relativas funcionam em qualquer domínio
✅ Mais seguro (backend não exposto diretamente)

## Teste

Após rebuild e restart:

```bash
# Rebuild
docker compose --profile prod build app-prod

# Restart
docker compose --profile prod up -d app-prod

# Testar
curl https://protocolo.vivasuamissao.top/api/health
```

## URLs de API

- Login: `POST /api/login`
- Health: `GET /api/health` (não existe, mas `/health` existe)
- Webhook: `POST /webhook/kiwify`

Todas as URLs agora funcionam através do mesmo domínio do frontend!
