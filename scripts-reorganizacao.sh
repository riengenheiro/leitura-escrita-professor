#!/bin/bash
# Script para reorganizar projetos em /var/www/projetos/
# ATENÇÃO: Execute com cuidado e faça backup antes!

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🔄 Script de Reorganização de Projetos${NC}\n"

# Verificar se está rodando como root ou com sudo
if [ "$EUID" -ne 0 ]; then 
    echo -e "${RED}❌ Execute com sudo!${NC}"
    exit 1
fi

# Confirmar ação
echo -e "${YELLOW}⚠️  Este script vai:${NC}"
echo "   1. Criar /var/www/projetos/sites/"
echo "   2. Mover sales_page → projetos/sites/protocolo"
echo "   3. Mover doutora-escola → projetos/sites/doutora-escola"
echo "   4. Mover nginx-multisite → projetos/nginx-multisite"
echo ""
read -p "Continuar? (s/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Ss]$ ]]; then
    echo -e "${RED}❌ Cancelado.${NC}"
    exit 1
fi

# 1. Criar estrutura
echo -e "${YELLOW}📁 Criando estrutura de pastas...${NC}"
mkdir -p /var/www/projetos/sites
echo -e "${GREEN}✅ Estrutura criada${NC}"

# 2. Parar containers
echo -e "${YELLOW}🛑 Parando containers...${NC}"
cd /var/www/nginx-multisite 2>/dev/null && docker compose down || true
cd /var/www/sales_page 2>/dev/null && docker compose down || true
echo -e "${GREEN}✅ Containers parados${NC}"

# 3. Mover projetos
echo -e "${YELLOW}📦 Movendo projetos...${NC}"

if [ -d "/var/www/sales_page" ]; then
    mv /var/www/sales_page /var/www/projetos/sites/protocolo
    echo -e "${GREEN}✅ sales_page → projetos/sites/protocolo${NC}"
fi

if [ -d "/var/www/doutora-escola" ]; then
    mv /var/www/doutora-escola /var/www/projetos/sites/doutora-escola
    echo -e "${GREEN}✅ doutora-escola → projetos/sites/doutora-escola${NC}"
fi

if [ -d "/var/www/nginx-multisite" ]; then
    mv /var/www/nginx-multisite /var/www/projetos/nginx-multisite
    echo -e "${GREEN}✅ nginx-multisite → projetos/nginx-multisite${NC}"
fi

# 4. Atualizar nginx.conf
echo -e "${YELLOW}📝 Atualizando nginx.conf...${NC}"
NGINX_CONF="/var/www/projetos/nginx-multisite/nginx.conf"

if [ -f "$NGINX_CONF" ]; then
    sed -i 's|/var/www/sales_page/dist|/var/www/projetos/sites/protocolo/dist|g' "$NGINX_CONF"
    sed -i 's|/var/www/doutora-escola/dist|/var/www/projetos/sites/doutora-escola/dist|g' "$NGINX_CONF"
    echo -e "${GREEN}✅ nginx.conf atualizado${NC}"
fi

# 5. Atualizar docker-compose.yml do nginx-multisite
echo -e "${YELLOW}📝 Atualizando docker-compose.yml...${NC}"
DOCKER_COMPOSE="/var/www/projetos/nginx-multisite/docker-compose.yml"

if [ -f "$DOCKER_COMPOSE" ]; then
    sed -i 's|/var/www/sales_page/dist|/var/www/projetos/sites/protocolo/dist|g' "$DOCKER_COMPOSE"
    sed -i 's|/var/www/doutora-escola/dist|/var/www/projetos/sites/doutora-escola/dist|g' "$DOCKER_COMPOSE"
    sed -i 's|/var/www/sales_page/backend|/var/www/projetos/sites/protocolo/backend|g' "$DOCKER_COMPOSE"
    echo -e "${GREEN}✅ docker-compose.yml atualizado${NC}"
fi

# 6. Atualizar scripts de build
echo -e "${YELLOW}📝 Atualizando scripts de build...${NC}"

BUILD_ALL="/var/www/projetos/nginx-multisite/build-all.sh"
if [ -f "$BUILD_ALL" ]; then
    sed -i 's|/var/www/sales_page|/var/www/projetos/sites/protocolo|g' "$BUILD_ALL"
    sed -i 's|/var/www/doutora-escola|/var/www/projetos/sites/doutora-escola|g' "$BUILD_ALL"
    echo -e "${GREEN}✅ build-all.sh atualizado${NC}"
fi

BUILD_SITE="/var/www/projetos/nginx-multisite/build-site.sh"
if [ -f "$BUILD_SITE" ]; then
    sed -i 's|/var/www/sales_page|/var/www/projetos/sites/protocolo|g' "$BUILD_SITE"
    sed -i 's|/var/www/doutora-escola|/var/www/projetos/sites/doutora-escola|g' "$BUILD_SITE"
    echo -e "${GREEN}✅ build-site.sh atualizado${NC}"
fi

# 7. Criar symlinks (opcional - para compatibilidade)
echo -e "${YELLOW}🔗 Criando symlinks para compatibilidade...${NC}"
ln -sf /var/www/projetos/sites/protocolo /var/www/sales_page 2>/dev/null || true
ln -sf /var/www/projetos/sites/doutora-escola /var/www/doutora-escola 2>/dev/null || true
ln -sf /var/www/projetos/nginx-multisite /var/www/nginx-multisite 2>/dev/null || true
echo -e "${GREEN}✅ Symlinks criados${NC}"

echo ""
echo -e "${GREEN}🎉 Reorganização concluída!${NC}\n"
echo -e "${YELLOW}📋 Próximos passos:${NC}"
echo "   1. Verifique os arquivos atualizados"
echo "   2. cd /var/www/projetos/nginx-multisite"
echo "   3. docker compose up -d"
echo "   4. ./build-all.sh"
echo ""
echo -e "${BLUE}💡 Dica: Os symlinks permitem usar os caminhos antigos${NC}"
