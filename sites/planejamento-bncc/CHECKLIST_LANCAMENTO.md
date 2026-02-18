# ✅ Checklist de Lançamento - Site Planejamento BNCC

Use este checklist para garantir que tudo está pronto antes de lançar o site.

## 📋 Fase 1: Desenvolvimento (Concluída ✅)

- [x] Criar estrutura do projeto
- [x] Configurar React + TypeScript + Vite
- [x] Configurar TailwindCSS
- [x] Criar todos os componentes
- [x] Implementar countdown timer
- [x] Implementar FAQ interativo
- [x] Otimizar performance
- [x] Fazer build de produção
- [x] Configurar Nginx
- [x] Configurar Docker
- [x] Criar documentação

## 📸 Fase 2: Conteúdo Visual (Pendente ⏳)

### Imagens Necessárias

- [ ] **Foto da Dra. Guaciara Fornaciari**
  - Formato: JPG ou PNG
  - Tamanho: Quadrado (ex: 800x800px)
  - Qualidade: Profissional, fundo neutro
  - Localização: `public/guaciara.jpg`
  - Componente: `src/components/Author.tsx`

- [ ] **Foto do Produto/Material**
  - Formato: JPG ou PNG
  - Tamanho: Vertical 3:4 (ex: 600x800px)
  - Qualidade: Alta resolução
  - Localização: `public/hero-produto.jpg`
  - Componente: `src/components/Hero.tsx`

- [ ] **OG Image (Redes Sociais)**
  - Formato: PNG ou JPG
  - Tamanho: 1200x630px
  - Conteúdo: Título + foto + preço
  - Localização: `public/og-image.png`
  - Arquivo: `index.html` (meta tags)

- [ ] **Favicon**
  - Já criado ✅
  - Pode personalizar se desejar
  - Localização: `public/favicon.svg`

### Como Adicionar Imagens

```bash
# 1. Copie as imagens para a pasta public
cp sua-foto.jpg /var/www/projetos/sites/planejamento-bncc/public/

# 2. Edite os componentes (veja INSTRUCOES_FINAIS.md)

# 3. Faça rebuild
cd /var/www/projetos/sites/planejamento-bncc
docker run --rm -v $(pwd):/app -w /app node:20-alpine npm run build

# 4. Restart nginx
cd /var/www/projetos/nginx-multisite
docker compose restart nginx-multisite
```

## 🔗 Fase 3: Links e Integrações (Pendente ⏳)

### Links de Checkout

- [ ] **Plano Profissional (R$ 37)**
  - Criar produto na plataforma (Hotmart/Eduzz/etc)
  - Copiar link de checkout
  - Adicionar em `src/components/Pricing.tsx`
  - Testar link

- [ ] **Plano Avançado (R$ 57)**
  - Criar produto na plataforma
  - Copiar link de checkout
  - Adicionar em `src/components/Pricing.tsx`
  - Testar link

- [ ] **CTA Principal (Hero)**
  - Decidir: scroll para preços OU link direto
  - Se link direto, editar `src/components/Hero.tsx`

- [ ] **CTA Final**
  - Decidir qual plano promover
  - Editar `src/components/FinalCTA.tsx`

### Pixels e Analytics

- [ ] **Facebook Pixel** (Opcional)
  - Obter Pixel ID do Facebook Ads
  - Adicionar código no `index.html`
  - Testar com Facebook Pixel Helper

- [ ] **Google Analytics** (Opcional)
  - Criar propriedade no GA4
  - Obter ID de medição (G-XXXXXXX)
  - Adicionar código no `index.html`
  - Testar no Google Analytics DebugView

- [ ] **Google Tag Manager** (Opcional)
  - Criar conta e container
  - Obter código GTM
  - Adicionar no `index.html`

- [ ] **Hotjar** (Opcional - Heatmaps)
  - Criar conta Hotjar
  - Adicionar código de rastreamento
  - Configurar recordings

## 🌐 Fase 4: DNS e Hospedagem (Pendente ⏳)

### Configurar DNS

- [ ] **Acessar painel do domínio**
  - Provedor: __________________
  - Login: __________________

- [ ] **Criar registro DNS**
  - Tipo: A ou CNAME
  - Nome: planejamento
  - Destino: IP do servidor ou CNAME
  - TTL: 300 (5 minutos)

- [ ] **Aguardar propagação**
  - Testar: `ping planejamento.doutoraescola.com.br`
  - Tempo: 5-60 minutos

### Configurar SSL (HTTPS)

- [ ] **Acessar Nginx Proxy Manager**
  - URL: __________________
  - Login: __________________

- [ ] **Criar Proxy Host**
  - Domain: planejamento.doutoraescola.com.br
  - Scheme: http
  - Forward Hostname: nginx-multisite (ou IP)
  - Forward Port: 8082
  - Cache Assets: ✓
  - Block Common Exploits: ✓

- [ ] **Configurar SSL**
  - SSL Certificate: Let's Encrypt
  - Force SSL: ✓
  - HTTP/2 Support: ✓
  - HSTS Enabled: ✓

- [ ] **Testar HTTPS**
  - Acessar: https://planejamento.doutoraescola.com.br
  - Verificar cadeado verde
  - Testar SSL: https://www.ssllabs.com/ssltest/

## 📱 Fase 5: Testes (Pendente ⏳)

### Testes Funcionais

- [ ] **Countdown Timer**
  - Verifica se está contando
  - Verifica se o tempo está correto
  - Testa em diferentes fusos horários

