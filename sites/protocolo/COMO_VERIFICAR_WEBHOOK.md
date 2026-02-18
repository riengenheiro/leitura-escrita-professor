# 🔍 Como Verificar se o Webhook Funcionou

## 📊 3 Formas de Verificar

### 1️⃣ **Ver Logs em Tempo Real** (Mais Rápido)

```bash
# Ver logs do backend em tempo real
docker compose logs -f backend
```

**O que procurar:**
- ✅ `📥 Webhook recebido da Kiwify:` - Webhook chegou
- ✅ `✅ Usuário criado: email@exemplo.com` - Usuário foi criado
- ✅ `✅ Email enviado com sucesso para: email@exemplo.com` - Email foi enviado
- ❌ `⚠️ Token de webhook inválido` - Token errado
- ❌ `❌ Erro ao processar webhook:` - Algum erro ocorreu

**Exemplo de log de sucesso:**
```
📥 Webhook recebido da Kiwify: {
  "event": "order.paid",
  "data": { ... }
}
✅ Usuário criado: cliente@email.com
✅ Email enviado com sucesso para: cliente@email.com
```

---

### 2️⃣ **Verificar Arquivo de Usuários** (Confirmar Criação)

```bash
# Ver se o usuário foi criado
cat backend/data/users.json
```

**O que procurar:**
- Arquivo deve existir
- Deve conter o email do cliente
- Deve ter `createdAt` com data/hora recente

**Exemplo:**
```json
{
  "cliente@email.com": {
    "email": "cliente@email.com",
    "passwordHash": "$2b$10$...",
    "createdAt": "2026-01-23T10:30:00.000Z",
    "orderId": "123",
    "event": "order.paid"
  }
}
```

---

### 3️⃣ **Testar Manualmente** (Antes de Enviar da Kiwify)

```bash
# Testar webhook manualmente
curl -X POST https://protocolo.vivasuamissao.top/webhook/kiwify \
  -H "Content-Type: application/json" \
  -H "X-Kiwify-Token: npjyiwbk74h" \
  -d '{
    "event": "order.paid",
    "data": {
      "customer": {
        "email": "teste@exemplo.com"
      },
      "order": {
        "id": "test-123"
      }
    }
  }'
```

**Resposta de sucesso:**
```json
{
  "success": true,
  "message": "Usuário criado com sucesso",
  "email": "teste@exemplo.com",
  "emailSent": true
}
```

---

## 🎯 Checklist Rápido

Após enviar o teste da Kiwify, verifique:

- [ ] **Logs mostram webhook recebido** → `docker compose logs -f backend`
- [ ] **Usuário foi criado** → `cat backend/data/users.json`
- [ ] **Email foi enviado** → Ver logs ou caixa de entrada do cliente
- [ ] **Resposta HTTP 200** → Kiwify deve mostrar sucesso no painel

---

## 🐛 Problemas Comuns

### ❌ "Token inválido"
**Solução:** Verifique se o token no `.env` está igual ao configurado na Kiwify

### ❌ "Email não encontrado no webhook"
**Solução:** Verifique se a Kiwify está enviando `data.customer.email` ou `data.email`

### ❌ "Email não foi enviado"
**Solução:** 
1. Verifique `RESEND_API_KEY` no `.env`
2. Verifique se o domínio está verificado no Resend
3. Veja logs para erro específico

### ❌ "Usuário já existe"
**Solução:** Normal! Significa que o webhook já foi processado antes. Para testar novamente, delete o usuário:
```bash
# CUIDADO: Isso apaga todos os usuários!
rm backend/data/users.json
```

---

## 📧 Verificar Email Enviado

1. **Caixa de entrada do cliente** (email usado no teste)
2. **Logs do Resend** (se tiver conta): https://resend.com/emails
3. **Logs do backend** mostram: `✅ Email enviado com sucesso`

---

## 🚀 Comandos Úteis

```bash
# Ver últimos 50 logs
docker compose logs --tail=50 backend

# Ver logs em tempo real (seguir)
docker compose logs -f backend

# Verificar se backend está rodando
docker compose ps backend

# Reiniciar backend (se necessário)
docker compose restart backend

# Ver arquivo de usuários
cat backend/data/users.json

# Ver arquivo formatado (se tiver jq)
cat backend/data/users.json | jq .
```

---

## ✅ Teste Completo Passo a Passo

1. **Abra o terminal e monitore logs:**
   ```bash
   docker compose logs -f backend
   ```

2. **Envie o teste da Kiwify**

3. **Observe os logs:**
   - Deve aparecer `📥 Webhook recebido`
   - Deve aparecer `✅ Usuário criado`
   - Deve aparecer `✅ Email enviado`

4. **Verifique o arquivo:**
   ```bash
   cat backend/data/users.json
   ```

5. **Verifique o email:**
   - Cliente deve receber email com credenciais

**Se tudo aparecer ✅, está funcionando perfeitamente!** 🎉
