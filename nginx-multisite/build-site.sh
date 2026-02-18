#!/bin/bash
# Build de um site específico

set -e

if [ -z "$1" ]; then
    echo "Uso: ./build-site.sh <nome-do-site>"
    echo "Exemplo: ./build-site.sh protocolo"
    echo "         ./build-site.sh doutora-escola"
    echo "         ./build-site.sh ideias-doutora-escola   # ideias.doutoraescola.com.br (Astro, /v1 /v2...)"
    echo "         ./build-site.sh clube-doutora-escola"
    echo "         ./build-site.sh guia-pratico"
    echo "         ./build-site.sh roteiro-relatorios"
    echo "         ./build-site.sh codigos-bncc"
    echo "         ./build-site.sh planejamento-bncc"
    echo "         ./build-site.sh atividades-ludicas"
    echo "         ./build-site.sh relatorios-construtivistas"
    echo "         ./build-site.sh link-bio"
    exit 1
fi

SITE=$1
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

case $SITE in
    protocolo)
        SITE_PATH="/var/www/projetos/sites/protocolo"
        ;;
    doutora-escola)
        SITE_PATH="/var/www/projetos/sites/doutora-escola"
        ;;
    ideias-doutora-escola)
        # Site ideias.doutoraescola.com.br (Astro) – com /v1, /v2, etc.
        SITE_PATH="/var/www/projetos/sites-astros/doutora-escola"
        ;;
    codigos-bncc)
        SITE_PATH="/var/www/projetos/sites/codigos-bncc"
        ;;
    atividades-ludicas)
        SITE_PATH="/var/www/projetos/sites/atividades-ludicas"
        ;;
    clube-doutora-escola)
        SITE_PATH="/var/www/projetos/sites/clube-doutora-escola"
        ;;
    relatorios-construtivistas)
        SITE_PATH="/var/www/projetos/sites/relatorios-construtivistas"
        ;;
    planejamento-bncc)
        SITE_PATH="/var/www/projetos/sites/planejamento-bncc"
        ;;
    guia-pratico)
        SITE_PATH="/var/www/projetos/sites/guia-pratico"
        ;;
    roteiro-relatorios)
        SITE_PATH="/var/www/projetos/sites/roteiro-relatorios"
        ;;
    link-bio)
        SITE_PATH="/var/www/projetos/sites/link-bio"
        ;;
    depoimentos-fabrica)
        SITE_PATH="/var/www/projetos/sites/depoimentos-fabrica"
        ;;
    fabrica-magica)
        SITE_PATH="/var/www/projetos/sites-astros/fabrica-magica"
        ;;
    *)
        SITE_PATH="/var/www/$SITE"
        ;;
esac

if [ ! -d "$SITE_PATH" ]; then
    echo "❌ Pasta $SITE_PATH não encontrada!"
    exit 1
fi

echo -e "${YELLOW}📦 Building $SITE em $SITE_PATH...${NC}"

# Usar container Docker temporário para build
docker run --rm \
    -v "$SITE_PATH:/app" \
    -w /app \
    node:20-alpine \
    sh -c "npm install && npm run build"

echo -e "${GREEN}✅ $SITE buildado!${NC}\n"

echo -e "${YELLOW}🔄 Reiniciando Nginx...${NC}"
cd /var/www/projetos/nginx-multisite
docker compose restart nginx-multisite
echo -e "${GREEN}✅ Nginx reiniciado!${NC}"
