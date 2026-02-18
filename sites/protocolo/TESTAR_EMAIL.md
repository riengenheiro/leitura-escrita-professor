# 🧪 Como Testar o Envio de Email SMTP

## ⚠️ IMPORTANTE: Antes de testar

1. **Configure a senha no `.env`**:
   - Edite `/var/www/sales_page/backend/.env`
   - Substitua `SUA_SENHA_AQUI` pela senha real do email `suporte@vivasuamissao.top`

2. **Reconstrua o container** (para instalar o nodemailer):
   ```bash
   cd /var/www/sales_page
   docker compose build backend
   docker compose up -d backend
   ```

## 🧪 Método 1: Script de Teste (Recomendado)

Execute o script de teste dentro do container:

```bash
docker compose exec backend node test-email.js ricardo@viafiltros.com.br
```

Ou teste com outro email:

```bash
docker compose exec backend node test-email.js seu-email@teste.com
```

## 🧪 Método 2: Endpoint de Teste (se habilitado)

Se o endpoint de teste estiver habilitado (apenas em desenvolvimento):

```bash
curl -X POST http://localhost:3001/api/test/create-user \
  -H "Content-Type: application/json" \
  -d '{"email":"ricardo@viafiltros.com.br"}'
```

## 🧪 Método 3: Simular Webhook da Kiwify

Teste completo simulando uma venda:

```bash
curl -X POST https://protocolo.vivasuamissao.top/webhook/kiwify \
  -H "Content-Type: application/json" \
  -H "X-Kiwify-Token: npjyiwbk74h" \
  -d '{
    "webhook_event_type": "order_approved",
    "order_status": "paid",
    "Customer": {
      "email": "ricardo@viafiltros.com.br"
    },
    "order_id": "test-123"
  }'
```

## 📋 Verificar Logs

Após qualquer teste, verifique os logs:

```bash
docker compose logs -f backend
```

Você deve ver:
- ✅ `SMTP configurado: ✅ Sim`
- ✅ `SMTP configurado e conectado com sucesso`
- ✅ `📧 Enviando email via SMTP para: ricardo@viafiltros.com.br`
- ✅ `✅ Email enviado com sucesso via SMTP`

## ❌ Problemas Comuns

### Erro: "SMTP_PASS não configurada"
- **Solução**: Edite o `.env` e coloque a senha real

### Erro: "Connection timeout" ou "ECONNREFUSED"
- **Solução**: Verifique se o host `mail.vivasuamissao.top` está acessível
- Teste: `ping mail.vivasuamissao.top`

### Erro: "Invalid login" ou "Authentication failed"
- **Solução**: Verifique se a senha está correta
- Verifique se o usuário `suporte@vivasuamissao.top` existe

### Erro: "nodemailer not found"
- **Solução**: Reconstrua o container:
  ```bash
  docker compose build backend
  docker compose up -d backend
  ```

## ✅ Sucesso

Se o email foi enviado com sucesso, você verá nos logs:
```
✅ Email enviado com sucesso via SMTP para: ricardo@viafiltros.com.br
   Message ID: <xxx@mail.vivasuamissao.top>
```

E o destinatário receberá o email na caixa de entrada (ou spam).
