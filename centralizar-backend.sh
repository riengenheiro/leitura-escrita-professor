#!/bin/bash
# Script para centralizar backend no nginx-multisite
# Remove backend duplicado do sales_page/docker-compose.yml

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🔧 Centralizando Backend no nginx-multisite${NC}\n"

# Encontrar sales_page (pode estar em locais diferentes)
SALES_PAGE_PATH=""
if [ -d "/var/www/sales_page" ]; then
    SALES_PAGE_PATH="/var/www/sales_page"
elif [ -d "/var/www/projetos/sites/protocolo" ]; then
    SALES_PAGE_PATH="/var/www/projetos/sites/protocolo"
else
    echo -e "${YELLOW}⚠️  Pasta sales_page não encontrada.${NC}"
    echo "   Procurando em locais alternativos..."
    exit 1
fi

DOCKER_COMPOSE="$SALES_PAGE_PATH/docker-compose.yml"

if [ ! -f "$DOCKER_COMPOSE" ]; then
    echo -e "${YELLOW}⚠️  docker-compose.yml não encontrado em $SALES_PAGE_PATH${NC}"
    exit 1
fi

echo -e "${YELLOW}📝 Removendo backend do $DOCKER_COMPOSE...${NC}"

# Criar backup
cp "$DOCKER_COMPOSE" "$DOCKER_COMPOSE.backup"
echo -e "${GREEN}✅ Backup criado: $DOCKER_COMPOSE.backup${NC}"

# Verificar se já tem apenas frontend
if ! grep -q "backend:" "$DOCKER_COMPOSE"; then
    echo -e "${GREEN}✅ Backend já foi removido!${NC}"
    exit 0
fi

# Criar novo docker-compose.yml sem backend
cat > "$DOCKER_COMPOSE" << 'EOF'
services:
  # Serviço de desenvolvimento com hot-reload
  app-dev:
    build:
      context: .
      dockerfile: Dockerfile.dev
    container_name: sales-page-dev
    ports:
      - "5173:5173"  # Porta padrão do Vite
      - "3000:3000"  # Porta alternativa para CRA
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
      - CHOKIDAR_USEPOLLING=true
    stdin_open: true
    tty: true
    networks:
      - sales-network
    profiles:
      - dev

  # Serviço de produção otimizado
  app-prod:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: sales-page-prod
    ports:
      - "8081:80"  # Porta interna 8081 para proxy reverso
    restart: unless-stopped
    networks:
      - sales-network
    profiles:
      - prod
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s

  # NOTA: Backend foi movido para nginx-multisite/docker-compose.yml
  # O backend agora roda centralizado e é acessado via proxy do nginx-multisite

networks:
  sales-network:
    driver: bridge
EOF

echo -e "${GREEN}✅ Backend removido do docker-compose.yml${NC}"
echo ""
echo -e "${YELLOW}📋 Informações:${NC}"
echo "   - Backend agora roda apenas no nginx-multisite"
echo "   - Acesse via: http://seu-dominio/api/*"
echo "   - Facebook Pixel: POST /api/facebook-pixel/track"
echo ""
echo -e "${BLUE}💡 Para usar o backend:${NC}"
echo "   cd /var/www/nginx-multisite (ou /var/www/projetos/nginx-multisite)"
echo "   docker compose up -d manual-backend"
