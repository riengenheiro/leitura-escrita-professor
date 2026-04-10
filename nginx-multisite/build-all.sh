#!/bin/bash
# Build de todos os sites e restart do Nginx
# Usa Docker para build (não requer npm instalado no sistema)

set -e

GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}🔨 Building todos os sites...${NC}\n"

# Função para build com Docker
build_with_docker() {
    local SITE_PATH=$1
    local SITE_NAME=$2
    
    echo -e "${YELLOW}📦 Building $SITE_NAME...${NC}"
    
    # Usar container Docker temporário para build
    docker run --rm \
        -v "$SITE_PATH:/app" \
        -w /app \
        node:20-alpine \
        sh -c "npm install && npm run build"
    
    echo -e "${GREEN}✅ $SITE_NAME buildado!${NC}\n"
}

# Build Protocolo
build_with_docker "/var/www/projetos/sites/protocolo" "Protocolo"

# Build Doutora Escola
build_with_docker "/var/www/projetos/sites/doutora-escola" "Doutora Escola"

# Build Códigos BNCC
build_with_docker "/var/www/projetos/sites/codigos-bncc" "Códigos BNCC"

# Build Atividades Lúdicas
build_with_docker "/var/www/projetos/sites/atividades-ludicas" "Atividades Lúdicas"

# Build Clube Doutora Escola
build_with_docker "/var/www/projetos/sites/clube-doutora-escola" "Clube Doutora Escola"

# Build Relatórios Construtivistas (TEA)
build_with_docker "/var/www/projetos/sites/relatorios-construtivistas" "Relatórios Construtivistas"

# Build Guia Prático
build_with_docker "/var/www/projetos/sites-astros/guia-pratico" "Guia Prático"

# Build Roteiro Relatórios
build_with_docker "/var/www/projetos/sites/roteiro-relatorios" "Roteiro Relatórios"

# Build Link Bio (Astro)
build_with_docker "/var/www/projetos/sites-astros/link-bio" "Link Bio"

# Build Depoimentos Fábrica Mágica
build_with_docker "/var/www/projetos/sites/depoimentos-fabrica" "Depoimentos Fábrica Mágica"

# Build Fábrica Mágica (VSL)
build_with_docker "/var/www/projetos/sites/fabrica-magica" "Fábrica Mágica"

# Adicione novos sites aqui:
# build_with_docker "/var/www/projetos/sites/site3" "Site 3"

# Restart Nginx
echo -e "${YELLOW}🔄 Reiniciando Nginx...${NC}"
cd /var/www/projetos/nginx-multisite
docker compose restart nginx-multisite
echo -e "${GREEN}✅ Nginx reiniciado!${NC}\n"

echo -e "${GREEN}🎉 Todos os builds concluídos!${NC}"
