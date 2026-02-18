# Guia Prático Para Identificar Dificuldades Escolares

Landing page para o produto "Guia Prático Para Identificar Dificuldades Escolares" da Doutora Escola.

## Tecnologias

- React 18
- TypeScript
- Vite
- TailwindCSS
- Lucide React (ícones)

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Build

Use o script centralizado:

```bash
./nginx-multisite/build-site.sh guia-pratico
```

O site será construído na pasta `dist/` e está configurado para ser servido pelo nginx.

## Imagens

As imagens devem ser colocadas em `public/images/guia-pratico/`:

1. `01-hero.png` - Imagem do guia (hero)
2. `02-amostras.png` - Amostras do material
3. `03-antes.png` - Materiais técnicos complicados
4. `04-depois.png` - Guia Prático simplificado
5. `07-quem-sou-eu.png` - Foto da Dra. Guaciara

## Link de Pagamento

Atualizar o link de pagamento no componente `GPPricing.tsx` na linha do botão de compra.
