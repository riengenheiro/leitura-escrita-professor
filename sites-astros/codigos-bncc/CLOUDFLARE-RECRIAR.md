# Recriar projeto codigos-bncc no Cloudflare (do zero)

## Parte 1: Excluir o projeto atual

1. Acesse **https://dash.cloudflare.com**
2. Menu esquerda → **Workers & Pages**
3. Clique no projeto **codigos-bncc**
4. Vá em **Settings** (Configurações)
5. Role até o final → **Delete project** / **Excluir projeto**
6. Confirme a exclusão

---

## Parte 2: Criar o projeto de novo

1. Em **Workers & Pages**, clique em **Create** / **Create application**
2. Escolha **Connect to Git** (conectar repositório Git)
3. Conecte o **GitHub** (se ainda não estiver) e selecione o repositório **riengenheiro/projetos**
4. Clique em **Begin setup** / **Iniciar configuração**

### Preencha assim:

| Campo | Valor |
|-------|--------|
| **Project name** | `codigos-bncc` |
| **Production branch** | `main` |
| **Root directory** / **Diretório raiz** | `sites-astros/codigos-bncc` |
| **Build command** | `npm run build` |
| **Deploy command** / **Comando de implantação** | `npx wrangler pages deploy dist --project-name=codigos-bncc` |

### Token de API (importante)

- Se aparecer **"Create new token"** ou **"Um novo token será criado"**: use essa opção — o Cloudflare cria um token **da conta** novo.
- Se aparecer opção para **escolher um token existente**: escolha um token que tenha **Cloudflare Pages → Edit** (e que seja da sua conta/usuário atual, não de quem saiu da organização).
- **Não** vincule um token de usuário que saiu da organização.

### Variáveis (opcional, só se o deploy falhar de novo)

Em **Variables and secrets** / **Variáveis e segredos**:

- **Nome:** `CLOUDFLARE_API_TOKEN`
- **Valor:** um token que **você** criou em https://dash.cloudflare.com/profile/api-tokens com permissão **Account → Cloudflare Pages → Edit**
- Marque como **Secret**

5. Clique em **Save and Deploy** / **Salvar e implantar**

---

## Parte 3: Depois do primeiro deploy

- Aguarde 1–3 minutos.
- Em **Deployments** veja se o status ficou **Success**.
- O site deve ficar em: **https://codigos-bncc.pages.dev**

---

## Se ainda der erro de token

1. Crie um token novo em: https://dash.cloudflare.com/profile/api-tokens  
   - **Create Token** → **Create Custom Token**
   - Permissão: **Account** → **Cloudflare Pages** → **Edit**
   - Crie e copie o valor

2. No projeto **codigos-bncc** → **Settings** → **Builds** → **API token**: troque para **usar esse token** (ou adicione em Variáveis como `CLOUDFLARE_API_TOKEN`).

3. **Retry deployment** ou faça um novo push no Git.
