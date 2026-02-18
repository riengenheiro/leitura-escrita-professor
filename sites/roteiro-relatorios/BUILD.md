# Build do Site Roteiro Relatórios

## Desenvolvimento

```bash
cd /var/www/projetos/sites/roteiro-relatorios
npm install
npm run dev
```

Acesse: http://localhost:5175

## Build para Produção

```bash
cd /var/www/projetos/sites/roteiro-relatorios
npm run build
```

## Build usando script automático

```bash
cd /var/www/projetos/nginx-multisite
./build-site.sh roteiro-relatorios
```

## Reiniciar Nginx

```bash
cd /var/www/projetos/nginx-multisite
docker compose restart nginx-multisite
```
