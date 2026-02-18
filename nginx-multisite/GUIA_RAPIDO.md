# 🚀 Guia Rápido - Nginx Multi-Site

## ✅ Setup Inicial (primeira vez)

```bash
cd /var/www/nginx-multisite

# 1. Build todos os sites
./build-all.sh

# 2. Subir o Nginx
docker compose up -d

# 3. Ver status
docker compose ps
```

**Pronto!** Agora você tem um Nginx servindo múltiplos sites na porta **8080**.

---

## 🌐 Configurar domínios no Proxy Manager

Para cada site, crie um **Proxy Host**:

### Site 1: Protocolo
- **Domain:** `protocolo.vivasuamissao.top`
- **Scheme:** `http`
- **Forward to:** `nginx-multisite` (nome do container) ou IP do servidor
- **Port:** `8080`
- **SSL:** Let's Encrypt (opcional)

### Site 2: Doutora Escola
- **Domain:** `doutora-escola.seudominio.com` (troque pelo domínio real)
- **Scheme:** `http`
- **Forward to:** `nginx-multisite`
- **Port:** `8080`
- **SSL:** Let's Encrypt (opcional)

> **Importante:** Todos os domínios apontam para o **mesmo** container (`nginx-multisite:8080`). O Nginx interno faz o roteamento pelo `server_name`.

---

## 📝 Adicionar um novo site

### 1. Criar o projeto
```bash
cd /var/www
mkdir meu-site
cd meu-site

# Copiar estrutura (package.json, vite.config, etc)
# Criar src/, public/, etc
```

### 2. Editar nginx.conf
```bash
nano /var/www/nginx-multisite/nginx.conf
```

Adicione:
```nginx
server {
    listen 80;
    server_name meu-site.com;
    root /var/www/meu-site/dist;
    index index.html;

    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json;

    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### 3. Editar docker-compose.yml
```bash
nano /var/www/nginx-multisite/docker-compose.yml
```

Adicione o volume:
```yaml
volumes:
  - /var/www/meu-site/dist:/var/www/meu-site/dist:ro
```

### 4. Build e restart
```bash
cd /var/www/nginx-multisite
./build-site.sh meu-site
docker compose restart nginx-multisite
```

### 5. Proxy Manager
Crie novo Proxy Host apontando para `nginx-multisite:8080`.

---

## 🔄 Atualizar um site

```bash
cd /var/www/nginx-multisite

# Atualizar um site específico
./build-site.sh protocolo
./build-site.sh doutora-escola

# Ou atualizar todos
./build-all.sh
```

O Nginx recarrega automaticamente após o build.

---

## 📊 Ver logs e status

```bash
cd /var/www/nginx-multisite

# Ver logs
docker compose logs -f nginx-multisite

# Ver status
docker compose ps

# Testar saúde
curl http://localhost:8080/health
```

---

## 🎯 Resumo da Arquitetura

```
Proxy Manager (8080)
    ↓
nginx-multisite (container)
    ├─ protocolo.vivasuamissao.top → /var/www/sales_page/dist
    ├─ doutora-escola.com → /var/www/doutora-escola/dist
    └─ site3.com → /var/www/site3/dist
```

**1 container Nginx, 100 sites estáticos, portas únicas!**

---

## 🚨 Troubleshooting

**Site não aparece:**
```bash
# 1. Verifique se o build existe
ls -la /var/www/sales_page/dist

# 2. Se não, faça o build
cd /var/www/sales_page
npm install && npm run build

# 3. Restart Nginx
cd /var/www/nginx-multisite
docker compose restart nginx-multisite
```

**404 no site:**
- Confira o `server_name` no `nginx.conf`
- Confira o domínio no Proxy Manager
- Veja os logs: `docker compose logs nginx-multisite`

---

**Dúvidas?** Leia o [README completo](README.md).