- [ ] **CTAs (Todos os Botões)**
  - [ ] CTA no Hero
  - [ ] CTA após Soluções
  - [ ] CTA Plano Profissional
  - [ ] CTA Plano Avançado
  - [ ] CTA Final

- [ ] **FAQ (Accordion)**
  - Clica em todas as perguntas
  - Verifica se abrem/fecham
  - Testa transições

- [ ] **Links do Footer**
  - Política de Privacidade
  - Termos de Uso
  - Contato

### Testes Mobile

- [ ] **iPhone (Safari)**
  - Tamanhos: SE, 12, 14 Pro Max
  - Orientações: Portrait e Landscape

- [ ] **Android (Chrome)**
  - Tamanhos: Pequeno, Médio, Grande
  - Orientações: Portrait e Landscape

- [ ] **Tablet**
  - iPad, Android tablet
  - Orientações: Portrait e Landscape

### Testes de Navegadores

- [ ] Chrome (Desktop)
- [ ] Firefox (Desktop)
- [ ] Safari (Mac)
- [ ] Edge (Windows)
- [ ] Chrome Mobile
- [ ] Safari Mobile

### Testes de Performance

- [ ] **PageSpeed Insights**
  - URL: https://pagespeed.web.dev/
  - Meta: 90+ (Desktop), 80+ (Mobile)

- [ ] **GTmetrix**
  - URL: https://gtmetrix.com/
  - Meta: Grade A

- [ ] **WebPageTest**
  - URL: https://www.webpagetest.org/
  - Meta: First Contentful Paint < 2s

### Testes de SEO

- [ ] **Meta Tags**
  - Título aparece correto
  - Descrição aparece correta
  - OG image aparece em redes sociais

- [ ] **Lighthouse SEO**
  - Executar no Chrome DevTools
  - Meta: 90+

## 🚀 Fase 6: Pré-Lançamento (Pendente ⏳)

### Revisão de Conteúdo

- [ ] **Revisar textos**
  - Sem erros de português
  - Informações corretas
  - Preços atualizados

- [ ] **Revisar números**
  - +2.000 professores (confirmar)
  - 4.9/5 estrelas (confirmar)
  - 847 avaliações (confirmar)

- [ ] **Revisar ofertas**
  - R$ 37 e R$ 57 (confirmar valores)
  - 90% OFF (confirmar desconto)
  - Garantia 7 dias (confirmar política)

### Preparação de Marketing

- [ ] **Página de Obrigado**
  - Criar página pós-compra
  - Adicionar upsell (se houver)
  - Instruções de acesso

- [ ] **Sequência de E-mails**
  - E-mail de boas-vindas
  - E-mails de carrinho abandonado
  - E-mails de follow-up

- [ ] **Materiais Promocionais**
  - Banners para anúncios
  - Posts para redes sociais
  - Stories para Instagram
  - Vídeo de vendas (se houver)

## 🎉 Fase 7: Lançamento (Pendente ⏳)

### Dia do Lançamento

- [ ] **Teste final completo**
  - Testar TUDO novamente
  - Compra teste (se possível)
  - Verificar recebimento

- [ ] **Monitoramento ativo**
  - Abrir Google Analytics
  - Abrir Hotjar (se configurado)
  - Ficar de olho em erros

- [ ] **Preparar suporte**
  - WhatsApp ativo
  - E-mail monitorado
  - Respostas preparadas

- [ ] **Anunciar**
  - Posts nas redes sociais
  - E-mail para lista
  - Grupos de WhatsApp
  - Stories
  - Ads (se tiver orçamento)

### Primeiras 24 Horas

- [ ] **Monitorar métricas**
  - Número de visitantes
  - Taxa de conversão
  - Carrinho abandonado
  - Origem do tráfego

- [ ] **Responder rapidamente**
  - Dúvidas
  - Problemas técnicos
  - Solicitações de reembolso

- [ ] **Ajustar se necessário**
  - Corrigir bugs
  - Melhorar copy
  - Otimizar CTAs

## 📊 Fase 8: Pós-Lançamento (Contínuo)

### Análise de Dados

- [ ] **Revisar métricas semanalmente**
  - Taxa de conversão
  - Tráfego
  - Origem
  - Comportamento

- [ ] **Testes A/B**
  - Headline diferente
  - CTA diferente
  - Cores diferentes
  - Preços diferentes

- [ ] **Coletar feedback**
  - Pesquisas
  - Depoimentos
  - Reviews
  - Sugestões

### Melhorias Contínuas

- [ ] **Adicionar novos depoimentos**
- [ ] **Atualizar números** (+3.000 professores?)
- [ ] **Criar provas sociais** (prints de resultados)
- [ ] **Adicionar vídeos** (depoimentos em vídeo)
- [ ] **Otimizar conversão** (baseado em dados)

## 🎯 Meta Final

**Taxa de Conversão Alvo: 2-5%**

Com todos os elementos implementados corretamente, o site deve atingir uma taxa de conversão entre 2-5%, o que representa um aumento significativo em relação aos 0% da página anterior.

## 📞 Contatos Úteis

- **Desenvolvedor**: __________________
- **Hosting**: __________________
- **Suporte DNS**: __________________
- **Plataforma de Pagamento**: __________________

---

## ✨ Dicas Finais

1. **Não lance sem testar tudo**
2. **Tenha backup de tudo**
3. **Monitore nas primeiras 24h**
4. **Responda rápido aos clientes**
5. **Colete dados para melhorar**

**Boa sorte com o lançamento! 🚀🎉**

---

**Checklist criado em**: 30/01/2026
**Para**: Doutora Escola - Planejamento BNCC
**Status atual**: Fase 1 completa, Fases 2-8 pendentes
