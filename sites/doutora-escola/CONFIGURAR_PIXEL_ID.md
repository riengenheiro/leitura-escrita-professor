# ⚠️ IMPORTANTE: Configurar Pixel ID

## O problema

O código do Facebook Pixel está implementado e compilado, mas o **Pixel ID ainda está como placeholder** (`'SEU_PIXEL_ID_AQUI'`).

## ✅ Solução

### 1. Edite o arquivo de configuração:

```bash
nano /var/www/projetos/sites/doutora-escola/src/config/facebookPixel.ts
```

### 2. Substitua esta linha:

```typescript
export const FACEBOOK_PIXEL_ID = 'SEU_PIXEL_ID_AQUI'; // ← TROCAR AQUI
```

Por:

```typescript
export const FACEBOOK_PIXEL_ID = 'SEU_PIXEL_ID_REAL'; // ← Seu Pixel ID do Facebook
```

### 3. Como obter o Pixel ID:

1. Acesse: https://www.facebook.com/events_manager2
2. Selecione seu Pixel do Facebook
3. Vá em **Configurações**
4. Copie o **Pixel ID** (número como: `123456789`)

### 4. Rebuild o site:

```bash
cd /var/www/projetos/nginx-multisite
./build-site.sh doutora-escola
```

## 🎯 Exemplo

Se seu Pixel ID for `903214411087074`, configure assim:

```typescript
export const FACEBOOK_PIXEL_ID = '903214411087074';
```

## ✅ Verificar se funcionou

Após o rebuild, abra o site e:

1. **Abra DevTools (F12)**
2. **Console:**
   ```javascript
   window.fbq('track', 'PageView');
   ```
3. **Verifique se não há erros**

Ou instale o [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)

---

**Status atual:** ✅ Código implementado | ⚠️ Pixel ID precisa ser configurado
