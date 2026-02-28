#!/bin/bash
# Script para copiar arquivos do container para o diretório dist local
# Execute com: sudo ./copiar-dist.sh

set -e

CONTAINER_NAME="sales-page-prod"
DIST_DIR="/var/www/projetos/sites/protocolo/dist"

echo "Copiando arquivos do container $CONTAINER_NAME para $DIST_DIR..."

# Remove arquivos antigos
rm -rf "$DIST_DIR"/*

# Copia arquivos do container
docker cp "$CONTAINER_NAME:/usr/share/nginx/html/." "$DIST_DIR/"

# Ajusta permissões
chown -R ia_proativa:ia_proativa "$DIST_DIR"

echo "✅ Arquivos copiados com sucesso!"
echo "📁 Arquivos em: $DIST_DIR"

