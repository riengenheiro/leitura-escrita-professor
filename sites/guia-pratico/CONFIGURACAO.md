# Configuração do Site Guia Prático

## ✅ O que foi criado

1. **Estrutura completa do projeto React + TypeScript + Vite**
   - Configurações: package.json, tsconfig, vite.config, tailwind, etc.
   - Componentes adaptados com a copy fornecida
   - Estrutura baseada no site doutora-escola

2. **Componentes criados:**
   - GPHero - Hero principal com título e CTA
   - GPAmostras - Amostras do material
   - GPParaQuem - Para quem é o material (professoras, mães, profissionais)
   - GPInumeras - Antes e depois (trocar materiais técnicos pelo guia)
   - GPPorQueInvestir - 4 benefícios principais
   - GPConteudo - Conteúdo completo do guia
   - GPPricing - Preços e ofertas
   - GPPorQueInvestirPDFs - Por que PDFs + atendimento exclusivo
   - GPDepoimentos - Depoimentos (placeholders)
   - GPGuarantee - Garantia de 7 dias
   - GPFAQ - Perguntas frequentes
   - GPAbout - Quem é a Dra. Guaciara
   - GPFinalCTA - CTA final
   - GPFooter - Rodapé (links iguais ao doutora-escola)

3. **Funcionalidades:**
   - Facebook Pixel com lazy loading
   - Imagens otimizadas com lazy loading
   - Design responsivo
   - SEO otimizado

## ⚠️ O que precisa ser feito

### 1. Instalar Dependências

```bash
cd /var/www/projetos/sites/guia-pratico
npm install
```

### 2. Adicionar Imagens

Coloque as imagens em `public/images/guia-pratico/`:

- **01-hero.png** - Capa do guia (637x856 px)
- **02-amostras.png** - Amostras do material (800x600 px)
- **03-antes.png** - Materiais técnicos (400x300 px)
- **04-depois.png** - Guia simplificado (400x300 px)
- **07-quem-sou-eu.png** - Foto da Dra. Guaciara (637x856 px)

### 3. Atualizar Link de Pagamento

Edite `src/components/GPPricing.tsx` linha 140:

```typescript
href="https://pay.kiwify.com.br/SEU_LINK_AQUI"
```

Substitua por seu link real de pagamento.

### 4. Adicionar Depoimentos Reais

Edite `src/components/GPDepoimentos.tsx` e adicione imagens de depoimentos reais ou substitua pelo componente de texto.

### 5. Build

```bash
npm run build
```

O build será gerado em `dist/`.

## 🎨 Cores do Site

- Primária: Vermelho (#dc2626, #b91c1c)
- Secundária: Amarelo (#fbbf24, #f59e0b)
- Sucesso: Verde (#16a34a, #15803d)
- Neutros: Cinza e branco

## 📝 Copy Ajustada

✅ Removido menções de vendas anteriores como "mais de 4.000 pessoas"
✅ Mantido o foco na proposta de valor
✅ Preço: 12x de R$ 9,70 ou R$ 97,00 à vista
✅ Bônus: Ebook de Sondagem Escolar

## 🔗 Links do Rodapé

Os links estão mantidos iguais ao site doutora-escola:
- Política de Privacidade: https://doutoraescola.com.br/privacidade/privacidade.html
- Termos de Uso: https://doutoraescola.com.br/privacidade/termo.html
- WhatsApp: https://api.whatsapp.com/send?phone=5519989863544

## 🚀 Deploy

O site está configurado para rodar na porta 5175 em desenvolvimento.

Para produção, será servido em: https://guiapratico.doutoraescola.com.br/
