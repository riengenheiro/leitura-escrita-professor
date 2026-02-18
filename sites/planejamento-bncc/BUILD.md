# Build do Site Planejamento BNCC

## 📦 Instalação das Dependências

```bash
cd /var/www/projetos/sites/planejamento-bncc
npm install
```

## 🏗️ Build para Produção

```bash
npm run build
```

## 🔄 Atualização via nginx-multisite

Se você está usando o nginx-multisite, pode usar o script de build:

```bash
cd /var/www/projetos/nginx-multisite
./build-site.sh planejamento-bncc
```

## 🌐 Configuração no Nginx

Adicione o seguinte bloco no arquivo `nginx-multisite/nginx.conf`:

```nginx
# Planejamento BNCC
server {
    listen 80;
    server_name planejamento.doutoraescola.com.br;
    
    root /var/www/planejamento-bncc/dist;
    index index.html;
    
    # Compressão
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
    
    # Cache de assets estáticos
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # SPA - todas as rotas retornam index.html
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🐳 Volume no Docker Compose

Adicione no `nginx-multisite/docker-compose.yml`:

```yaml
volumes:
  - /var/www/projetos/sites/planejamento-bncc/dist:/var/www/planejamento-bncc/dist:ro
```

## 🔄 Restart do Nginx

Após configurar:

```bash
cd /var/www/projetos/nginx-multisite
docker compose restart nginx-multisite
```

## ✅ Verificação

Acesse: `http://planejamento.doutoraescola.com.br`

Ou via IP: `http://SEU_IP:8082` (com header Host: planejamento.doutoraescola.com.br)
