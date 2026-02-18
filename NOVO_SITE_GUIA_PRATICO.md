# Novo Site: Guia Prático Para Identificar Dificuldades Escolares

## 📍 Localização

```
/var/www/projetos/sites/guia-pratico/
```

## ✅ Status

Site criado com estrutura completa. Necessário:
1. Instalar dependências (npm install)
2. Adicionar imagens
3. Atualizar link de pagamento
4. Fazer build

## 📋 Estrutura Criada

```
guia-pratico/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── guia-pratico/
│           └── README.md (instruções sobre imagens)
├── src/
│   ├── components/
│   │   ├── GPHero.tsx
│   │   ├── GPAmostras.tsx
│   │   ├── GPParaQuem.tsx
│   │   ├── GPInumeras.tsx
│   │   ├── GPPorQueInvestir.tsx
│   │   ├── GPConteudo.tsx
│   │   ├── GPPricing.tsx
│   │   ├── GPPorQueInvestirPDFs.tsx
│   │   ├── GPDepoimentos.tsx
│   │   ├── GPGuarantee.tsx
│   │   ├── GPFAQ.tsx
│   │   ├── GPAbout.tsx
│   │   ├── GPFinalCTA.tsx
│   │   ├── GPFooter.tsx
│   │   ├── OptimizedImage.tsx
│   │   └── FacebookPixelLazy.tsx
│   ├── config/
│   │   └── facebookPixel.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── README.md
├── BUILD.md
└── CONFIGURACAO.md
```

## 🎯 Copy Implementada

✅ Título: "Guia Prático Para Identificar Dificuldades Escolares!"
✅ Subtítulo: "Chega de se sentir impotente diante das dificuldades de aprendizagem!"
✅ Seções completas:
   - Por dentro do guia prático
   - Para quem é este material
   - Inúmeras pessoas já facilitaram
   - Por que investir no guia prático
   - Conteúdo completo (Linguagem, Saúde, Transtornos)
   - Preços (12x R$ 9,70 ou R$ 97,00)
   - Por que investir em PDFs
   - Depoimentos
   - Garantia de 7 dias
   - FAQ completo
   - Quem sou eu
   - CTA final

## 💰 Preços

- **12x de R$ 9,70** (com juros no cartão)
- **R$ 97,00 à vista**
- **Bônus:** Ebook de Sondagem Escolar

## 🔗 Links

- **Rodapé:** Mesmos links do doutora-escola (política, termos, WhatsApp)
- **Pagamento:** Precisa atualizar em GPPricing.tsx

## 📸 Imagens Necessárias

1. 01-hero.png (637x856) - Capa do guia
2. 02-amostras.png (800x600) - Amostras
3. 03-antes.png (400x300) - Antes
4. 04-depois.png (400x300) - Depois
5. 07-quem-sou-eu.png (637x856) - Dra. Guaciara

## 🚀 Próximos Passos

1. **Instalar dependências:**
   ```bash
   cd /var/www/projetos/sites/guia-pratico
   npm install
   ```

2. **Adicionar imagens** em `public/images/guia-pratico/`

3. **Atualizar link de pagamento** em `src/components/GPPricing.tsx`

4. **Build:**
   ```bash
   npm run build
   ```

5. **Configurar nginx** para servir o site em https://guiapratico.doutoraescola.com.br/

## 📝 Notas

- Copy ajustada para remover menções de vendas anteriores
- Mantido texto "mais de 4.000 pessoas" apenas na seção de depoimentos como referência geral aos materiais da Doutora Escola
- Links do rodapé mantidos iguais ao doutora-escola conforme solicitado
- Design baseado no doutora-escola com cores adaptadas (vermelho como primária)
- Facebook Pixel configurado (mesmo ID do doutora-escola)

## 📚 Documentação

Veja arquivos detalhados:
- `BUILD.md` - Instruções de build
- `CONFIGURACAO.md` - Configuração completa
- `README.md` - Visão geral do projeto
