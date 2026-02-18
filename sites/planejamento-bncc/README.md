# Planejamento Anual BNCC - Landing Page

Landing page otimizada para conversão do produto "Planejamento Anual BNCC" da Doutora Escola.

## 🚀 Tecnologias

- React 18
- TypeScript
- Vite
- TailwindCSS
- Lucide React (ícones)

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:5175`

## 🏗️ Build

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`

## 📋 Estrutura

```
src/
├── components/          # Componentes React
│   ├── CountdownTimer.tsx
│   ├── Hero.tsx
│   ├── Problems.tsx
│   ├── Solutions.tsx
│   ├── Modules.tsx
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   ├── Author.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
├── App.tsx             # Componente principal
├── main.tsx            # Entry point
└── index.css           # Estilos globais
```

## 🎯 Otimizações para Conversão

- ✅ Countdown timer com urgência
- ✅ CTAs estrategicamente posicionados
- ✅ Prova social forte (2.000+ professores)
- ✅ Garantia destacada (7 dias)
- ✅ Design moderno e responsivo
- ✅ Cores que transmitem confiança
- ✅ FAQ para reduzir objeções
- ✅ Múltiplos pontos de conversão

## 🖼️ Imagens

Adicione as imagens na pasta `public/`:
- Foto da Dra. Guaciara Fornaciari
- Imagens do produto/material
- Favicon
- OG image para redes sociais

## 📝 Personalização

Para personalizar os preços, CTAs e links de checkout, edite os componentes:
- `src/components/Pricing.tsx` - Preços e planos
- `src/components/Hero.tsx` - Hero section e CTA principal
- `src/components/FinalCTA.tsx` - CTA final

## 🚀 Deploy

O site pode ser servido através do nginx-multisite configurado no projeto.
