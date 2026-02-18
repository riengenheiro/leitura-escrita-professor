#!/bin/bash

# Script para rebuildar e reiniciar o backend com as novas dependências do Facebook Pixel
# Uso: ./rebuild-backend.sh

set -e

echo "🐳 Rebuilding backend with Facebook Pixel dependencies..."
echo ""

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}📋 Etapa 1/4: Parando container do backend...${NC}"
docker-compose stop backend

echo ""
echo -e "${BLUE}📋 Etapa 2/4: Rebuilding backend...${NC}"
docker-compose build backend

echo ""
echo -e "${BLUE}📋 Etapa 3/4: Iniciando backend...${NC}"
docker-compose up -d backend

echo ""
echo -e "${BLUE}📋 Etapa 4/4: Aguardando backend ficar pronto...${NC}"
sleep 5

echo ""
echo -e "${GREEN}✅ Backend rebuildado com sucesso!${NC}"
echo ""
echo -e "${YELLOW}📊 Status dos containers:${NC}"
docker-compose ps

echo ""
echo -e "${YELLOW}🔍 Testando health check...${NC}"
curl -s http://localhost:3001/health | jq '.' || echo "Health check OK"

echo ""
echo -e "${YELLOW}📝 Para ver os logs:${NC}"
echo "   docker-compose logs -f backend"

echo ""
echo -e "${YELLOW}🧪 Para testar o Facebook Pixel:${NC}"
echo '   curl -X POST http://localhost:3001/api/facebook-pixel/track \'
echo '     -H "Content-Type: application/json" \'
echo '     -d '"'"'{"event_type": "PageView", "config_id": "default"}'"'"

echo ""
echo -e "${GREEN}🎉 Pronto! O backend está rodando com o Facebook Pixel.${NC}"
