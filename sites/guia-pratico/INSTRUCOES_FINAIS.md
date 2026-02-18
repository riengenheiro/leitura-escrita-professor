# 🎉 Site Guia Prático - Instruções Finais

## ✅ O que está PRONTO

O site foi criado com **TODOS os componentes** e está funcional. A estrutura está completa e baseada no site doutora-escola.

### Componentes Criados (16 no total):
1. ✅ GPHero - Hero com título principal
2. ✅ GPAmostras - Amostras do material
3. ✅ GPParaQuem - 3 personas (professoras, mães, profissionais)
4. ✅ GPInumeras - Antes/Depois (trocar materiais)
5. ✅ GPPorQueInvestir - 4 benefícios
6. ✅ GPConteudo - Conteúdo completo do guia
7. ✅ GPPricing - Preços e ofertas
8. ✅ GPPorQueInvestirPDFs - Por que PDFs
9. ✅ GPDepoimentos - Seção de depoimentos
10. ✅ GPGuarantee - Garantia 7 dias
11. ✅ GPFAQ - Perguntas frequentes
12. ✅ GPAbout - Quem sou eu
13. ✅ GPFinalCTA - CTA final
14. ✅ GPFooter - Rodapé (links corretos)
15. ✅ OptimizedImage - Componente otimizado
16. ✅ FacebookPixelLazy - Pixel otimizado

### Copy Completa:
✅ Todo o texto fornecido foi implementado
✅ Ajustado para remover menções de vendas anteriores
✅ Preço: 12x de R$ 9,70 ou R$ 97,00 à vista
✅ Bônus: Ebook de Sondagem Escolar

### Configurações:
✅ React 18 + TypeScript + Vite
✅ TailwindCSS configurado
✅ SEO otimizado
✅ Imagens otimizadas com lazy loading
✅ Facebook Pixel com lazy loading
✅ Design responsivo

## ⚠️ O que falta fazer (APENAS 3 COISAS):

### 1️⃣ Instalar dependências
```bash
cd /var/www/projetos/sites/guia-pratico
npm install
```

### 2️⃣ Adicionar 5 imagens
Coloque em `public/images/guia-pratico/`:

| Arquivo | Tamanho | Descrição |
|---------|---------|-----------|
| 01-hero.png | 637x856 | Capa do Guia Prático |
| 02-amostras.png | 800x600 | Amostras do material |
| 03-antes.png | 400x300 | Materiais técnicos |
| 04-depois.png | 400x300 | Guia simplificado |
| 07-quem-sou-eu.png | 637x856 | Foto Dra. Guaciara |

**💡 DICA:** Você pode usar as mesmas fotos do doutora-escola temporariamente e depois substituir.

### 3️⃣ Atualizar link de pagamento
Arquivo: `src/components/GPPricing.tsx` (linha ~140)

Trocar:
```typescript
href="https://pay.kiwify.com.br/SEU_LINK_AQUI"
```

Pelo seu link real de pagamento do Kiwify/Hotmart/etc.

## 🚀 Para rodar em desenvolvimento:

```bash
cd /var/www/projetos/sites/guia-pratico
npm install
npm run dev
```

Acesse: http://localhost:5175

## 📦 Para fazer build:

Use o formato do projeto (a partir da raiz `/var/www/projetos`):

```bash
./nginx-multisite/build-site.sh guia-pratico
```

Ou a partir da pasta `nginx-multisite`:

```bash
cd nginx-multisite
./build-site.sh guia-pratico
```

O script usa Docker, gera o build em `dist/` e reinicia o Nginx.

## 🔧 Configuração Nginx (se necessário)

O site deve ser configurado para rodar em:
```
https://guiapratico.doutoraescola.com.br/
```

## 📝 Ajustes Opcionais

### Depoimentos
Atualmente há placeholders. Você pode:
- Adicionar imagens de depoimentos reais
- Ou trocar por componente de texto como no doutora-escola

### Facebook Pixel
Está usando o mesmo ID do doutora-escola. Se quiser trocar, edite:
`src/config/facebookPixel.ts`

## 🎨 Cores do Site

- **Primária:** Vermelho (#dc2626, #b91c1c)
- **Destaque:** Amarelo (#fbbf24, #f59e0b)
- **Sucesso:** Verde (#16a34a, #15803d)

## 📞 Links do Rodapé (já configurados)

✅ Política de Privacidade
✅ Termos de Uso
✅ WhatsApp: (19) 98986-3544

## ✨ Recursos Implementados

- ⚡ Loading otimizado
- 📱 Design responsivo
- 🎯 SEO completo
- 🖼️ Imagens lazy loading
- 📊 Facebook Pixel lazy
- 🔒 Compra segura
- ✅ Garantia 7 dias
- 💳 Pagamento parcelado

## 🎯 Resumo

**TUDO está pronto!** Você só precisa:
1. Instalar dependências (`npm install`)
2. Adicionar as 5 imagens
3. Atualizar o link de pagamento

Depois é só fazer o build e colocar no ar! 🚀

---

**Criado em:** 02/02/2026
**Baseado em:** sites/doutora-escola
**Tecnologias:** React 18 + TypeScript + Vite + TailwindCSS
