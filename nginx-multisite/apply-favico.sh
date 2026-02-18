#!/bin/bash
# Aplica favico.png como favicon em todos os sites
# Execute: ./nginx-multisite/apply-favico.sh (a partir de /var/www/projetos)

set -e
FAVICO_SRC="/var/www/projetos/sites/favico.png"

if [ ! -f "$FAVICO_SRC" ]; then
    echo "Arquivo $FAVICO_SRC nao encontrado."
    exit 1
fi

SITES="protocolo doutora-escola codigos-bncc atividades-ludicas clube-doutora-escola relatorios-construtivistas planejamento-bncc guia-pratico roteiro-relatorios"

for site in $SITES; do
    BASE="/var/www/projetos/sites/$site"
    [ ! -d "$BASE" ] && continue
    [ -d "$BASE/public" ] && cp "$FAVICO_SRC" "$BASE/public/favico.png" && echo "  $site: public/"
    [ -d "$BASE/dist" ]   && cp "$FAVICO_SRC" "$BASE/dist/favico.png"   && echo "  $site: dist/"
done

find /var/www/projetos/sites -name "index.html" \( -path "*/dist/index.html" -o -path "*/sites/*/index.html" \) ! -path "*/node_modules/*" 2>/dev/null | while read -r f; do
    case "$f" in */dist/index.html|*/sites/*/index.html) ;; *) continue ;; esac
    if grep -q 'favicon\.svg' "$f" 2>/dev/null; then
        sed -i 's|type="image/svg+xml" href="/favicon.svg"|type="image/png" href="/favico.png"|g' "$f"
        sed -i 's|href="/favicon.svg"|href="/favico.png"|g' "$f"
        echo "Atualizado: $f"
    fi
done

echo "Concluido: favico.png aplicado."
