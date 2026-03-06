# Cloudflare Pages – Primeira vez, passo a passo

É a primeira vez que você usa o Cloudflare para publicar um site. Este guia explica o que está acontecendo e o que fazer em cada etapa.

---

## O que o Cloudflare vai fazer

1. **Conecta no seu GitHub** e baixa o código do repositório.
2. **Roda o build** do projeto (como se fosse `npm run build` no seu PC).
3. **Publica** a pasta `dist` na internet (seu site fica no ar).

Tudo isso acontece nos servidores do Cloudflare. Você só configura uma vez; depois, cada **push** no Git pode disparar um novo deploy automático.

---

## Passo 1: Onde você está no painel

- Abra: **https://dash.cloudflare.com**
- No menu da esquerda: **Workers & Pages**
- Você deve ver o projeto **codigos-bncc** (se já criou). Clique nele.

Se ainda não criou o projeto, antes você precisa:
- Clicar em **Create** / **Create application**
- Escolher **Connect to Git** (conectar repositório)
- Conectar o GitHub e escolher o repositório **projetos**
- Preencher os campos como no Passo 2.

---

## Passo 2: O que colocar em cada campo (resumo)

Quando o Cloudflare pedir a configuração do projeto, use:

| O que o Cloudflare pergunta | O que colocar |
|-----------------------------|----------------|
| **Nome do projeto** | `codigos-bncc` |
| **Caminho / Root directory** | `sites-astros/codigos-bncc` |
| **Comando da build** | `npm run build` |
| **Comando de implantação** | `npx wrangler pages deploy dist --project-name=codigos-bncc` |
| **Token de API** | Deixar criar automaticamente |

O **Caminho** diz onde está o site dentro do repositório (a pasta do Astro).  
O **Comando da build** gera a pasta `dist`.  
O **Comando de implantação** envia essa pasta `dist` para o Cloudflare Pages.

---

## Passo 3: Depois de clicar em “Implementar” / “Deploy”

- **Não some tudo na hora.** O Cloudflare precisa de 1–3 minutos para:
  - Baixar o código
  - Instalar dependências (`npm install`)
  - Rodar o build (`npm run build`)
  - Fazer o deploy

Onde ver isso:

1. Dentro do projeto **codigos-bncc**, procure por:
   - **Deployments** ou
   - **Builds** ou
   - **Histórico de deploys**
2. Deve aparecer uma **linha** com um deploy (sucesso ou falha).
3. **Clique nessa linha** para abrir os **logs** (o texto que mostra o que rodou).

Se aparecer **“Success”** / **“Deployed”**, o site já está no ar.  
Se aparecer **“Failed”**, abra os logs e veja a última mensagem de erro (vermelha).

---

## Passo 4: Onde ver o site no ar

Quando o deploy der certo:

- A URL costuma ser: **https://codigos-bncc.pages.dev**
- No painel, essa URL também aparece na página do projeto (às vezes em “View deployment” ou no topo).

Se não aparecer nenhum deploy na lista, pode ser que:
- O botão só salvou a configuração e o primeiro deploy precisa ser disparado por um **push** no Git, ou
- Há um passo de “autorizar” o repositório que ainda não foi feito.

---

## Resumo rápido

1. **Workers & Pages** → projeto **codigos-bncc**.
2. Abrir **Deployments** / **Builds** e clicar no deploy mais recente para ver os **logs**.
3. Esperar 1–3 minutos no primeiro deploy.
4. Site no ar em **https://codigos-bncc.pages.dev** (ou a URL que o painel mostrar).

Se quiser, na próxima mensagem você pode dizer:  
- se vê a lista de Deployments e se aparece algum deploy (Success ou Failed),  
e aí te ajudo a interpretar o que está acontecendo.
