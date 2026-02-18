# 🔄 Reorganização e Integração - Proposta Completa

## 📋 Objetivos

1. **Organizar projetos em uma pasta principal** (`/var/www/projetos/`)
2. **Centralizar backend no nginx-multisite** (já está parcialmente feito)
3. **Explicar como o Facebook Pixel funciona** (não precisa ser servido pelo nginx)

---

## 🏗️ Proposta de Reorganização

### Estrutura Atual:
```
/var/www/
├── sales_page/          # Protocolo
├── doutora-escola/      # Doutora Escola
└── nginx-multisite/     # Servidor Nginx
```

### Estrutura Proposta:
```
/var/www/
└── projetos/            # ← Nova pasta organizadora
    ├── sites/           # Todos os sites frontend
    │   ├── protocolo/   # (era sales_page)
    │   └── doutora-escola/
    └── nginx-multisite/ # Servidor centralizado
```

**OU manter simples:**
```
/var/www/
└── projetos/
    ├── protocolo/       # (era sales_page)
    ├── doutora-escola/
    └── nginx-multisite/
```

---

## 🎯 Facebook Pixel - Como Funciona

### ❌ **NÃO precisa ser servido pelo Nginx**

O Facebook Pixel é uma **API do backend** que:
- Recebe eventos via `POST /api/facebook-pixel/track`
- Envia para Facebook Conversion API (CAPI)
- **Não serve arquivos estáticos**

### ✅ **Como está funcionando agora:**

```
Frontend (React)
    ↓
window.fbq('track', 'Purchase') → Facebook direto (client-side)
    +
fetch('/api/facebook-pixel/track') → Backend → Facebook CAPI (server-side)
```

### 🔄 **Fluxo Atual:**

1. **Frontend** chama `/api/facebook-pixel/track`
2. **Nginx** faz proxy para `manual-backend:3001` (já configurado!)
3. **Backend** processa e envia para Facebook API

**Já está funcionando!** O nginx-multisite já faz proxy para o backend.

---

## 🚀 Integração Completa no nginx-multisite

### Situação Atual:
- ✅ Backend já está no `nginx-multisite/docker-compose.yml`
- ✅ Nginx já faz proxy para `/api/*` → `manual-backend:3001`
- ✅ Facebook Pixel já funciona via backend

### O que podemos melhorar:

1. **Remover backend duplicado** do `sales_page/docker-compose.yml`
2. **Centralizar tudo no nginx-multisite**
3. **Organizar pastas** (opcional)

---

## 📝 Plano de Ação

### Opção 1: Reorganizar Pastas (Recomendado)

```bash
# 1. Criar estrutura nova
mkdir -p /var/www/projetos/sites

# 2. Mover projetos
mv /var/www/sales_page /var/www/projetos/sites/protocolo
mv /var/www/doutora-escola /var/www/projetos/sites/doutora-escola
mv /var/www/nginx-multisite /var/www/projetos/nginx-multisite

# 3. Atualizar nginx.conf
# Trocar caminhos:
# /var/www/sales_page/dist → /var/www/projetos/sites/protocolo/dist
# /var/www/doutora-escola/dist → /var/www/projetos/sites/doutora-escola/dist

# 4. Atualizar docker-compose.yml do nginx-multisite
# Trocar volumes:
# - /var/www/sales_page/dist → - /var/www/projetos/sites/protocolo/dist
# - /var/www/doutora-escola/dist → - /var/www/projetos/sites/doutora-escola/dist
# - /var/www/sales_page/backend → - /var/www/projetos/sites/protocolo/backend

# 5. Atualizar scripts build-all.sh e build-site.sh
```

### Opção 2: Manter Estrutura, Apenas Centralizar Backend

```bash
# 1. Remover backend do sales_page/docker-compose.yml
# (manter apenas frontend)

# 2. Garantir que nginx-multisite tem o backend
# (já tem, só verificar)

# 3. Atualizar nginx.conf para garantir proxy correto
```

---

## 🔧 Configuração Atual do Backend no nginx-multisite

### Já está configurado! ✅

**docker-compose.yml:**
```yaml
manual-backend:
  build:
    context: /var/www/sales_page/backend
  ports:
    - "3001:3001"
  env_file:
    - /var/www/sales_page/backend/.env
  volumes:
    - /var/www/sales_page/backend/data:/app/data
```

**nginx.conf:**
```nginx
location /api {
    proxy_pass http://manual-backend:3001;
    # ... headers ...
}

location /webhook {
    proxy_pass http://manual-backend:3001;
    # ... headers ...
}
```

**Facebook Pixel já funciona via:**
- `POST /api/facebook-pixel/track` → Backend → Facebook CAPI ✅

---

## 📊 Arquitetura Final Proposta

```
┌─────────────────────────────────────────┐
│         Proxy Manager (80/443)          │
└──────────────────┬──────────────────────┘
                   │
        ┌──────────┴──────────┐
        │                     │
        ▼                     ▼
┌──────────────┐    ┌──────────────────┐
│nginx-multisite│    │  Outros serviços │
│  (porta 8082) │    │  (se necessário) │
└──────┬───────┘    └──────────────────┘
       │
       ├─ protocolo.vivasuamissao.top
       │  └─ /var/www/.../protocolo/dist
       │
       ├─ devpages.doutoraescola.com.br
       │  └─ /var/www/.../doutora-escola/dist
       │
       ├─ /api/* → manual-backend:3001
       │  └─ Facebook Pixel API ✅
       │  └─ Webhooks ✅
       │  └─ Outras APIs ✅
       │
       └─ /webhook/* → manual-backend:3001
```

---

## ✅ Checklist de Integração

### Backend Centralizado:
- [x] Backend já está no `nginx-multisite/docker-compose.yml`
- [x] Nginx já faz proxy para `/api/*` e `/webhook/*`
- [x] Facebook Pixel já funciona via backend
- [ ] Remover backend duplicado do `sales_page/docker-compose.yml` (opcional)

### Reorganização (Opcional):
- [ ] Criar `/var/www/projetos/`
- [ ] Mover sites para `/var/www/projetos/sites/`
- [ ] Atualizar `nginx.conf` com novos caminhos
- [ ] Atualizar `docker-compose.yml` com novos volumes
- [ ] Atualizar scripts `build-all.sh` e `build-site.sh`

---

## 🎯 Recomendação

### ✅ **Fazer Agora:**
1. **Centralizar backend no nginx-multisite** (já está feito!)
2. **Remover backend do sales_page/docker-compose.yml** (se não usar mais)

### ⏳ **Fazer Depois (Opcional):**
1. Reorganizar pastas para `/var/www/projetos/`
2. Atualizar todos os caminhos

### ❌ **NÃO precisa:**
- Servir Facebook Pixel pelo Nginx (é API, não arquivo estático)
- Criar container separado para Pixel (já está no backend)

---

## 📝 Resumo

### Facebook Pixel:
- ✅ **Já funciona** via backend (`/api/facebook-pixel/track`)
- ✅ **Já está integrado** no nginx-multisite (proxy funciona)
- ❌ **NÃO precisa** ser servido como arquivo estático pelo Nginx

### Reorganização:
- ✅ **Pode fazer** para melhor organização
- ⚠️ **Requer atualização** de caminhos em vários arquivos
- 💡 **Recomendado** se vai adicionar muitos sites

### Backend:
- ✅ **Já está centralizado** no nginx-multisite
- ✅ **Facebook Pixel já funciona** através dele
- ✅ **Tudo integrado** e funcionando!

---

**Última atualização:** 27/01/2026
