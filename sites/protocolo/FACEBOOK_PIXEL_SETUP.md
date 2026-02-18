# 🎯 Configuração do Facebook Pixel

Guia completo para implementar o Facebook Pixel nas suas páginas com suporte a múltiplos pixels.

## 📋 Índice

1. [Instalação](#instalação)
2. [Configuração Backend](#configuração-backend)
3. [Uso no Frontend](#uso-no-frontend)
4. [Exemplos Práticos](#exemplos-práticos)
5. [Tracking Server-Side (CAPI)](#tracking-server-side-capi)
6. [Múltiplos Pixels](#múltiplos-pixels)
7. [Desduplicação de Eventos](#desduplicação-de-eventos)

---

## 🔧 Instalação

### 1. Instalar dependências do backend

```bash
cd backend
npm install
```

As seguintes dependências já foram adicionadas:
- `node-fetch`: Para chamadas HTTP
- `cookie-parser`: Para gerenciar cookies

### 2. Configurar variáveis de ambiente

Edite o arquivo `backend/.env`:

```env
# Facebook Pixel (opcional - pode ser configurado por página)
FACEBOOK_PIXEL_ID=123456789
FACEBOOK_ACCESS_TOKEN=seu_access_token_aqui
FACEBOOK_TEST_EVENT_CODE=TEST12345
FACEBOOK_DEBUG=true
```

**Como obter o Access Token:**

1. Acesse [Facebook Business Manager](https://business.facebook.com/)
2. Vá em **Configurações de Negócio** > **Origens de Dados** > **Pixels**
3. Selecione seu pixel
4. Vá em **Configurações** > **API de Conversões**
5. Clique em **Gerar token de acesso**

---

## ⚙️ Configuração Backend

O backend já está configurado com:

### 1. Cliente FacebookPixelClient

Classe JavaScript que gerencia:
- ✅ Conversão API (CAPI)
- ✅ Desduplicação de eventos
- ✅ User matching avançado
- ✅ Cookies do Facebook (_fbp, _fbc)
- ✅ Detecção de bots

### 2. Endpoint da API

**POST** `/api/facebook-pixel/track`

Body:
```json
{
  "event_type": "Purchase",
  "pixel_id": "123456789",
  "access_token": "seu_token",
  "event_id": "evt_123456",
  "value": 100,
  "currency": "BRL",
  "content_ids": ["product_1"],
  "client_data": {
    "email": "user@example.com",
    "phone": "+5511999999999",
    "first_name": "João",
    "last_name": "Silva"
  }
}
```

---

## 🎨 Uso no Frontend

### 1. Configuração Global (App.tsx)

Adicione o componente `FacebookPixel` no seu componente raiz:

```tsx
import { FacebookPixel } from './components/FacebookPixel';

function App() {
  return (
    <>
      {/* Pixel global - rastreia todas as páginas */}
      <FacebookPixel 
        pixelId="123456789" 
        autoPageView={true}
        trackRouteChanges={true}
      />
      
      {/* Resto do app */}
      <Routes>
        {/* ... */}
      </Routes>
    </>
  );
}
```

### 2. Hook useFacebookPixel

Use o hook para rastrear eventos específicos:

```tsx
import { useFacebookPixel } from '../hooks/useFacebookPixel';

function CheckoutPage() {
  const { trackInitiateCheckout } = useFacebookPixel({
    pixelId: '123456789'
  });

  const handleCheckout = () => {
    // Track evento
    trackInitiateCheckout(100, 'BRL', ['product_1']);
    
    // Continua com lógica de checkout...
  };

  return (
    <button onClick={handleCheckout}>
      Finalizar Compra
    </button>
  );
}
```

---

## 📚 Exemplos Práticos

### Exemplo 1: Landing Page com Pixel Específico

```tsx
import { FacebookPixel } from '../components/FacebookPixel';
import { useFacebookPixel } from '../hooks/useFacebookPixel';

export function LandingPage() {
  const PIXEL_ID = '111111111'; // Pixel específico desta página
  
  const { trackLead, trackAddToCart } = useFacebookPixel({
    pixelId: PIXEL_ID
  });

  const handleFormSubmit = (email: string) => {
    // Track Lead
    trackLead();
    
    // Enviar para backend também (CAPI)
    fetch('http://localhost:3001/api/facebook-pixel/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_type: 'Lead',
        pixel_id: PIXEL_ID,
        access_token: 'seu_token',
        client_data: { email }
      })
    });
  };

  const handleAddToCart = (productId: string, price: number) => {
    trackAddToCart(price, 'BRL', [productId]);
  };

  return (
    <>
      <FacebookPixel pixelId={PIXEL_ID} autoPageView={true} />
      
      <div>
        <h1>Minha Landing Page</h1>
        {/* ... */}
      </div>
    </>
  );
}
```

### Exemplo 2: Página de Checkout

```tsx
import { useFacebookPixel } from '../hooks/useFacebookPixel';

export function Checkout() {
  const PIXEL_ID = '222222222';
  
  const { trackInitiateCheckout, trackPurchase } = useFacebookPixel({
    pixelId: PIXEL_ID
  });

  const handleInitiateCheckout = (cart: any) => {
    const eventId = `evt_${Date.now()}_${Math.random()}`;
    
    // Track no cliente
    trackInitiateCheckout(
      cart.total,
      'BRL',
      cart.items.map((item: any) => item.id),
      eventId
    );
    
    // Track no servidor (CAPI) - desduplicação com eventId
    fetch('http://localhost:3001/api/facebook-pixel/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_type: 'InitiateCheckout',
        pixel_id: PIXEL_ID,
        access_token: 'seu_token',
        event_id: eventId, // Mesmo ID para desduplicação
        value: cart.total,
        currency: 'BRL',
        content_ids: cart.items.map((item: any) => item.id),
        client_data: {
          email: cart.customer.email,
          phone: cart.customer.phone
        }
      })
    });
  };

  const handlePurchase = (order: any) => {
    const eventId = `evt_${Date.now()}_${Math.random()}`;
    
    trackPurchase(
      order.total,
      'BRL',
      order.items.map((item: any) => item.id),
      eventId
    );
    
    // Track no servidor também
    fetch('http://localhost:3001/api/facebook-pixel/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_type: 'Purchase',
        pixel_id: PIXEL_ID,
        access_token: 'seu_token',
        event_id: eventId,
        value: order.total,
        currency: 'BRL',
        content_ids: order.items.map((item: any) => item.id),
        client_data: {
          email: order.customer.email,
          phone: order.customer.phone,
          first_name: order.customer.firstName,
          last_name: order.customer.lastName
        }
      })
    });
  };

  return (
    <div>
      <h1>Checkout</h1>
      {/* ... */}
    </div>
  );
}
```

### Exemplo 3: Webhook Kiwify com Tracking

Adicione tracking ao webhook existente:

```javascript
// No arquivo backend/server.js, após criar usuário:

app.post('/webhook/kiwify', async (req, res) => {
  // ... código existente ...
  
  // Após criar usuário com sucesso:
  if (users[email]) {
    // Track Purchase via CAPI
    const pixelClient = new FacebookPixelClient(
      process.env.FACEBOOK_PIXEL_ID,
      process.env.FACEBOOK_ACCESS_TOKEN
    );
    
    await pixelClient.trackPurchase(
      req,
      {
        email: email,
        first_name: body.Customer?.first_name,
        last_name: body.Customer?.last_name,
        phone: body.Customer?.phone
      },
      body.order_amount || 0,
      'BRL',
      [body.product_id || 'manual']
    );
  }
  
  // ... resto do código ...
});
```

---

## 🔄 Tracking Server-Side (CAPI)

### Por que usar CAPI?

- ✅ **Maior precisão**: Não é bloqueado por ad-blockers
- ✅ **Melhor atribuição**: Dados diretos do servidor
- ✅ **iOS 14+**: Contorna limitações de tracking
- ✅ **Backup**: Se o pixel no cliente falhar, o servidor rastreia

### Exemplo de uso:

```javascript
// Backend
import FacebookPixelClient from './FacebookPixelClient.js';

const pixelClient = new FacebookPixelClient(
  '123456789',
  'seu_access_token'
);

// Em um endpoint ou webhook:
app.post('/api/compra', async (req, res) => {
  const { email, value, orderId } = req.body;
  
  // Track via CAPI
  const result = await pixelClient.trackPurchase(
    req,
    { email },
    value,
    'BRL',
    [orderId]
  );
  
  console.log('Tracking result:', result);
  
  // ... resto da lógica ...
});
```

---

## 🎯 Múltiplos Pixels

### Opção 1: Pixels por Página

```tsx
// LandingPage1.tsx
<FacebookPixel pixelId="111111111" />

// LandingPage2.tsx
<FacebookPixel pixelId="222222222" />

// LandingPage3.tsx
<FacebookPixel pixelId="333333333" />
```

### Opção 2: Configuração Dinâmica

```tsx
// config/pixels.ts
export const PIXELS = {
  landingPage1: {
    pixelId: '111111111',
    accessToken: 'token1'
  },
  landingPage2: {
    pixelId: '222222222',
    accessToken: 'token2'
  }
};

// LandingPage.tsx
import { PIXELS } from '../config/pixels';

function LandingPage({ pageId }: { pageId: keyof typeof PIXELS }) {
  const pixel = PIXELS[pageId];
  
  return (
    <>
      <FacebookPixel pixelId={pixel.pixelId} />
      {/* ... */}
    </>
  );
}
```

### Opção 3: Por Produto/Plano

```tsx
// Baseado no exemplo PHP original
interface Plan {
  id: number;
  name: string;
  pixelId: string;
  accessToken: string;
}

const plans: Plan[] = [
  { id: 1, name: 'Básico', pixelId: '111111', accessToken: 'token1' },
  { id: 2, name: 'Pro', pixelId: '222222', accessToken: 'token2' },
  { id: 3, name: 'Premium', pixelId: '333333', accessToken: 'token3' }
];

function PricingPage() {
  const handlePurchase = (plan: Plan, value: number) => {
    const eventId = `evt_${Date.now()}`;
    
    // Track no cliente
    window.fbq('track', 'Purchase', {
      value,
      currency: 'BRL',
      content_ids: [plan.id.toString()]
    }, { eventID: eventId });
    
    // Track no servidor
    fetch('/api/facebook-pixel/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_type: 'Purchase',
        pixel_id: plan.pixelId,
        access_token: plan.accessToken,
        event_id: eventId,
        value,
        currency: 'BRL',
        content_ids: [plan.id.toString()]
      })
    });
  };
  
  return (
    <div>
      {plans.map(plan => (
        <PlanCard key={plan.id} plan={plan} onPurchase={handlePurchase} />
      ))}
    </div>
  );
}
```

---

## 🔒 Desduplicação de Eventos

Para evitar eventos duplicados entre cliente e servidor, use `eventID`:

```tsx
// 1. Gerar eventId único
const eventId = `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

// 2. Usar o MESMO eventId no cliente
trackPurchase(100, 'BRL', ['product_1'], eventId);

// 3. Usar o MESMO eventId no servidor
fetch('/api/facebook-pixel/track', {
  method: 'POST',
  body: JSON.stringify({
    event_type: 'Purchase',
    event_id: eventId, // ⭐ MESMO ID
    // ... resto dos dados
  })
});
```

O Facebook reconhece que são o mesmo evento e não duplica!

---

## 🧪 Testando

### 1. Testar Pixel no Cliente

```bash
# Abra o console do navegador e digite:
fbq('track', 'PageView')

# Ou use a extensão:
# Facebook Pixel Helper (Chrome)
```

### 2. Testar CAPI no Servidor

```bash
# Endpoint de teste
curl -X POST http://localhost:3001/api/facebook-pixel/track \
  -H "Content-Type: application/json" \
  -d '{
    "event_type": "PageView",
    "pixel_id": "123456789",
    "access_token": "seu_token",
    "test_event_code": "TEST12345"
  }'
```

### 3. Ver eventos no Facebook

1. Acesse [Events Manager](https://www.facebook.com/events_manager2)
2. Selecione seu pixel
3. Vá em **Test Events**
4. Você verá os eventos em tempo real

---

## 📊 Monitoramento

### Logs no Backend

```javascript
// Ative o debug no .env:
FACEBOOK_DEBUG=true

// Verá logs como:
// FB CAPI Success: Event=Purchase, ID=evt_123, ExtID=user_456
```

### Facebook Events Manager

- **Overview**: Dashboard geral
- **Test Events**: Eventos de teste em tempo real
- **Diagnostics**: Problemas e avisos
- **Data Sources**: Qualidade dos dados

---

## 🚀 Próximos Passos

1. ✅ Configure os tokens no `.env`
2. ✅ Adicione `<FacebookPixel>` nas páginas
3. ✅ Teste com Test Event Code
4. ✅ Configure eventos de conversão
5. ✅ Monitore no Events Manager
6. 🎯 Configure campanhas no Facebook Ads

---

## 💡 Dicas Importantes

- **Nunca exponha o Access Token no frontend** - sempre use o backend
- **Use Test Event Code durante desenvolvimento** - não polui dados reais
- **Sempre use eventID para desduplicação** - cliente + servidor
- **Normalize dados antes de enviar** - emails lowercase, remover espaços
- **Configure múltiplos pixels por produto/campanha** - melhor rastreamento

---

## 📞 Suporte

Se tiver dúvidas:
1. Verifique os logs do backend
2. Use Facebook Pixel Helper no navegador
3. Consulte [Facebook Business Help Center](https://www.facebook.com/business/help)

Feito com ❤️ para seu projeto!
