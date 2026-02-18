# 🚀 Aplicar Alterações do Facebook Pixel

## ✅ Passos Necessários

### 1. **Configurar o Pixel ID** (OBRIGATÓRIO)

Edite o arquivo: `src/config/facebookPixel.ts`

```typescript
export const FACEBOOK_PIXEL_ID = 'SEU_PIXEL_ID_AQUI'; // ← Substitua aqui
```

**Exemplo:**
```typescript
export const FACEBOOK_PIXEL_ID = '903214411087074'; // ID real do seu pixel
```

### 2. **Fazer o Build do Site** (OBRIGATÓRIO)

```bash
cd /var/www/projetos/nginx-multisite
./build-site.sh doutora-escola
```

Este comando vai:
- ✅ Instalar dependências (se necessário)
- ✅ Compilar o TypeScript
- ✅ Gerar os arquivos em `dist/`
- ✅ Reiniciar o Nginx automaticamente

### 3. **Verificar se Funcionou** (OPCIONAL)

```bash
# Verificar se o build foi criado
ls -la /var/www/projetos/sites/doutora-escola/dist/

# Verificar containers
cd /var/www/projetos/nginx-multisite
docker compose ps
```

---

## 🎯 Resumo Rápido

```bash
# 1. Editar Pixel ID
nano /var/www/projetos/sites/doutora-escola/src/config/facebookPixel.ts

# 2. Build
cd /var/www/projetos/nginx-multisite
./build-site.sh doutora-escola
```

**Pronto!** O pixel vai disparar PageView automaticamente. 🎉

---

## 🧪 Testar

Após o build, abra o site no navegador e:

1. **Abra o DevTools (F12)**
2. **Console:**
   ```javascript
   window.fbq('track', 'PageView');
   ```
3. **Verifique se não há erros**

Ou instale o [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)

---

## ⚠️ Importante

- **Sem configurar o Pixel ID**: O pixel não vai funcionar (vai tentar usar 'SEU_PIXEL_ID_AQUI')
- **Sem fazer o build**: As alterações não vão aparecer no site
- **O Nginx reinicia automaticamente** após o build

---

**Execute os 2 passos acima e está pronto!** ✅
