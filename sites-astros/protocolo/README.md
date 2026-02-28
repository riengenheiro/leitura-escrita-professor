# Site: Energia Sem Limites

## 📋 Sobre o Site

Site criado para oferecer o manual "Energia Sem Limites" - um guia completo sobre os 6 elementos que controlam 100% da sua energia.

- **Domínio**: protocolo.vivasuamissap.top
- **Tecnologia**: Astro + React + Tailwind CSS

## 🎨 Design e Features

- Design moderno com paleta verde e lima (energia/vitalidade)
- Totalmente responsivo
- Componentes interativos (Quiz, FAQ)
- Animações de scroll
- Sticky bar para conversão
- SEO completo com meta tags

## 📁 Estrutura do Projeto

```
protocolo/
├── src/
│   ├── components/
│   │   ├── TopBar.astro
│   │   ├── Hero.astro
│   │   ├── ProofBar.astro
│   │   ├── Contradiction.astro
│   │   ├── Quiz.tsx
│   │   ├── Agitation.astro
│   │   ├── Reveal.astro
│   │   ├── Testimonials.astro
│   │   ├── Offer.astro
│   │   ├── Comparison.astro
│   │   ├── FAQ.tsx
│   │   ├── FooterCTA.astro
│   │   ├── Footer.astro
│   │   ├── StickyBar.tsx
│   │   └── ScrollAnimations.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── public/
│   ├── styles.css
│   └── favico.png (adicionar)
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

## 🚀 Como Usar

### 1. Instalar Dependências

```bash
cd /var/www/projetos/sites-astros/protocolo
npm install
```

### 2. Desenvolvimento Local

```bash
npm run dev
```

Acesse: http://localhost:4321

### 3. Build para Produção

```bash
npm run build
```

Ou use o script automático:

```bash
cd /var/www/projetos/nginx-multisite
./build-site.sh protocolo
```

## ⚙️ Configuração do Nginx

### 1. Adicionar ao `nginx.conf`

Adicione este bloco ao arquivo `/var/www/projetos/nginx-multisite/nginx.conf`:

```nginx
# Site: Protocolo - Energia Sem Limites
server {
    listen 80;
    server_name protocolo.vivasuamissap.top;

    root /var/www/projetos/sites-astros/protocolo/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache para assets estáticos
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

### 2. Adicionar ao `docker-compose.yml`

Adicione este volume ao arquivo `/var/www/projetos/nginx-multisite/docker-compose.yml`:

```yaml
- /var/www/projetos/sites-astros/protocolo/dist:/var/www/projetos/sites-astros/protocolo/dist:ro
```

### 3. Adicionar ao `build-site.sh`

Adicione este case ao arquivo `/var/www/projetos/nginx-multisite/build-site.sh`:

```bash
protocolo)
    SITE_PATH="/var/www/projetos/sites-astros/protocolo"
    ;;
```

## 📝 Próximos Passos

1. Adicionar favicon (`/public/favico.png`)
2. Adicionar imagens reais (substituir placeholders)
3. Configurar link de pagamento (Kiwify)
4. Configurar domínio no DNS
5. Fazer build e testar

## 🎯 Seções do Site

1. **TopBar** - Oferta limitada
2. **Hero** - Título principal e CTA
3. **ProofBar** - Prova social (números)
4. **Contradiction** - Problema/contradição
5. **Quiz** - Teste interativo de sintomas
6. **Agitation** - Por que nada funcionou
7. **Reveal** - Os 6 elementos
8. **Testimonials** - Depoimentos
9. **Offer** - Oferta completa e preço
10. **Comparison** - Com vs Sem o manual
11. **FAQ** - Perguntas frequentes
12. **FooterCTA** - CTA final
13. **Footer** - Rodapé legal
14. **StickyBar** - Barra fixa inferior

