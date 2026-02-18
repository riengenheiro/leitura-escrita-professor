# Build e deploy – Relatórios Construtivistas (TEA)

## Build (igual aos outros sites)

```bash
cd /var/www/projetos/nginx-multisite
./build-site.sh relatorios-construtivistas
```

O script usa Docker para `npm install` e `npm run build` e depois reinicia o Nginx.

## Proxy Manager

Domínio no Nginx: **relatorioconstrutivista.doutoraescola.com.br**

1. **Proxy Host** no Nginx Proxy Manager:
   - **Domain Names:** `relatorioconstrutivista.doutoraescola.com.br`

2. **Forward:**
   - **Scheme:** `http`
   - **Forward Hostname / IP:** `nginx-multisite` (se na mesma rede Docker) ou IP do servidor
   - **Forward Port:** `80` (se hostname) ou `8082` (se IP)

3. Não alterar o header **Host**; deixar o Proxy Manager enviar **Host: relatorioconstrutivista.doutoraescola.com.br**.

4. SSL: ativar Let's Encrypt no Proxy Manager se quiser HTTPS.

## Teste direto (no servidor)

```bash
curl -s -o /dev/null -w "%{http_code}" -H "Host: relatorioconstrutivista.doutoraescola.com.br" http://127.0.0.1:8082/
# Esperado: 200
```

## Health check

```bash
curl -H "Host: relatorioconstrutivista.doutoraescola.com.br" http://127.0.0.1:8082/health
# Esperado: relatorios-construtivistas ok
```
