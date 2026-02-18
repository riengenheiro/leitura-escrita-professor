# 🌐 Nginx Multi-Site

Um único container Nginx servindo múltiplos sites estáticos.

## 📁 Estrutura

```
/var/www/
├── nginx-multisite/          ← Este projeto (Nginx)
│   ├── nginx.conf            ← Config com server blocks
│   ├── docker-compose.yml    ← Container Nginx + backend
│   ├── build-all.sh          ← Build todos os sites
│   └── build-site.sh         ← Build um site específico
│
├── sales_page/               ← Site 1: Protocolo
│   ├── src/
│   ├── dist/                 ← Build aqui (npm run build)
│   └── package.json
│
├── doutora-escola/           ← Site 2: Doutora Escola
│   ├── src/
│   ├── dist/                 ← Build aqui (npm run build)
│   └── package.json
│
└── site3/                    ← Novos sites seguem o mesmo padrão
    ├── src/
    ├── dist/
    └── package.json
```

## 🚀 Como usar

### 1. Primeiro uso (setup inicial)

```bash
cd /var/www/nginx-multisite

# Build todos os sites
./build-all.sh

# Subir o Nginx
docker compose up -d
```

### 2. Build de todos os sites + restart Nginx

```bash
cd /var/www/nginx-multisite
./build-all.sh
```

### 3. Build de um site específico

```bash
cd /var/www/nginx-multisite

# Build só o protocolo
./build-site.sh protocolo

# Build só a doutora-escola
./build-site.sh doutora-escola

# Build outro site
./build-site.sh site3
```

### 4. Ver logs

```bash
docker compose logs -f nginx-multisite
```

### 5. Restart Nginx (sem rebuild)

```bash
docker compose restart nginx-multisite
```

## ➕ Adicionar um novo site

### Passo 1: Criar o projeto

```bash
cd /var/www
mkdir meu-novo-site
cd meu-novo-site

# Copiar estrutura de um site existente
cp -r ../doutora-escola/package.json .
cp -r ../doutora-escola/vite.config.ts .
cp -r ../doutora-escola/tsconfig.json .
cp -r ../doutora-escola/tailwind.config.js .
# ... etc

# Criar src/, public/, etc
mkdir -p src public
```

### Passo 2: Adicionar ao nginx.conf

Edite `/var/www/nginx-multisite/nginx.conf` e adicione:

```nginx
server {
    listen 80;
    server_name meu-novo-site.com;
    root /var/www/meu-novo-site/dist;
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

### Passo 3: Adicionar ao docker-compose.yml

Edite `/var/www/nginx-multisite/docker-compose.yml` e adicione o volume:

```yaml
volumes:
  - /var/www/meu-novo-site/dist:/var/www/meu-novo-site/dist:ro
```

### Passo 4: Adicionar ao build-all.sh

Edite `/var/www/nginx-multisite/build-all.sh` e adicione:

```bash
echo -e "${YELLOW}📦 Building Meu Novo Site...${NC}"
cd /var/www/meu-novo-site
npm install
npm run build
echo -e "${GREEN}✅ Meu Novo Site buildado!${NC}\n"
```

### Passo 5: Build e restart

```bash
cd /var/www/nginx-multisite
./build-site.sh meu-novo-site
docker compose restart nginx-multisite
```

### Passo 6: Configurar domínio no Proxy Manager

No **Nginx Proxy Manager**, crie um **Proxy Host**:

- **Domain Names:** `meu-novo-site.com`
- **Scheme:** `http`
- **Forward Hostname/IP:** `nginx-multisite` (nome do container) ou IP do servidor
- **Forward Port:** `8080`
- **SSL:** Ative Let's Encrypt se quiser HTTPS

## 🔧 Manutenção

### Ver status dos containers

```bash
docker compose ps
```

### Ver saúde do Nginx

```bash
curl http://localhost:8080/health
```

### Limpar e reconstruir tudo

```bash
docker compose down
./build-all.sh
docker compose up -d
```

## 📊 Portas

- **Nginx Multi-Site:** `8080` → mapeia para `80` dentro do container
- **Backend (Protocolo):** `3001`

## 🎯 Proxy Manager

Configure cada domínio para apontar para:

- **Host:** `nginx-multisite` (ou IP do servidor)
- **Port:** `8080`
- O Nginx interno (nginx.conf) faz o roteamento por `server_name`

## 💡 Vantagens desta arquitetura

✅ **1 container Nginx** em vez de 100  
✅ **Leve:** Nginx consome ~10MB RAM por site  
✅ **Deploy independente:** cada site faz build quando quiser  
✅ **Escalável:** adicione 100 sites facilmente  
✅ **Simples:** só static files, sem Node rodando em produção  

## 🚨 Troubleshooting

**Nginx não acha o dist/**
```bash
# Verifique se o build foi feito
ls -la /var/www/sales_page/dist
ls -la /var/www/doutora-escola/dist

# Se não existir, build
cd /var/www/sales_page && npm run build
cd /var/www/doutora-escola && npm run build
```

**Site não carrega (404)**
- Verifique o `server_name` no `nginx.conf`
- Verifique se o domínio no Proxy Manager está correto
- Veja os logs: `docker compose logs nginx-multisite`

**Mudanças no código não aparecem**
- Faça o build: `./build-site.sh nome-do-site`
- Limpe o cache do browser (Ctrl+Shift+R)

---

**Última atualização:** 27/01/2026
