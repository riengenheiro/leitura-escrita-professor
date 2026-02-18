# 🎯 Instruções Finais - Site Planejamento BNCC

## ✅ Site Criado com Sucesso!

O site **Planejamento Anual BNCC** foi criado e está pronto para uso. A landing page foi desenvolvida seguindo as melhores práticas de conversão.

## 📍 Localização

```
/var/www/projetos/sites/planejamento-bncc/
```

## 🌐 Acesso

O site está configurado para responder em:
- **Domínio**: planejamento.doutoraescola.com.br
- **Porta**: 8082 (via nginx-multisite)

## 🎨 Espaços para Personalização

### 1. Fotos e Imagens

Há **2 áreas principais** onde você precisa adicionar fotos reais:

#### Hero Section (Topo da página)
Arquivo: `src/components/Hero.tsx`
- Espaço para foto do produto/material do curso
- Localizado na coluna direita do hero
- Dimensões sugeridas: 3:4 (vertical)

#### Seção Autora (Quem Sou Eu)
Arquivo: `src/components/Author.tsx`
- Espaço para foto da Dra. Guaciara Fornaciari
- Formato quadrado (1:1)
- Foto profissional recomendada

### Como Adicionar as Fotos:

1. **Coloque as imagens na pasta public:**
   ```bash
   /var/www/projetos/sites/planejamento-bncc/public/
   ```

2. **Nomeie as imagens de forma clara:**
   - `guaciara.jpg` ou `guaciara.png` - Foto da autora
   - `hero-produto.jpg` ou `hero-material.png` - Imagem do hero

3. **Edite os componentes para usar as imagens:**

   Em `src/components/Hero.tsx`, substitua:
   ```tsx
   <div className="aspect-[3/4] bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center border-4 border-dashed border-primary-300">
     {/* ... código do placeholder ... */}
   </div>
   ```
   
   Por:
   ```tsx
   <img 
     src="/hero-produto.jpg" 
     alt="Planejamento Anual BNCC"
     className="aspect-[3/4] rounded-2xl shadow-2xl object-cover"
   />
   ```

   Em `src/components/Author.tsx`, substitua:
   ```tsx
   <div className="aspect-square bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl shadow-2xl flex items-center justify-center border-4 border-white">
     {/* ... código do placeholder ... */}
   </div>
   ```
   
   Por:
   ```tsx
   <img 
     src="/guaciara.jpg" 
     alt="Dra. Guaciara Fornaciari"
     className="aspect-square rounded-3xl shadow-2xl object-cover border-4 border-white"
   />
   ```

4. **Faça rebuild após adicionar as fotos:**
   ```bash
   cd /var/www/projetos/sites/planejamento-bncc
   docker run --rm -v /var/www/projetos/sites/planejamento-bncc:/app -w /app node:20-alpine npm run build
   cd /var/www/projetos/nginx-multisite
   docker compose restart nginx-multisite
   ```

## 🔗 Links de Checkout

Atualmente os botões de compra apontam para `#` (placeholder). Configure os links reais:

### Arquivo: `src/components/Pricing.tsx`

Procure por:
```tsx
link: '#',
```

Substitua por sua URL de checkout (exemplo):
```tsx
link: 'https://pay.hotmart.com/SEU_CODIGO_AQUI?off=PROFISSIONAL',
```

### Arquivo: `src/components/Hero.tsx` e `src/components/FinalCTA.tsx`

Os CTAs chamam a função `scrollToPricing()` que rola até a seção de preços.
Se preferir link direto para checkout, substitua:
```tsx
onClick={scrollToPricing}
```

Por:
```tsx
onClick={() => window.location.href = 'SUA_URL_CHECKOUT'}
```

## 🎯 Principais Recursos da Página

### ✅ Otimizações de Conversão Implementadas:

1. **Countdown Timer** (24h) - Cria urgência
2. **Sticky Header** - Timer sempre visível
3. **5+ CTAs** - Múltiplos pontos de conversão
4. **Prova Social** - 2.000+ professores, 4.9/5 ★
5. **Garantia 7 dias** - Reduz risco percebido
6. **FAQ** - Elimina objeções
7. **Desconto 90%** - Destaque visual forte
8. **Design Moderno** - Gradientes, sombras, animações
9. **Responsivo** - Perfeito em mobile
10. **Performance** - Carregamento otimizado

### 🎨 Paleta de Cores:

- **Verde (Primary)**: Confiança, crescimento, sucesso
- **Vermelho**: Urgência, escassez
- **Amarelo (Accent)**: Destaque, atenção
- **Cinza**: Textos e backgrounds neutros

## 📊 Estrutura da Página

1. **Countdown Timer** - Urgência no topo
2. **Hero** - Promessa principal + CTA
3. **Problemas** - Dores dos professores
4. **Soluções** - Como o produto resolve
5. **Módulos** - O que está incluído
6. **Depoimentos** - Prova social
7. **Preços** - 2 planos com CTA
8. **Autora** - Credibilidade
9. **FAQ** - Elimina dúvidas
10. **CTA Final** - Última chance
11. **Footer** - Links legais

## 🔄 Fluxo de Atualização

Sempre que fizer mudanças:

```bash
# 1. Edite os arquivos em src/

# 2. Rebuild
cd /var/www/projetos/sites/planejamento-bncc
docker run --rm -v $(pwd):/app -w /app node:20-alpine npm run build

# 3. Restart Nginx
cd /var/www/projetos/nginx-multisite
docker compose restart nginx-multisite
```

## 📱 Teste Mobile

**IMPORTANTE**: Teste em dispositivos móveis antes do lançamento!

Use ferramentas:
- Chrome DevTools (F12 > Toggle Device Toolbar)
- Navegador real no celular
- BrowserStack ou similar

## 🚀 Checklist de Lançamento

**Antes de publicar:**

- [ ] Adicionar foto da Dra. Guaciara
- [ ] Adicionar foto do produto/material
- [ ] Configurar links de checkout reais
- [ ] Testar todos os CTAs
- [ ] Verificar countdown timer
- [ ] Testar FAQ (acordeão)
- [ ] Testar em mobile
- [ ] Configurar DNS para o domínio
- [ ] Configurar SSL no Proxy Manager
- [ ] Adicionar Pixel do Facebook (se necessário)
- [ ] Testar formulário de pagamento
- [ ] Revisar textos e preços
- [ ] Verificar velocidade de carregamento

## 💡 Dicas para Aumentar Conversão

1. **Use fotos reais** - Não use stock photos
2. **Teste o countdown** - Verifique se está funcionando
3. **Adicione mais depoimentos** - Quanto mais prova social, melhor
4. **Teste diferentes preços** - A/B testing
5. **Monitore com Analytics** - Google Analytics, Hotjar
6. **Adicione chat** - WhatsApp, Tidio, etc.
7. **Página de obrigado** - Após a compra
8. **Pixels de retargeting** - Facebook, Google

## 📞 Suporte

Para dúvidas técnicas:
- Veja `README.md` para documentação completa
- Veja `BUILD.md` para instruções de build
- Veja `INSTALACAO_COMPLETA.md` para detalhes técnicos

## 🎉 Pronto!

O site está **100% funcional** e pronto para receber as personalizações finais (fotos e links).

Após adicionar as imagens e configurar os links de checkout, faça o rebuild e lance a página!

**Boa sorte com as vendas! 🚀💰**

---

**Criado em**: 30 de Janeiro de 2026
**Desenvolvido para**: Doutora Escola
**Produto**: Planejamento Anual BNCC
