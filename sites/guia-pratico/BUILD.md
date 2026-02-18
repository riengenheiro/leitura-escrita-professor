# Build do Guia Prático

## Build (formato do projeto)

Use o script centralizado a partir da raiz do repositório:

```bash
./nginx-multisite/build-site.sh guia-pratico
```

Ou, a partir da pasta `nginx-multisite`:

```bash
cd nginx-multisite
./build-site.sh guia-pratico
```

O script usa Docker (node:20-alpine), instala dependências, faz o build e reinicia o Nginx.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse: http://localhost:5175

## Build manual (sem script)

```bash
npm install
npm run build
```

O build será gerado na pasta `dist/`.

## Imagens Necessárias

Adicione as seguintes imagens em `public/images/guia-pratico/`:

1. **01-hero.png** (637x856) - Capa do Guia Prático
2. **02-amostras.png** (800x600) - Amostras dos materiais
3. **03-antes.png** (400x300) - Materiais técnicos complicados
4. **04-depois.png** (400x300) - Guia Prático simplificado  
5. **07-quem-sou-eu.png** (637x856) - Foto da Dra. Guaciara

## Link de Pagamento

Atualizar em `src/components/GPPricing.tsx` o link:
```
https://pay.kiwify.com.br/SEU_LINK_AQUI
```

## Deploy

O site será servido pelo nginx em: `https://guiapratico.doutoraescola.com.br/`
