# Erro 500 no site Sondagem (sondagem.doutoraescola.com.br)

## O que já foi ajustado

1. **Permissões** — O `build-site.sh` agora roda `chmod -R a+rX` no `dist/` após o build, para o Nginx conseguir ler os arquivos.
2. **Nginx** — Ordem dos `location` e `return` no `/health` ajustados.

## Se ainda der 500, faça na ordem:

### 1. Rebuild e permissões

```bash
cd /var/www/projetos/nginx-multisite
./build-site.sh sondagem-na-pratica
```

(O script já corrige as permissões do `dist`.)

### 2. Ver se o Nginx enxerga o dist dentro do container

```bash
docker exec nginx-multisite ls -la /var/www/projetos/sites-astros/sondagem-na-pratica/dist
```

- Se der **"No such file or directory"**: o volume do container não está batendo com o `root` do Nginx. Confirme no servidor que a pasta existe:
  - `/var/www/projetos/sites-astros/sondagem-na-pratica/dist`
- Se existir: confira se há `index.html` e se as permissões permitem leitura (ex.: `r--` para arquivos, `r-x` para pastas).

### 3. Testar configuração do Nginx

```bash
docker exec nginx-multisite nginx -t
```

Se der erro de sintaxe, corrija o `nginx.conf` e reinicie:

```bash
docker compose restart nginx-multisite
```

### 4. Ver o log de erro do Nginx

```bash
docker exec nginx-multisite cat /var/log/nginx/error.log
```

Procure linhas com `sondagem` ou o path do site; a mensagem costuma indicar "Permission denied" ou "No such file".

### 5. Caminho do projeto no servidor

O `docker-compose.yml` e o `nginx.conf` usam:

- **Host:** `/var/www/projetos/sites-astros/sondagem-na-pratica/dist`
- **Container:** mesmo path

Se no servidor o projeto estiver em outro lugar (ex.: `/home/user/projetos`), você precisa:

- ou copiar/linkar o `dist` para `/var/www/projetos/sites-astros/sondagem-na-pratica/dist`,  
- ou alterar no `docker-compose.yml` o volume e no `nginx.conf` o `root` para o path real do servidor.

Depois:

```bash
docker compose up -d
# ou
docker compose restart nginx-multisite
```
