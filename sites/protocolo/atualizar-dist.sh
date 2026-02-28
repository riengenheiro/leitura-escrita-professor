#!/bin/bash
# Script para atualizar arquivos do dist do protocolo
# Execute com: sudo ./atualizar-dist.sh

set -e

CONTAINER_NAME="sales-page-prod"
DIST_DIR="/var/www/projetos/sites/protocolo/dist"
OWNER="ia_proativa"

echo "🔄 Atualizando arquivos do dist..."

# Remove apenas os arquivos antigos de assets
if [ -d "$DIST_DIR/assets" ]; then
    echo "📁 Limpando assets antigos..."
    rm -f "$DIST_DIR/assets"/*
fi

# Copia arquivos do container
echo "📦 Copiando arquivos do container $CONTAINER_NAME..."
docker cp "$CONTAINER_NAME:/usr/share/nginx/html/assets/." "$DIST_DIR/assets/" 2>/dev/null || {
    echo "⚠️  Erro ao copiar assets, tentando método alternativo..."
    docker exec "$CONTAINER_NAME" sh -c "tar -czf - -C /usr/share/nginx/html assets" | tar -xzf - -C "$DIST_DIR/" 2>/dev/null || true
}

# Copia index.html se necessário
docker cp "$CONTAINER_NAME:/usr/share/nginx/html/index.html" "$DIST_DIR/index.html" 2>/dev/null || true

# Ajusta permissões
echo "🔐 Ajustando permissões..."
chown -R "$OWNER:$OWNER" "$DIST_DIR" 2>/dev/null || true
chmod -R 755 "$DIST_DIR" 2>/dev/null || true

echo "✅ Arquivos atualizados!"
echo "📁 Verificando arquivos em: $DIST_DIR/assets/"
ls -lh "$DIST_DIR/assets/" | head -5

