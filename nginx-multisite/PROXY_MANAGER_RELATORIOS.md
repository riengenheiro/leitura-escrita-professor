# Proxy Manager – relatorioconstrutivista.doutoraescola.com.br

Configuração do Nginx Proxy Manager para o site **Relatórios Construtivistas para Alunos com TEA**.

## Configuração no Nginx Proxy Manager

1. **Proxy Host** para o domínio: `relatorioconstrutivista.doutoraescola.com.br`.

2. **Forward:**
   - **Scheme:** `http`
   - **Forward Hostname / IP:** `nginx-multisite` (mesma rede Docker) ou IP do servidor
   - **Forward Port:** `80` (se hostname) ou `8082` (se IP)

3. **Advanced:** não altere o **Host** do request. O Proxy Manager deve enviar **Host: relatorioconstrutivista.doutoraescola.com.br**.

4. SSL: ative Let's Encrypt no Proxy Manager para HTTPS.

## Rede Docker

O container `nginx-multisite` está na rede `sales_page_sales-network`.

- **Proxy Manager na mesma rede:** Forward Hostname `nginx-multisite`, Port `80`.
- **Proxy Manager em outro host:** Forward IP do servidor, Port `8082`.

## Teste

```bash
curl -s -o /dev/null -w "%{http_code}" -H "Host: relatorioconstrutivista.doutoraescola.com.br" http://127.0.0.1:8082/
# Esperado: 200
```
