#!/bin/bash
set -e
FAVICO_SRC="/var/www/projetos/sites/favico.png"
[ ! -f "$FAVICO_SRC" ] && echo "favico.png nao encontrado" && exit 1
for site in protocolo doutora-escola codigos-bncc atividades-ludicas clube-doutora-escola relatorios-construtivistas planejamento-bncc guia-pratico roteiro-relatorios; do
  B="/var/www/projetos/sites/$site"
  [ -d "$B/public" ] && cp "$FAVICO_SRC" "$B/public/favico.png"
  [ -d "$B/dist" ] && cp "$FAVICO_SRC" "$B/dist/favico.png"
done
find /var/www/projetos/sites -name "index.html" -not -path "*/node_modules/*" | while read f; do
  grep -q favicon.svg "$f" && sed -i 's|favicon.svg|favico.png|g; s|image/svg+xml|image/png|g' "$f" && echo "OK $f"
done
echo "Favico aplicado."
