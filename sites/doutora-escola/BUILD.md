# 🚀 Comandos de Build

## Build do Site

```bash
cd /var/www/projetos/nginx-multisite
./build-site.sh doutora-escola
```

## Build de Todos os Sites

```bash
cd /var/www/projetos/nginx-multisite
./build-all.sh
```

## Reiniciar Nginx

```bash
cd /var/www/projetos/nginx-multisite
docker compose restart nginx-multisite
```

## Build + Restart (Tudo de uma vez)

```bash
cd /var/www/projetos/nginx-multisite
./build-site.sh doutora-escola && docker compose restart nginx-multisite
```

---

**Pronto!** 🎉
