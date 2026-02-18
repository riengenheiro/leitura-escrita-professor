#!/bin/bash
# Script para ajustar proprietário da pasta projetos

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🔧 Ajustando proprietário da pasta projetos...${NC}\n"

# Verificar se está rodando com sudo
if [ "$EUID" -ne 0 ]; then 
    echo -e "${YELLOW}⚠️  Executando com sudo...${NC}"
    sudo chown -R ia_proativa:ia_proativa /var/www/projetos
else
    chown -R ia_proativa:ia_proativa /var/www/projetos
fi

echo -e "${GREEN}✅ Proprietário ajustado!${NC}\n"

# Verificar resultado
echo -e "${BLUE}📋 Verificando propriedade:${NC}"
ls -ld /var/www/projetos
ls -ld /var/www/projetos/sites
ls -ld /var/www/projetos/nginx-multisite

echo -e "\n${GREEN}🎉 Concluído!${NC}"
