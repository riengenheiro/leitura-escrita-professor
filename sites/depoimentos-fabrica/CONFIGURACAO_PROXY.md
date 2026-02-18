# Configuração do Proxy Manager

## 📋 Instruções para configurar o domínio

Para tornar o site acessível publicamente, você precisa configurar um **Proxy Host** no **Nginx Proxy Manager**.

### Passos:

1. **Acesse o Nginx Proxy Manager** (normalmente em `http://seu-servidor:81`)

2. **Clique em "Proxy Hosts"** e depois em **"Add Proxy Host"**

3. **Preencha os campos:**

   **Na aba "Details":**
   - **Domain Names:** `depoimentos.doutoraescola.com.br`
   - **Scheme:** `http`
   - **Forward Hostname / IP:** `nginx-multisite` (nome do container) ou o IP do servidor
   - **Forward Port:** `8082`
   - **Cache Assets:** ✓ (marcar)
   - **Block Common Exploits:** ✓ (marcar)
   - **Websockets Support:** ☐ (desmarcar, não é necessário)

   **Na aba "SSL":**
   - **SSL Certificate:** Selecione "Request a new SSL Certificate"
   - **Force SSL:** ✓ (marcar)
   - **HTTP/2 Support:** ✓ (marcar)
   - **HSTS Enabled:** ✓ (marcar, opcional)
   - **Email Address:** Seu e-mail para Let's Encrypt
   - **I Agree to the Let's Encrypt Terms of Service:** ✓ (marcar)

4. **Clique em "Save"**

O Let's Encrypt irá gerar automaticamente um certificado SSL gratuito para o domínio.

### Verificação

Após alguns minutos, o site estará acessível em:
- **HTTP:** http://depoimentos.doutoraescola.com.br (redireciona para HTTPS)
- **HTTPS:** https://depoimentos.doutoraescola.com.br ✓

### Troubleshooting

Se o site não carregar:

1. Verifique se o DNS aponta para o servidor correto:
   ```bash
   nslookup depoimentos.doutoraescola.com.br
   ```

2. Verifique se o container nginx-multisite está rodando:
   ```bash
   docker ps | grep nginx-multisite
   ```

3. Teste o endpoint diretamente:
   ```bash
   curl http://localhost:8082/health
   # Deve retornar: depoimentos-fabrica ok
   ```

4. Verifique os logs do nginx:
   ```bash
   docker logs nginx-multisite
   ```

---

**Site configurado com sucesso! 🎉**
