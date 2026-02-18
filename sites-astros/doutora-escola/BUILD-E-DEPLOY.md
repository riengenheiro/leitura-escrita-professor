# Build e deploy – Ideias Doutora Escola (Astro)

Site: **ideias.doutoraescola.com.br**  
Projeto: `/var/www/projetos/sites-astros/doutora-escola`

## Páginas de preço

| URL | Preço |
|-----|--------|
| `/` | R$ 10 |
| `/v1` ou `/v1/` | R$ 17 |
| `/v2` ou `/v2/` | R$ 27 |
| `/v3` ou `/v3/` | R$ 37 |
| `/v4` ou `/v4/` | R$ 47 |

## Como fazer build e publicar

**Sempre use o nome `ideias-doutora-escola`** (não use `doutora-escola`, que é outro projeto).

```bash
cd /var/www/projetos/nginx-multisite
./build-site.sh ideias-doutora-escola
```

O script vai:
1. Rodar `npm install` e `npm run build` no projeto Astro (via Docker)
2. Gerar/atualizar a pasta `sites-astros/doutora-escola/dist` (incluindo `v1/`, `v2/`, etc.)
3. Reiniciar o Nginx

## Testar no servidor (após deploy)

```bash
# Resposta esperada: 200 e página com R$ 17
curl -s -o /dev/null -w "%{http_code}" -H "Host: ideias.doutoraescola.com.br" http://127.0.0.1:8082/v1/
curl -s -H "Host: ideias.doutoraescola.com.br" http://127.0.0.1:8082/v1/ | grep -o 'R\$ 17' | head -1
```

## Se ainda não funcionar no navegador

1. **Limpe o cache** do navegador ou teste em aba anônima.
2. **Proxy Manager / CDN**: se usar proxy na frente do Nginx, pode ser cache; limpe cache do proxy ou aguarde o TTL.
3. **Confirme a porta**: o Nginx deste setup escuta na **8082**; o proxy deve encaminhar para essa porta.
