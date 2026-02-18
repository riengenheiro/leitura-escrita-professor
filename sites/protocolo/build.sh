#!/bin/bash

# Script de build para Sales Page
# Uso: ./build.sh [opções]

set -e

cd "$(dirname "$0")"

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🐳 Build Sales Page - Docker Compose${NC}\n"

# Verificar se docker compose está disponível
if ! command -v docker &> /dev/null; then
    echo -e "${YELLOW}❌ Docker não encontrado. Instale o Docker primeiro.${NC}"
    exit 1
fi

# Função para build
build_all() {
    echo -e "${GREEN}📦 Fazendo build de todos os serviços...${NC}"
    docker compose --profile prod build "$@"
    echo -e "${GREEN}✅ Build concluído!${NC}\n"
}

# Função para subir serviços
up_services() {
    echo -e "${GREEN}🚀 Subindo serviços...${NC}"
    docker compose --profile prod up -d
    echo -e "${GREEN}✅ Serviços iniciados!${NC}\n"
}

# Função para mostrar status
show_status() {
    echo -e "${BLUE}📊 Status dos containers:${NC}"
    docker compose --profile prod ps
    echo ""
}

# Função para mostrar logs
show_logs() {
    echo -e "${BLUE}📋 Logs dos serviços:${NC}"
    docker compose --profile prod logs -f
}

# Menu de opções
case "${1:-all}" in
    build)
        build_all "${@:2}"
        ;;
    up)
        up_services
        ;;
    down)
        echo -e "${YELLOW}🛑 Parando serviços...${NC}"
        docker compose --profile prod down
        echo -e "${GREEN}✅ Serviços parados!${NC}"
        ;;
    restart)
        echo -e "${YELLOW}🔄 Reiniciando serviços...${NC}"
        docker compose --profile prod restart
        echo -e "${GREEN}✅ Serviços reiniciados!${NC}"
        ;;
    logs)
        show_logs
        ;;
    status)
        show_status
        ;;
    rebuild)
        echo -e "${YELLOW}🧹 Limpando e rebuildando...${NC}"
        docker compose --profile prod down
        build_all --no-cache
        up_services
        show_status
        ;;
    all|*)
        build_all
        up_services
        show_status
        echo -e "${GREEN}✨ Pronto! Serviços rodando.${NC}"
        echo -e "${BLUE}💡 Use './build.sh logs' para ver os logs${NC}"
        ;;
esac
