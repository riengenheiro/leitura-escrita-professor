# 🔧 Ajustar Proprietário da Pasta Projetos

## Execute este comando:

```bash
sudo chown -R ia_proativa:ia_proativa /var/www/projetos
```

## Ou use o script:

```bash
sudo /var/www/ajustar-proprietario.sh
```

## O que faz:

- Define `ia_proativa` como dono de `/var/www/projetos`
- Aplica recursivamente a todas as subpastas e arquivos
- Permite que você edite arquivos sem precisar de sudo

## Verificar resultado:

```bash
ls -la /var/www/ | grep projetos
ls -la /var/www/projetos/
```

---

**Execute o comando acima no terminal!** 🚀
