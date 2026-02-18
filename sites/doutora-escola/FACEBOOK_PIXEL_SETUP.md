# 🎯 Facebook Pixel - Doutora Escola

## ✅ Implementação Concluída

O Facebook Pixel foi implementado no site Doutora Escola e está configurado para disparar **PageView** automaticamente no frontend.

## 📋 O que foi adicionado:

1. ✅ **Hook `useFacebookPixel`** - Gerencia o pixel e eventos
2. ✅ **Componente `FacebookPixel`** - Componente React para inicializar o pixel
3. ✅ **Configuração** - Arquivo de config com Pixel ID
4. ✅ **Integração no App.tsx** - Pixel carregado automaticamente

## 🔧 Configuração

### 1. Edite o Pixel ID

Abra o arquivo: `src/config/facebookPixel.ts`

```typescript
export const FACEBOOK_PIXEL_ID = 'SEU_PIXEL_ID_AQUI'; // ← Substitua aqui
```

**Como obter o Pixel ID:**
1. Acesse [Facebook Events Manager](https://www.facebook.com/events_manager2)
2. Selecione seu Pixel
3. Vá em **Configurações**
4. Copie o **Pixel ID**

### 2. Build do site

```bash
cd /var/www/projetos/nginx-multisite
./build-site.sh doutora-escola
```

## 🎯 Como funciona

### PageView Automático

O pixel dispara **PageView** automaticamente quando a página carrega:

```tsx
<FacebookPixel 
  pixelId={FACEBOOK_PIXEL_CONFIG.pixelId}
  autoPageView={true}  // ← Dispara PageView automaticamente
/>
```

### Eventos Disponíveis

Você pode usar o hook em qualquer componente:

```tsx
import { useFacebookPixel } from '../hooks/useFacebookPixel';

function MeuComponente() {
  const { 
    trackPageView,
    trackLead,
    trackInitiateCheckout,
    trackPurchase,
    trackAddToCart 
  } = useFacebookPixel({ 
    pixelId: 'SEU_PIXEL_ID' 
  });

  const handleClick = () => {
    trackLead(); // Dispara evento Lead
  };

  return <button onClick={handleClick}>Enviar</button>;
}
```

## 🧪 Testar

### 1. No navegador (DevTools):

```javascript
// Abra o console (F12) e digite:
window.fbq('track', 'PageView');
```

### 2. Facebook Pixel Helper:

Instale a extensão: [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)

### 3. Events Manager:

1. Acesse [Facebook Events Manager](https://www.facebook.com/events_manager2)
2. Selecione seu Pixel
3. Vá em **Test Events**
4. Veja eventos em tempo real

## 📝 Estrutura de Arquivos

```
src/
├── components/
│   └── FacebookPixel.tsx      ← Componente do Pixel
├── hooks/
│   └── useFacebookPixel.ts    ← Hook para eventos
├── config/
│   └── facebookPixel.ts       ← Configuração (Pixel ID)
└── App.tsx                     ← Pixel integrado aqui
```

## ✅ Checklist

- [ ] Pixel ID configurado em `src/config/facebookPixel.ts`
- [ ] Site buildado (`./build-site.sh doutora-escola`)
- [ ] Nginx reiniciado
- [ ] Testado no navegador (console: `window.fbq`)
- [ ] Facebook Pixel Helper instalado
- [ ] Eventos aparecendo no Events Manager

---

**Status:** ✅ Implementado e pronto para uso!
