# Sales Page - Páginas de Venda React

Estrutura moderna para páginas de venda em React com Docker.

## 🚀 Tecnologias

- **React** - Biblioteca JavaScript moderna
- **Vite** - Build tool ultrarrápido
- **TypeScript** - Tipagem estática (opcional)
- **Nginx** - Servidor web otimizado para produção
- **Docker** - Containerização

## 📋 Pré-requisitos

- Docker Engine 20.10+
- Docker Compose 2.0+

## 🛠️ Uso

### Desenvolvimento

Para rodar em modo desenvolvimento com hot-reload:

```bash
docker-compose --profile dev up
```

A aplicação estará disponível em: `http://localhost:5173`

### Produção

Para buildar e rodar em produção:

```bash
# Build da imagem
docker-compose --profile prod build

# Rodar em produção
docker-compose --profile prod up -d
```

A aplicação estará disponível em: `http://localhost:80`

### Comandos Úteis

```bash
# Ver logs
docker-compose logs -f

# Parar containers
docker-compose down

# Rebuild completo
docker-compose build --no-cache

# Limpar volumes e imagens
docker-compose down -v --rmi all
```

## 📁 Estrutura do Projeto

```
.
├── Dockerfile              # Build produção
├── Dockerfile.dev          # Desenvolvimento
├── docker-compose.yml      # Orquestração
├── nginx.conf              # Configuração Nginx
├── .dockerignore           # Arquivos ignorados no build
└── README.md               # Esta documentação
```

## 🔧 Configuração

### Portas

- **Desenvolvimento**: 5173 (Vite) ou 3000 (CRA)
- **Produção**: 80 (HTTP) e 443 (HTTPS - configurar certificado)

### Variáveis de Ambiente

Crie um arquivo `.env` para variáveis personalizadas:

```env
NODE_ENV=production
REACT_APP_API_URL=https://api.exemplo.com
```

## 🎯 Próximos Passos

1. Configurar certificado SSL para HTTPS (Let's Encrypt)
2. Adicionar CI/CD pipeline
3. Configurar domínio customizado
4. Implementar monitoramento e logs

## 📝 Notas

- O Nginx está configurado para SPA (Single Page Application)
- Gzip está habilitado para otimização
- Cache de assets estáticos configurado para 1 ano
- Health check endpoint disponível em `/health`
