# 🚀 Quick Start - Facebook Pixel

Guia rápido para começar a usar o Facebook Pixel no seu projeto.

## ⏱️ Setup em 5 minutos

### 1️⃣ Instalar Dependências

```bash
cd backend
npm install
```

### 2️⃣ Configurar Backend

Edite `backend/.env`:

```env
# Facebook Pixel
FACEBOOK_PIXEL_ID=seu_pixel_id
FACEBOOK_ACCESS_TOKEN=seu_token
FACEBOOK_TEST_EVENT_CODE=TEST12345
FACEBOOK_DEBUG=true
```

**Como obter o Access Token:**
1. Acesse: https://business.facebook.com
2. Configurações de Negócio > Origens de Dados > Pixels
3. Selecione seu pixel > Configurações > API de Conversões
4. Gere um token de acesso

### 3️⃣ Iniciar Backend

```bash
cd backend
npm run dev
```

### 4️⃣ Configurar Frontend

**Opção A: Pixel Global (todas as páginas)**

Edite `src/App.tsx`:

```tsx
import { FacebookPixel } from './components/FacebookPixel';

function App() {
  return (
    <>
      <FacebookPixel 
        pixelId="123456789" 
        autoPageView={true}
        trackRouteChanges={true}
      />
      
      <Routes>
        {/* suas rotas */}
      </Routes>
    </>
  );
}
```

**Opção B: Pixel por Página**

Edite `src/pages/LandingPage.tsx`:

```tsx
import { FacebookPixel } from '../components/FacebookPixel';
import { useFacebookPixel } from '../hooks/useFacebookPixel';

export function LandingPage() {
  const { trackLead } = useFacebookPixel({
    pixelId: '123456789'
  });

  const handleSubmit = () => {
    trackLead();
  };

  return (
    <>
      <FacebookPixel pixelId="123456789" autoPageView={true} />
      
      <div>
        <h1>Minha Landing Page</h1>
        <button onClick={handleSubmit}>Enviar</button>
      </div>
    </>
  );
}
```

### 5️⃣ Testar

Abra o navegador e veja os eventos no console:

```javascript
// Abra DevTools (F12) e digite:
fbq('track', 'PageView')
```

Ou instale: [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/)

---

## 📋 Eventos Disponíveis

```tsx
import { useFacebookPixel } from '../hooks/useFacebookPixel';

function MyComponent() {
  const { 
    trackPageView,
    trackLead,
    trackInitiateCheckout,
    trackPurchase,
    trackAddToCart,
    trackEvent // evento customizado
  } = useFacebookPixel({ pixelId: '123456789' });

  // PageView
  trackPageView();

  // Lead
  trackLead();

  // Checkout
  trackInitiateCheckout(100, 'BRL', ['product_1']);

  // Compra
  trackPurchase(100, 'BRL', ['order_123']);

  // Adicionar ao carrinho
  trackAddToCart(50, 'BRL', ['product_1']);

  // Evento customizado
  trackEvent('MeuEvento', { parametro: 'valor' });
}
```

---

## 🎯 Múltiplos Pixels

### Configurar pixels

Edite `src/config/facebookPixels.ts`:

```typescript
export const FACEBOOK_PIXELS = {
  landingPage1: {
    id: 'landingPage1',
    name: 'Landing Page 1',
    pixelId: '111111111'
  },
  landingPage2: {
    id: 'landingPage2',
    name: 'Landing Page 2',
    pixelId: '222222222'
  }
};
```

### Usar nas páginas

```tsx
import { FACEBOOK_PIXELS } from '../config/facebookPixels';

export function LandingPage1() {
  const pixel = FACEBOOK_PIXELS.landingPage1;
  
  return (
    <>
      <FacebookPixel pixelId={pixel.pixelId} />
      {/* ... */}
    </>
  );
}
```

---

## 🔄 Tracking Server-Side (CAPI)

Para enviar eventos também pelo servidor:

```tsx
const eventId = `evt_${Date.now()}`;

// 1. Track no cliente
trackPurchase(100, 'BRL', ['order_1'], eventId);

// 2. Track no servidor (CAPI)
await fetch('http://localhost:3001/api/facebook-pixel/track', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    event_type: 'Purchase',
    pixel_id: '123456789',
    access_token: 'token', // ou use variável de ambiente
    event_id: eventId, // mesmo ID = sem duplicação
    value: 100,
    currency: 'BRL',
    content_ids: ['order_1'],
    client_data: {
      email: 'user@example.com'
    }
  })
});
```

---

## ✅ Checklist

- [ ] Backend rodando (`npm run dev`)
- [ ] `.env` configurado com `FACEBOOK_PIXEL_ID` e `FACEBOOK_ACCESS_TOKEN`
- [ ] `FacebookPixel` component adicionado nas páginas
- [ ] Facebook Pixel Helper instalado no navegador
- [ ] Eventos aparecendo no Facebook Events Manager

---

## 🧪 Ver Eventos no Facebook

1. Acesse: https://www.facebook.com/events_manager2
2. Selecione seu Pixel
3. Vá em **Test Events**
4. Use o **Test Event Code** do `.env`
5. Veja eventos em tempo real!

---

## 📚 Documentação Completa

Para detalhes completos, consulte: **[FACEBOOK_PIXEL_SETUP.md](./FACEBOOK_PIXEL_SETUP.md)**

---

## 🆘 Problemas Comuns

### Pixel não carrega

```tsx
// Verifique se o hook foi inicializado
const { trackEvent } = useFacebookPixel({ pixelId: '123456789' });

// No console do navegador:
console.log(window.fbq); // Deve retornar uma função
```

### Eventos não aparecem

1. Verifique o Facebook Pixel Helper
2. Veja o console do navegador (F12)
3. Use `FACEBOOK_DEBUG=true` no backend
4. Verifique se o Test Event Code está correto

### Access Token inválido

1. Gere um novo token no Facebook Business Manager
2. Verifique se o token tem permissões corretas
3. Teste com o endpoint: `POST /api/facebook-pixel/track`

---

## 💡 Dica Pro

Use desduplicação sempre:

```tsx
// Gera ID único
const eventId = `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

// Usa MESMO ID no cliente e servidor
trackPurchase(100, 'BRL', ['order_1'], eventId);
fetch('/api/facebook-pixel/track', { 
  body: JSON.stringify({ event_id: eventId /* ... */ })
});
```

Facebook reconhece como evento único! 🎯

---

Bom tracking! 🚀
