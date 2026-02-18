# Imagens da Fábrica Mágica (WebP)

As imagens **precisam estar nesta mesma pasta** para aparecer no site após o build.

## Caminho correto (esta pasta)

```
sites/fabrica-magica/public/images/fabrica-magica/
```

Coloque aqui os 3 arquivos com **estes nomes exatos** (todos em .webp):

| Arquivo             | Uso                    | Tamanho sugerido |
|---------------------|------------------------|-------------------|
| `hero-mockup.webp`  | Hero (mockup)          | 600×600 px        |
| `guaciara.webp`     | Seção "Quem é Guaciara" | 400×500 px      |
| `og-image.webp`     | Preview redes sociais  | 1200×630 px       |

## Checklist para as imagens aparecerem

1. **Colocar os 3 arquivos .webp** dentro desta pasta:  
   `public/images/fabrica-magica/`
2. **Rodar o build de novo:**  
   `npm run build`
3. **Testar com servidor** (não abrir index.html direto no navegador):
   - Local: `npm run preview` e abrir o link que aparecer (ex.: http://localhost:4173)
   - Produção: fazer upload da pasta `dist` inteira (incluindo `dist/images/`) para o servidor

Se as imagens não estiverem em `public/images/fabrica-magica/` **antes** do build, a pasta `dist/images/fabrica-magica/` fica sem os .webp e elas não carregam no site.
