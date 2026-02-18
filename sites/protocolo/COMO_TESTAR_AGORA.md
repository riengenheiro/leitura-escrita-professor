# 🧪 Como Testar o Email Agora

## ✅ Status Atual

O backend está rodando e o SMTP está configurado! ✅

Você pode ver nos logs:
- ✅ `SMTP configurado: ✅ Sim`
- ✅ `Usando SMTP para envio de emails`

## ⚠️ IMPORTANTE: Configure a Senha

Antes de testar, você **PRECISA** editar o arquivo `.env` e colocar a senha real:

```bash
nano /var/www/sales_page/backend/.env
```

Substitua esta linha:
```env
SMTP_PASS=SUA_SENHA_AQUI
```

Por:
```env
SMTP_PASS=senha_real_do_email_suporte@vivasuamissao.top
```

Depois reinicie o backend:
```bash
cd /var/www/sales_page
docker compose restart backend
```

## 🧪 Teste Rápido

### Opção 1: Script de Teste (Recomendado)

```bash
docker compose exec backend node test-email.js ricardo@viafiltros.com.br
```

Este script vai:
1. Verificar a configuração SMTP
2. Testar a conexão
3. Enviar um email de teste para `ricardo@viafiltros.com.br`

### Opção 2: Simular Webhook da Kiwify

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

## 📋 Verificar Resultado

### 1. Verificar Logs

```bash
docker compose logs -f backend
```

Você deve ver:
- ✅ `📧 Enviando email via SMTP para: ricardo@viafiltros.com.br`
- ✅ `✅ Email enviado com sucesso via SMTP`
- ✅ `Message ID: <xxx@mail.vivasuamissao.top>`

### 2. Verificar Email

O destinatário (`ricardo@viafiltros.com.br`) deve receber o email na caixa de entrada (ou verificar a pasta de spam).

## ❌ Se Der Erro

### Erro: "Invalid login" ou "Authentication failed"
- **Causa**: Senha incorreta ou usuário não existe
- **Solução**: Verifique se a senha no `.env` está correta

### Erro: "Connection timeout"
- **Causa**: Host SMTP não acessível
- **Solução**: Verifique se `mail.vivasuamissao.top` está acessível

### Erro: "SMTP_PASS não configurada"
- **Causa**: Senha não foi configurada no `.env`
- **Solução**: Edite o `.env` e coloque a senha real

## ✅ Próximos Passos

Depois que o teste funcionar:
1. ✅ O sistema está pronto para receber vendas da Kiwify
2. ✅ Cada venda vai criar um usuário automaticamente
3. ✅ Cada usuário vai receber email com credenciais
