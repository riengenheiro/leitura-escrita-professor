# ➕ Como Adicionar um Novo Site

## 📋 Passos

### 1. Criar a pasta do site

```bash
cd /var/www/projetos/sites
mkdir meu-novo-site
cd meu-novo-site
```

### 2. Criar estrutura básica

Copie a estrutura de um site existente:

```bash
# Copiar arquivos de configuração
cp ../doutora-escola/package.json .
cp ../doutora-escola/tsconfig.json .
cp ../doutora-escola/vite.config.ts .
cp ../doutora-escola/tailwind.config.js .

# Criar pastas
mkdir -p src/components src/hooks public
```

### 3. Adicionar ao nginx.conf

Edite `/var/www/projetos/nginx-multisite/nginx.conf`:

```nginx
# Site: Meu Novo Site
server {
    listen 80;
    server_name meu-site.com;
    root /var/www/projetos/sites/meu-novo-site/dist;
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
    add_header X-XSS-Protection "1; mode=block" always;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /health {
        access_log off;
        return 200 "meu-novo-site ok\n";
        add_header Content-Type text/plain;
    }
}
```

### 4. Adicionar ao docker-compose.yml

Edite `/var/www/projetos/nginx-multisite/docker-compose.yml`:

```yaml
volumes:
  - /var/www/projetos/sites/protocolo/dist:/var/www/protocolo/dist:ro
  - /var/www/projetos/sites/doutora-escola/dist:/var/www/doutora-escola/dist:ro
  - /var/www/projetos/sites/meu-novo-site/dist:/var/www/projetos/sites/meu-novo-site/dist:ro  # ← Adicione esta linha
```

### 5. Adicionar ao build-all.sh

Edite `/var/www/projetos/nginx-multisite/build-all.sh`:

```bash
# Build Meu Novo Site
echo -e "${YELLOW}📦 Building Meu Novo Site...${NC}"
cd /var/www/projetos/sites/meu-novo-site
npm install
npm run build
echo -e "${GREEN}✅ Meu Novo Site buildado!${NC}\n"
```

### 6. Adicionar ao build-site.sh

Edite `/var/www/projetos/nginx-multisite/build-site.sh`:

```bash
case $SITE in
    protocolo)
        SITE_PATH="/var/www/projetos/sites/protocolo"
        ;;
    doutora-escola)
        SITE_PATH="/var/www/projetos/sites/doutora-escola"
        ;;
    meu-novo-site)  # ← Adicione esta opção
        SITE_PATH="/var/www/projetos/sites/meu-novo-site"
        ;;
    *)
        SITE_PATH="/var/www/projetos/sites/$SITE"
        ;;
esac
```

### 7. Build e restart

```bash
cd /var/www/projetos/nginx-multisite
./build-site.sh meu-novo-site
docker compose restart nginx-multisite
```

### 8. Configurar no Proxy Manager

No **Nginx Proxy Manager**, crie um **Proxy Host**:

- **Domain Names:** `meu-site.com`
- **Scheme:** `http`
- **Forward to:** `nginx-multisite` (ou IP do servidor)
- **Forward Port:** `8082`
- **SSL:** Ative Let's Encrypt (opcional)

---

## ✅ Checklist

- [ ] Pasta do site criada
- [ ] Estrutura básica (package.json, src/, etc)
- [ ] Adicionado ao `nginx.conf`
- [ ] Adicionado ao `docker-compose.yml`
- [ ] Adicionado ao `build-all.sh`
- [ ] Adicionado ao `build-site.sh`
- [ ] Build executado
- [ ] Nginx reiniciado
- [ ] Proxy Host configurado no Proxy Manager

---

**Pronto!** Seu novo site está no ar! 🎉
