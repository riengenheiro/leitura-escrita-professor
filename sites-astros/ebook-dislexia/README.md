# Landing — Ebook Dislexia (dislexia.doutoraescola.com.br)

## Build e deploy

1. Instale dependências: `npm install`
2. Gere o site estático: `npm run build`
3. **Envie o conteúdo inteiro da pasta `dist/`** para o servidor (FTP, rsync, painel, etc.).

O `dist/` **não** vai para o Git (está no `.gitignore` do repositório). As imagens vêm de `public/images/` e o Astro **copia** para `dist/images/` no build.

### Conferir se as imagens foram geradas

Após o build, deve existir:

- `dist/images/mockup-ebook.webp`
- `dist/images/guaciara-foto.webp`
- `dist/images/og-image.webp`
- `dist/favicon.png`

Se `dist/images/` só tiver `README.md`, rode `npm run build` de novo com os arquivos `.webp` presentes em `public/images/`.

### Nomes dos arquivos

Use **apenas** `.webp`, sem extensão duplicada (evite `mockup-ebook.webp.webp`).
