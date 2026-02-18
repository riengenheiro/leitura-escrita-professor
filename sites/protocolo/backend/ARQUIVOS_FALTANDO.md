# 📝 Arquivos do Backend que Precisam ser Criados

Os seguintes arquivos precisam ser criados manualmente (ou via terminal):

## 1. backend/package.json

```json
{
  "name": "manual-backend",
  "version": "1.0.0",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "resend": "^3.2.0",
    "bcrypt": "^5.1.1"
  }
}
```

## 2. backend/server.js

Ver código completo no arquivo `IMPLEMENTACAO.md` na raiz do projeto, ou criar baseado no exemplo fornecido anteriormente.

## 3. backend/.env.example

```env
PORT=3001
RESEND_API_KEY=re_xxxxxxxxxxxxx
EMAIL_FROM=Manual <noreply@seudominio.com>
FRONTEND_URL=https://seudominio.com
NODE_ENV=production
```

## 4. backend/.gitignore

```
node_modules/
.env
data/
*.log
.DS_Store
```

## 5. backend/Dockerfile

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .
RUN mkdir -p data

EXPOSE 3001

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

CMD ["node", "server.js"]
```

## Comando Rápido para Criar Todos

```bash
cd /var/www/sales_page/backend

# Criar package.json
cat > package.json << 'EOF'
{
  "name": "manual-backend",
  "version": "1.0.0",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "resend": "^3.2.0",
    "bcrypt": "^5.1.1"
  }
}
EOF

# Criar .env.example
cat > .env.example << 'EOF'
PORT=3001
RESEND_API_KEY=re_xxxxxxxxxxxxx
EMAIL_FROM=Manual <noreply@seudominio.com>
FRONTEND_URL=https://seudominio.com
NODE_ENV=production
EOF

# Criar .gitignore
cat > .gitignore << 'EOF'
node_modules/
.env
data/
*.log
.DS_Store
EOF

# Criar Dockerfile
cat > Dockerfile << 'EOF'
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN mkdir -p data
EXPOSE 3001
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"
CMD ["node", "server.js"]
EOF
```

**Nota:** O arquivo `server.js` é muito grande para criar via terminal. Use um editor de texto ou peça para eu criar separadamente.
