# Imagens do site Sondagem na Prática

Coloque aqui as fotos e imagens do site. Tudo que estiver em `public/` é copiado para a raiz do site no build.

## Onde usar cada imagem

| Arquivo | Uso na página |
|--------|----------------|
| `og-sondagem.webp.png` ou `og-sondagem.png` | **Compartilhamento** (Facebook, WhatsApp). 1200×630 px. |
| `hero.png` | Imagem de fundo do topo (hero). |
| `guia-capa.webp` | Capa do guia no bloco “book mockup”. |
| `guaciara.webp` | Foto da Dra. Guaciara na seção “Sobre” (substitui o avatar com iniciais). |

## Quais fotos em WebP

Use **WebP** para:

1. **og-sondagem.webp** (1200×630 px) — imagem de compartilhamento (meta og:image). Reduz tamanho e melhora carregamento ao compartilhar.
2. **hero.webp** — se usar imagem no hero (acima da dobra).
3. **guia-capa.webp** — capa do guia no card.
4. **guaciara.webp** — foto da autora.

Demais ícones ou imagens pequenas podem ficar em PNG/JPG se preferir.

## Dimensões sugeridas

- **Compartilhamento (og:image):** 1200×630 px — proporção 1.91:1 (Facebook/WhatsApp).
- **Hero:** até 1600 px de largura.
- **Capa do guia:** ~400×600 px ou proporção de capa.
- **Foto autora:** quadrada ou 1:1, ex.: 400×400 px.

Após adicionar os arquivos, rode de novo: `./build-site.sh sondagem-na-pratica`.
