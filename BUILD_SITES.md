# Build dos sites

## Links dos sites (URLs)

| Site | Link |
|------|------|
| **Guia Prático** (Dificuldades Escolares) | https://guiapratico.doutoraescola.com.br |
| **Códigos BNCC** (Códigos Alfanuméricos) | https://codigos.doutoraescola.com.br |
| **Códigos BNCC** (alternativo) | https://codigoalfanumerico.doutoraescola.com.br |
| **Atividades Lúdicas** (Alfabetização) | https://atividadesludicas.doutoraescola.com.br |
| **Clube Doutora Escola** | https://clube.doutoraescola.com.br |
| **Relatórios Construtivistas** (TEA) | https://relatorioconstrutivista.doutoraescola.com.br |
| **Planejamento Anual BNCC** | https://planejamento.doutoraescola.com.br |
| **Roteiro Para Relatórios** (Presente) | https://presente.doutoraescola.com.br |
| **Link na Bio** | https://link.doutoraescola.com.br |
| **Depoimentos Fábrica Mágica** | https://depoimentos.doutoraescola.com.br |
| **Doutora Escola** (Ideias) | https://ideias.doutoraescola.com.br |
| **Protocolo** (Energia Total) | https://protocolo.vivasuamissao.top |

---

## Por site

Use o script `build-site.sh` passando o nome do site:

```bash
./nginx-multisite/build-site.sh protocolo
./nginx-multisite/build-site.sh doutora-escola
./nginx-multisite/build-site.sh clube-doutora-escola
./nginx-multisite/build-site.sh guia-pratico
./nginx-multisite/build-site.sh roteiro-relatorios
./nginx-multisite/build-site.sh codigos-bncc
./nginx-multisite/build-site.sh planejamento-bncc
./nginx-multisite/build-site.sh atividades-ludicas
./nginx-multisite/build-site.sh relatorios-construtivistas
./nginx-multisite/build-site.sh link-bio
./nginx-multisite/build-site.sh depoimentos-fabrica
```

Ou, a partir da pasta `nginx-multisite`:

```bash
cd nginx-multisite
./build-site.sh link-bio
./build-site.sh clube-doutora-escola
./build-site.sh guia-pratico
./build-site.sh roteiro-relatorios
./build-site.sh depoimentos-fabrica
```

**Link na Bio:** depois do build, acesse sempre por **`link.doutoraescola.com.br`**. No Nginx Proxy Manager, crie um Proxy Host para esse domínio e **não altere o header Host** (o backend precisa receber `Host: link.doutoraescola.com.br` para não cair no site base).

## Todos (script)

```bash
./nginx-multisite/build-all.sh
```
