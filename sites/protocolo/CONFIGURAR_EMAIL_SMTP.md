# 📧 Configuração de Email SMTP

## ✅ O que foi feito

O backend foi atualizado para suportar **SMTP da hospedagem** ao invés de depender apenas do Resend.

Agora você pode usar o email da sua própria hospedagem (`suporte@vivasuamissao.top`) para enviar os emails de credenciais.

## 🔧 O que você precisa fazer

### 1. Atualizar o arquivo `.env`

Edite o arquivo `/var/www/sales_page/backend/.env` e substitua `SUA_SENHA_AQUI` pela senha real do email:

```env
SMTP_HOST=mail.vivasuamissao.top
SMTP_PORT=465
SMTP_USER=suporte@vivasuamissao.top
SMTP_PASS=COLOQUE_A_SENHA_REAL_AQUI
EMAIL_FROM=Manual <suporte@vivasuamissao.top>
```

### 2. Reconstruir o container do backend

Depois de atualizar o `.env`, reconstrua o container para instalar o `nodemailer`:

```bash
cd /var/www/sales_page
docker compose build backend
docker compose up -d backend
```

### 3. Verificar se está funcionando

Verifique os logs do backend:

```bash
docker compose logs -f backend
```

Você deve ver:
- ✅ `SMTP configurado: ✅ Sim`
- ✅ `Usando SMTP para envio de emails`
- ✅ `SMTP configurado e conectado com sucesso`

## 🧪 Testar o envio de email

Você pode testar criando um usuário de teste (se o endpoint de teste estiver habilitado):

```bash
curl -X POST http://localhost:3001/api/test/create-user \
  -H "Content-Type: application/json" \
  -d '{"email":"seu-email@teste.com"}'
```

Ou aguardar uma venda real na Kiwify para testar automaticamente.

## 📋 Informações de Configuração

**Servidor SMTP:**
- Host: `mail.vivasuamissao.top`
- Porta: `465` (SSL)
- Usuário: `suporte@vivasuamissao.top`
- Senha: (a senha da conta de email)

**Alternativa (POP3/IMAP):**
- IMAP Port: 993
- POP3 Port: 995
- SMTP Port: 465

## ⚠️ Importante

1. **Segurança**: Nunca compartilhe o arquivo `.env` ou faça commit dele no Git
2. **Senha**: Use a senha da conta de email `suporte@vivasuamissao.top`
3. **Prioridade**: Se SMTP e Resend estiverem configurados, o sistema usa SMTP primeiro

## 🔄 Voltar para Resend (se necessário)

Se quiser voltar a usar Resend, comente as linhas SMTP e descomente o Resend no `.env`:

```env
# SMTP_HOST=mail.vivasuamissao.top
# SMTP_PORT=465
# SMTP_USER=suporte@vivasuamissao.top
# SMTP_PASS=...
# EMAIL_FROM=Manual <suporte@vivasuamissao.top>

RESEND_API_KEY=re_sua_chave_aqui
EMAIL_FROM=Manual <noreply@seudominio.com>
```

Depois reconstrua o container.
