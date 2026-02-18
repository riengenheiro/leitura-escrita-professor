# Site: Roteiro Para Fazer o Relatório do Aluno

## 📋 Sobre o Site

Site criado para oferecer gratuitamente um roteiro prático para elaboração de relatórios escolares alinhado à BNCC.

- **Call to Action**: Entre no grupo VIP para receber o ebook
- **Link VIP**: https://doutoraescola.com.br/vip
- **Domínio**: presente.doutoraescola.com.br

## 🎨 Design e Features

- Design moderno com paleta azul e verde (educacional/confiança)
- Totalmente responsivo
- Otimização de imagens com lazy loading
- Componentes reutilizáveis
- SEO completo com meta tags
- Schema.org para melhor indexação

## 📁 Estrutura do Projeto

```
roteiro-relatorios/
├── src/
│   ├── components/
│   │   ├── OptimizedImage.tsx
│   │   ├── RRHero.tsx          # Hero section com CTA
│   │   ├── RRBenefits.tsx      # Benefícios do roteiro
│   │   ├── RRTestimonials.tsx  # Depoimentos
│   │   ├── RRAbout.tsx         # Sobre a Dra. Guaciara
│   │   ├── RRFinalCTA.tsx      # CTA final
│   │   └── RRFooter.tsx        # Rodapé (igual doutora-escola)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   ├── favicon.svg
│   └── images/
│       └── roteiro-relatorios/  # Adicione suas imagens aqui
├── index.html
└── package.json
```

## 🚀 Como Usar

### 1. Instalar Dependências

```bash
cd /var/www/projetos/sites/roteiro-relatorios
npm install
```

### 2. Desenvolvimento Local

```bash
npm run dev
```

Acesse: http://localhost:5175

### 3. Build para Produção

```bash
npm run build
```

Ou use o script automático:

```bash
cd /var/www/projetos/nginx-multisite
./build-site.sh roteiro-relatorios
```

## ⚙️ Configuração do Nginx

### 1. Adicionar ao `nginx.conf`

Adicione este bloco ao arquivo `/var/www/projetos/nginx-multisite/nginx.conf`:

```nginx
# Site 9: Roteiro Para Relatórios
server {
    listen 80;
    server_name presente.doutoraescola.com.br;
    root /var/www/projetos/sites/roteiro-relatorios/dist;
    index index.html;

    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json;

    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    location / {
        try_files $uri $uri/ @roteiro_spa;
    }
    location @roteiro_spa {
        add_header Cache-Control "no-cache";
        try_files /index.html =404;
    }

    location /health {
        access_log off;
        return 200 "roteiro-relatorios ok\n";
        add_header Content-Type text/plain;
    }
}
```

### 2. Adicionar ao `docker-compose.yml`

Adicione esta linha na seção `volumes` do serviço `nginx-multisite`:

```yaml
- /var/www/projetos/sites/roteiro-relatorios/dist:/var/www/projetos/sites/roteiro-relatorios/dist:ro
```

### 3. Adicionar ao `build-site.sh`

Adicione este caso no switch do arquivo `/var/www/projetos/nginx-multisite/build-site.sh`:

```bash
    roteiro-relatorios)
        SITE_PATH="/var/www/projetos/sites/roteiro-relatorios"
        ;;
```

### 4. Adicionar ao `build-all.sh`

Adicione estas linhas ao arquivo `/var/www/projetos/nginx-multisite/build-all.sh`:

```bash
# Build Roteiro Relatórios
echo -e "${YELLOW}📦 Building Roteiro Relatórios...${NC}"
cd /var/www/projetos/sites/roteiro-relatorios
npm install
npm run build
echo -e "${GREEN}✅ Roteiro Relatórios buildado!${NC}\n"
```

### 5. Reiniciar o Nginx

```bash
cd /var/www/projetos/nginx-multisite
docker compose restart nginx-multisite
```

## 🖼️ Adicionar Imagens

Para melhorar o visual, adicione estas imagens na pasta `public/images/roteiro-relatorios/`:

1. **hero.png** - Imagem principal (idealmente 637x856px)
2. **guaciara.png** - Foto da Dra. Guaciara (600x600px, quadrada)

As imagens são otimizadas automaticamente pelo componente `OptimizedImage`.

## 📝 Personalização

### Alterar o Link VIP

Edite a constante `VIP_LINK` nos componentes:
- `src/components/RRHero.tsx`
- `src/components/RRBenefits.tsx`
- `src/components/RRFinalCTA.tsx`

### Alterar Cores

As cores principais estão no Tailwind:
- Primária: `blue-600` (#2563eb) - Confiança, educação
- Secundária: `green-500/600` (#22c55e) - Gratuito, positivo
- Accent: `green-300` (#86efac) - Destaques

## 🌐 Configurar no Proxy Manager

No **Nginx Proxy Manager**, crie um **Proxy Host**:

- **Domain Names:** `presente.doutoraescola.com.br`
- **Scheme:** `http`
- **Forward to:** `nginx-multisite` (ou IP do servidor)
- **Forward Port:** `8082`
- **SSL:** Ative Let's Encrypt
- **Force SSL:** Ativado
- **HTTP/2 Support:** Ativado
- **HSTS Enabled:** Ativado

## ✅ Checklist de Deploy

- [ ] Dependências instaladas (`npm install`)
- [ ] Build executado (`npm run build`)
- [ ] Configuração adicionada ao `nginx.conf`
- [ ] Volume adicionado ao `docker-compose.yml`
- [ ] Scripts de build atualizados
- [ ] Nginx reiniciado
- [ ] Proxy Host configurado no Proxy Manager
- [ ] SSL configurado (Let's Encrypt)
- [ ] Teste de acesso ao site
- [ ] Imagens adicionadas (opcional)

## 📊 Métricas e Analytics

Para adicionar tracking:
1. Adicione o Facebook Pixel ID se necessário
2. Configure Google Analytics no `index.html`

## 🆘 Troubleshooting

### Site não carrega

1. Verifique se o build foi feito: `ls -la dist/`
2. Verifique se o Nginx está rodando: `docker ps | grep nginx-multisite`
3. Veja os logs: `docker logs nginx-multisite`

### Imagens não aparecem

1. Verifique se o caminho está correto em `public/images/roteiro-relatorios/`
2. Após adicionar imagens, faça rebuild: `npm run build`

### Mudanças não aparecem

1. Limpe o cache do navegador (Ctrl+Shift+R)
2. Verifique se fez o build: `npm run build`
3. Reinicie o Nginx: `docker compose restart nginx-multisite`

## 📞 Suporte

Para dúvidas ou problemas, entre em contato via WhatsApp: +55 19 98986-3544

---

**Desenvolvido por dvzDesing**
**© 2023 Doutora Escola - Todos os direitos reservados**
