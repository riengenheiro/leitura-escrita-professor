# O que foi feito — Doutora Escola

## Resumo

Você pediu uma **nova página** do site que converte bem (Doutora Escola / Campos de Experiências), mas em **outro domínio** — ou seja, um **site separado**, não uma rota dentro do `sales_page`.

## O que eu fiz

1. **Criei um projeto novo** em `/var/www/doutora-escola`:
   - React + Vite + Tailwind (igual ao `sales_page`, mas sem login, manual, backend).
   - Uma **única página**: a landing da Doutora Escola (hero, problema, benefícios, depoimentos, preços, garantia, FAQ, “Quem sou eu”, última chamada, footer).
   - Todas as imagens que você mandou estão em `public/images/doutora-escola/`.

2. **Removi** do `sales_page` tudo que era da Doutora Escola:
   - Rota `/campos`, página `DoutoraEscolaPage`, componentes em `doutora-escola/`, imagens em `public/images/doutora-escola/`.
   - O `sales_page` voltou a ser só o site original (Protocolo Energia Total).

3. **Problema:** você **só trabalha com Docker**, e eu tinha deixado o `doutora-escola` só com `npm run dev` / `npm run build`, sem Docker.

## O que falta (e vamos fazer agora)

- **Adicionar Docker** ao `doutora-escola`:
  - `Dockerfile` e `Dockerfile.dev` (como no `sales_page`).
  - `docker-compose.yml` com serviço de **dev** (Vite com hot-reload) e de **prod** (build + Nginx).
  - `nginx.conf` para produção.
- Assim você sobe o site da Doutora Escola **só com Docker**, em outro domínio/porta.

---

**Em uma frase:**  
O `doutora-escola` é um **site à parte** (outro domínio). Agora ele vai ter **Docker** igual ao `sales_page`, para você rodar tudo do mesmo jeito que já usa.
