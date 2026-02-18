# 🚀 Comandos de Build

**Um único Nginx** (`nginx-multisite`) serve todos os sites. Este site é só mais um `server` block + volume.

## Build do Site

```bash
cd /var/www/projetos/nginx-multisite
./build-site.sh codigos-bncc
```

## Build de Todos os Sites

```bash
cd /var/www/projetos/nginx-multisite
./build-all.sh
```

## Reiniciar Nginx (sem rebuild)

```bash
cd /var/www/projetos/nginx-multisite
docker compose restart nginx-multisite
```

## Build + Restart (Tudo de uma vez)

```bash
cd /var/www/projetos/nginx-multisite
./build-site.sh codigos-bncc && docker compose restart nginx-multisite
```

## Proxy Manager

- **Backend único:** `http://nginx-multisite:80`
- No Proxy Manager: Proxy Host para `codigos.doutoraescola.com.br` → **Forward** para `nginx-multisite:80`

---

## Onde colocar as fotos

**Pasta:** `public/images/codigos-bncc/`

| Arquivo | Onde aparece no site |
|---------|----------------------|
| **01-hero.png** | Foto do produto no Hero (topo, ao lado do texto) |
| **02-resumindo.png** | Foto do produto na seção "Resumindo..." |
| **03-especialista.png** | Foto da especialista (Dra. Guaciara) em "Quem sou eu?" |

Use os nomes exatos. Depois: `./build-site.sh codigos-bncc`

---

**Pronto!** 🎉
