#!/bin/bash
# Build de um site específico

set -e

if [ -z "$1" ]; then
    echo "Uso: ./build-site.sh <nome-do-site>"
    echo "Exemplo: ./build-site.sh protocolo"
    echo "         ./build-site.sh doutora-escola"
    echo "         ./build-site.sh ideias-doutora-escola      # ideias.doutoraescola.com.br (Astro, /v1 /v2...)"
    echo "         ./build-site.sh ideias-doutora-escola-v2   # colecao_campos_de_experiencias (Astro V2.0)"
    echo "         ./build-site.sh sondagem-na-pratica        # sondagem.doutoraescola.com.br (Astro)"
    echo "         ./build-site.sh fm-fonoaudiologa          # fono.doutoraescola.com.br (Astro)"
    echo "         ./build-site.sh clube-doutora-escola"
    echo "         ./build-site.sh guia-pratico"
    echo "         ./build-site.sh roteiro-relatorios"
    echo "         ./build-site.sh codigos-bncc"
    echo "         ./build-site.sh codigos-bncc-astro   # Códigos BNCC (Astro, em sites-astros)"
    echo "         ./build-site.sh planejamento-bncc"
    echo "         ./build-site.sh atividades-ludicas"
    echo "         ./build-site.sh relatorios-construtivistas"
    echo "         ./build-site.sh link-bio"
    echo "         ./build-site.sh fabrica-magica"
    echo "         ./build-site.sh relatorios-fm          # relatorios.doutoraescola.com.br (Astro)"
    echo "         ./build-site.sh protocolo-viva   # ou protocolo-vivasuamissap (Astro)"
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
    ideias-doutora-escola-v2)
        # Site colecao_campos_de_experiencias.doutoraescola.com.br (Astro) – V2.0, 5 blocos
        SITE_PATH="/var/www/projetos/sites-astros/doutora-escola-v2"
        ;;
    sondagem-na-pratica)
        # Site sondagem.doutoraescola.com.br (Astro) – Sondagem na Prática
        SITE_PATH="/var/www/projetos/sites-astros/sondagem-na-pratica"
        ;;
    fm-fonoaudiologa)
        # Site fono.doutoraescola.com.br (Astro) – Fábrica Mágica para Fonoaudiólogas
        SITE_PATH="/var/www/projetos/sites-astros/fm-fonoaudiologa"
        ;;
    codigos-bncc)
        SITE_PATH="/var/www/projetos/sites/codigos-bncc"
        ;;
    codigos-bncc-astro)
        # Códigos BNCC (Astro) – codigos.doutoraescola.com.br
        SITE_PATH="/var/www/projetos/sites-astros/codigos-bncc"
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
        # Site link.doutoraescola.com.br (Astro) – Link em bio
        SITE_PATH="/var/www/projetos/sites-astros/link-bio"
        ;;
    depoimentos-fabrica)
        SITE_PATH="/var/www/projetos/sites/depoimentos-fabrica"
        ;;
    fabrica-magica)
        SITE_PATH="/var/www/projetos/sites-astros/fabrica-magica"
        ;;
    relatorios-fm)
        # Site relatorios.doutoraescola.com.br (Astro) – Relatórios Fábrica Mágica
        SITE_PATH="/var/www/projetos/sites-astros/relatorios-fm"
        ;;
    protocolo-viva|protocolo-vivasuamissap)
        # Site protocolo.vivasuamissap.top (Astro) - Energia Sem Limites
        SITE_PATH="/var/www/projetos/sites-astros/protocolo"
        ;;
    *)
        SITE_PATH="/var/www/$SITE"
        ;;
esac

if [ ! -d "$SITE_PATH" ]; then
    echo "❌ Pasta $SITE_PATH não encontrada!"
    exit 1
fi

# Protocolo: otimiza imagens (WebP) antes do build para página leve
if [ "$SITE" = "protocolo" ]; then
    BUILD_CMD="npm install && npm run optimize-images && npm run build"
else
    BUILD_CMD="npm install && npm run build"
fi

echo -e "${YELLOW}📦 Building $SITE em $SITE_PATH...${NC}"

# Usar container Docker temporário para build (chmod dentro do container = arquivos criados por root ficam legíveis)
docker run --rm \
    -v "$SITE_PATH:/app" \
    -w /app \
    node:20-alpine \
    sh -c "$BUILD_CMD && (test -d /app/dist && chmod -R a+rX /app/dist || true)"

echo -e "${GREEN}✅ $SITE buildado!${NC}\n"

echo -e "${YELLOW}🔄 Reiniciando Nginx...${NC}"
cd /var/www/projetos/nginx-multisite
docker compose restart nginx-multisite
echo -e "${GREEN}✅ Nginx reiniciado!${NC}"
