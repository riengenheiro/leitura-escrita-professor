# Proxy Manager – codigos.doutoraescola.com.br

Se o site **codigos.doutoraescola.com.br** responde **500** no navegador mas o nginx responde **200** em teste direto, o problema está na configuração do **Proxy Manager**.

## Configuração correta no Nginx Proxy Manager

1. **Proxy Host** para o domínio: `codigos.doutoraescola.com.br`.

2. **Forward:**
   - **Scheme:** `http`
   - **Forward Hostname / IP:**  
     - Se o Proxy Manager está na **mesma rede Docker** que o `nginx-multisite`: use `nginx-multisite`.  
     - Se não: use o **IP do servidor** onde o Docker está rodando.
   - **Forward Port:**  
     - Se usou hostname `nginx-multisite`: **80**.  
     - Se usou IP do servidor: **8082** (porta publicada do container).

3. **Custom locations:** não é necessário.

4. **Advanced:** não altere o **Host** do request. O Proxy Manager deve enviar o header **Host: codigos.doutoraescola.com.br** para o backend (comportamento padrão). Não marque opções que troquem ou removam o Host.

## Conferir rede Docker

O container `nginx-multisite` usa a rede externa `sales_page_sales-network`.  
O Proxy Manager precisa conseguir acessar esse container:

- **Opção A:** Proxy Manager no mesmo host e na rede `sales_page_sales-network`  
  → Forward: **Hostname** `nginx-multisite`, **Port** `80`.
- **Opção B:** Proxy Manager em outro host ou fora dessa rede  
  → Forward: **IP do servidor** onde roda o `nginx-multisite`, **Port** `8082`.

## Teste direto (no servidor)

```bash
# Deve retornar 200 e o HTML do site
curl -s -o /dev/null -w "%{http_code}" -H "Host: codigos.doutoraescola.com.br" http://127.0.0.1:8082/
# Saída esperada: 200
```

Se esse comando retorna **200**, o nginx está ok; o 500 vem do Proxy Manager ou do caminho até ele (rede, hostname, porta ou alteração do Host).

---

## Sites e domínios no Proxy Manager

| Site | Domínio no Proxy Manager | Forward Port (se usar IP do servidor) |
|------|--------------------------|---------------------------------------|
| Códigos BNCC | `codigos.doutoraescola.com.br` | 8082 |
| Atividades Lúdicas | `atividadesludicas.doutoraescola.com.br` | 8082 |
| **Clube Doutora Escola** | **`clube.doutoraescola.com.br`** | 8082 |
| **Guia Prático** | **`guiapratico.doutoraescola.com.br`** | 8082 |
| Relatórios Construtivistas | `relatorioconstrutivista.doutoraescola.com.br` | 8082 |
| Doutora Escola (Ideias) | `ideias.doutoraescola.com.br` | 8082 |
| Planejamento BNCC | `planejamento.doutoraescola.com.br` | 8082 |
| **Link na Bio** | **`link.doutoraescola.com.br`** | 8082 |

Para **Link na Bio**: crie um Proxy Host com **Domain Names:** `link.doutoraescola.com.br`, **Scheme:** `http`, **Forward Hostname:** `nginx-multisite` (ou IP do servidor), **Forward Port:** `80` (se hostname) ou `8082` (se IP). **Não altere o header Host** em Advanced — o backend precisa receber `Host: link.doutoraescola.com.br` para servir o site correto (senão cai no site base/default).

Para **Clube Doutora Escola**: crie um Proxy Host com **Domain Names:** `clube.doutoraescola.com.br`, **Scheme:** `http`, **Forward Hostname:** `nginx-multisite` (ou IP do servidor), **Forward Port:** `80` (se hostname) ou `8082` (se IP).

---

## Erro 500 no Clube (clube.doutoraescola.com.br)

Se o site do **Clube** abre **500** no navegador:

1. **Confirme que o nginx está ok** (no servidor):
   ```bash
   curl -s -o /dev/null -w "%{http_code}" -H "Host: clube.doutoraescola.com.br" http://127.0.0.1:8082/
   ```
   Se retornar **200**, o problema está no **Proxy Manager**.

2. **No Nginx Proxy Manager**, no Proxy Host de `clube.doutoraescola.com.br`:
   - **Details:** Domain Names = `clube.doutoraescola.com.br` (sem www, a menos que use os dois).
   - **Forward:** Scheme = `http`, Forward Hostname = `nginx-multisite` (se na mesma rede) ou **IP do servidor**, Forward Port = `80` (com hostname) ou **8082** (com IP).
   - **Não** marque "Custom location" nem altere o header **Host** em Advanced (deixe o Host original).
   - Salve e teste de novo.

3. **Rede:** Se o Proxy Manager está em outro host ou fora da rede do `nginx-multisite`, use **IP do servidor** e porta **8082** (não 80).
