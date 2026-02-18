# Backend - Manual Interativo

Backend simples e seguro para receber webhooks da Kiwify e enviar emails com credenciais.

## 🚀 Funcionalidades

- ✅ Recebe webhook da Kiwify quando há venda
- ✅ Cria usuário automaticamente
- ✅ Gera senha segura (12 caracteres)
- ✅ Envia email com credenciais (SMTP ou Resend)
- ✅ Armazena usuários em JSON (sem banco de dados)
- ✅ Autenticação com bcrypt

## 📦 Instalação

```bash
cd backend
npm install
```

## ⚙️ Configuração

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Configure as variáveis no `.env`:

### OPÇÃO 1: SMTP (Recomendado - Email da Hospedagem)

Use o email da sua própria hospedagem. Configure no `.env`:

```env
SMTP_HOST=mail.vivasuamissao.top
SMTP_PORT=465
SMTP_USER=suporte@vivasuamissao.top
SMTP_PASS=sua_senha_do_email
EMAIL_FROM=Manual <suporte@vivasuamissao.top>
FRONTEND_URL=https://protocolo.vivasuamissao.top
```

**Vantagens**: 
- ✅ Sem limites de envio (depende da hospedagem)
- ✅ Usa seu próprio domínio
- ✅ Sem custos adicionais

### OPÇÃO 2: Resend (Alternativa)

1. Acesse [https://resend.com](https://resend.com)
2. Crie uma conta gratuita
3. Vá em "API Keys" > "Create API Key"
4. Adicione seu domínio (ou use domínio de teste)
5. Configure no `.env`:
```env
RESEND_API_KEY=re_sua_chave_aqui
EMAIL_FROM=Manual <noreply@seudominio.com>
FRONTEND_URL=https://seudominio.com
```

**Plano Gratuito**: 3.000 emails/mês, 100 emails/dia

**Nota**: O sistema prioriza SMTP se ambos estiverem configurados.

## 🔧 Configuração do Webhook Kiwify

1. Acesse seu painel da Kiwify
2. Vá em "Configurações" > "Webhooks"
3. Adicione novo webhook:
   - **URL**: `https://protocolo.vivasuamissao.top/webhook/kiwify`
   - **Eventos**: Selecione "Pedido Pago" ou "Pedido Completo"
   - **Método**: POST

### 🔐 Token de Segurança (Opcional)

Se a Kiwify permitir configurar um token/assinatura no webhook:

1. Configure o token no arquivo `.env`:
   ```env
   KIWIFY_WEBHOOK_TOKEN=seu_token_secreto_aqui
   ```

2. O backend aceita o token em 3 formatos:
   - Header: `X-Kiwify-Token: seu_token`
   - Header: `Authorization: Bearer seu_token`
   - Query: `?token=seu_token`

**Nota**: Se `KIWIFY_WEBHOOK_TOKEN` não estiver configurado no `.env`, o webhook aceitará requisições sem validação de token (menos seguro, mas funcional).

## 🚀 Executar

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm start
```

### Docker
```bash
docker-compose up backend
```

## 📝 Estrutura

```
backend/
├── server.js          # Servidor principal
├── package.json       # Dependências
├── .env              # Variáveis de ambiente (não commitado)
├── .env.example      # Exemplo de configuração
├── data/             # Dados (users.json)
└── README.md         # Esta documentação
```

## 🔒 Segurança

- ✅ Senhas hasheadas com bcrypt (10 rounds)
- ✅ Validação de entrada
- ✅ CORS configurado
- ✅ Tratamento de erros
- ⚠️ Em produção, adicione rate limiting
- ⚠️ Em produção, valide assinatura do webhook

## 🧪 Testes

### Testar Health Check
```bash
curl http://localhost:3001/health
```

### Testar Login
```bash
curl -X POST http://localhost:3001/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"teste@email.com","password":"senha123"}'
```

### Testar Webhook (Simular Venda)
```bash
curl -X POST http://localhost:3001/webhook/kiwify \
  -H "Content-Type: application/json" \
  -d '{
    "event": "order.paid",
    "data": {
      "customer": {
        "email": "teste@email.com"
      },
      "order": {
        "id": "123"
      }
    }
  }'
```

## 📊 Fluxo Completo

1. Cliente compra na Kiwify
2. Kiwify envia webhook para `/webhook/kiwify`
3. Backend cria usuário com senha gerada
4. Backend envia email com credenciais (Resend)
5. Cliente recebe email
6. Cliente faz login no frontend
7. Cliente acessa manual interativo

## 🆘 Troubleshooting

### Email não está sendo enviado

**Se usando SMTP:**
1. Verifique se `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER` e `SMTP_PASS` estão corretos no `.env`
2. Verifique se a porta está correta (465 para SSL, 587 para TLS)
3. Verifique se a senha do email está correta
4. Veja os logs do servidor para erros de conexão
5. Teste a conexão SMTP manualmente

**Se usando Resend:**
1. Verifique se a API key está correta no `.env`
2. Verifique se o domínio está verificado no Resend
3. Veja os logs do servidor
4. Teste com endpoint de teste

### Webhook não está funcionando
1. Verifique a URL do webhook na Kiwify
2. Verifique os logs do servidor
3. Teste manualmente com curl (veja acima)

### Login não funciona
1. Verifique se o usuário foi criado (veja `data/users.json`)
2. Verifique se a senha está correta
3. Veja os logs do servidor

## 📧 Alternativas de Email

Se Resend não funcionar, veja `ALTERNATIVAS_EMAIL.md` na raiz do projeto.
