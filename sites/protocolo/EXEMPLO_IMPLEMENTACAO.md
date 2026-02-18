# 🎯 Exemplo de Implementação - Seu Projeto

Este guia mostra como implementar o Facebook Pixel **especificamente no seu projeto atual**.

## 📁 Estrutura Atual

```
/var/www/sales_page/
├── backend/
│   ├── server.js (✅ já atualizado)
│   ├── FacebookPixelClient.js (✅ criado)
│   └── package.json (✅ atualizado)
├── src/
│   ├── pages/
│   │   ├── LandingPage.tsx (⬅️ vamos atualizar)
│   │   └── LoginPage.tsx
│   ├── components/
│   │   ├── FacebookPixel.tsx (✅ criado)
│   │   ├── Pricing.tsx (⬅️ vamos atualizar)
│   │   └── ...
│   ├── hooks/
│   │   └── useFacebookPixel.ts (✅ criado)
│   └── config/
│       └── facebookPixels.ts (✅ criado)
```

---

## 🚀 Passo a Passo

### 1. Instalar Dependências

```bash
cd /var/www/sales_page/backend
npm install
```

### 2. Configurar Backend

Edite `/var/www/sales_page/backend/.env`:

```env
# Adicione no final do arquivo:

# Facebook Pixel
FACEBOOK_PIXEL_ID=seu_pixel_id_aqui
FACEBOOK_ACCESS_TOKEN=seu_token_aqui
FACEBOOK_TEST_EVENT_CODE=TEST12345
FACEBOOK_DEBUG=true
```

### 3. Reiniciar Backend

```bash
cd /var/www/sales_page/backend
npm run dev
```

---

## 📝 Implementação na Landing Page

### Opção 1: Pixel Global (Recomendado)

Adicione o pixel no **App.tsx** para rastrear todas as páginas:

**Arquivo:** `/var/www/sales_page/src/App.tsx`

```tsx
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { LoginPage } from './pages/LoginPage'
import { ManualInterativo } from './components/ManualInterativo'
import { FacebookPixel } from './components/FacebookPixel' // ⬅️ ADICIONE
import { useState, useEffect } from 'react'

function AppContent() {
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated')
    const email = localStorage.getItem('userEmail')
    if (auth === 'true' && email) {
      setIsAuthenticated(true)
      setUserEmail(email)
    }
  }, [])

  const handleLogin = (email: string) => {
    setUserEmail(email)
    setIsAuthenticated(true)
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('userEmail', email)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUserEmail('')
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('userEmail')
    navigate('/login')
  }

  return (
    <>
      {/* ⬅️ ADICIONE O PIXEL AQUI */}
      <FacebookPixel 
        pixelId="123456789" // Substitua pelo seu Pixel ID
        autoPageView={true}
        trackRouteChanges={true}
      />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/manual" replace />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/manual"
          element={
            isAuthenticated ? (
              <ManualInterativo userEmail={userEmail} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

function App() {
  return <AppContent />
}

export default App
```

---

### Opção 2: Pixel por Página (Múltiplos Pixels)

Se você quer **pixels diferentes por página**, faça assim:

#### 2.1 Configurar Pixels

**Arquivo:** `/var/www/sales_page/src/config/facebookPixels.ts`

```typescript
// Já criado! Edite os Pixel IDs:

export const FACEBOOK_PIXELS = {
  landingPagePrincipal: {
    id: 'landingPagePrincipal',
    name: 'Landing Page Principal',
    pixelId: '123456789' // ⬅️ SEU PIXEL ID
  },
  
  // Adicione mais pixels se necessário
  campanhaBlackFriday: {
    id: 'campanhaBlackFriday',
    name: 'Black Friday',
    pixelId: '987654321'
  }
};
```

#### 2.2 Usar na Landing Page

**Arquivo:** `/var/www/sales_page/src/pages/LandingPage.tsx`

```tsx
import { Hero } from '../components/Hero'
import { Problem } from '../components/Problem'
import { Discovery } from '../components/Discovery'
import { Nutrients } from '../components/Nutrients'
import { Solution } from '../components/Solution'
import { Testimonials } from '../components/Testimonials'
import { Modules } from '../components/Modules'
import { Bonuses } from '../components/Bonuses'
import { Guarantee } from '../components/Guarantee'
import { Pricing } from '../components/Pricing'
import { FAQ } from '../components/FAQ'
import { FinalCTA } from '../components/FinalCTA'
import { Footer } from '../components/Footer'
import { FacebookPixel } from '../components/FacebookPixel' // ⬅️ ADICIONE
import { FACEBOOK_PIXELS } from '../config/facebookPixels' // ⬅️ ADICIONE

export function LandingPage() {
  const pixel = FACEBOOK_PIXELS.landingPagePrincipal; // ⬅️ ADICIONE

  return (
    <>
      {/* ⬅️ ADICIONE O PIXEL */}
      <FacebookPixel 
        pixelId={pixel.pixelId}
        autoPageView={true}
      />

      <main className="min-h-screen bg-dark-900">
        <Hero />
        <Problem />
        <Discovery />
        <Nutrients />
        <Solution />
        <Testimonials />
        <Modules />
        <Bonuses />
        <Guarantee />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
```

---

## 🎯 Rastrear Eventos no Componente Pricing

Vamos adicionar tracking quando o usuário clicar em um plano:

**Arquivo:** `/var/www/sales_page/src/components/Pricing.tsx`

```tsx
// No início do arquivo, adicione os imports:
import { useFacebookPixel } from '../hooks/useFacebookPixel'
import { FACEBOOK_PIXELS } from '../config/facebookPixels'

// Dentro do componente:
export function Pricing() {
  const pixel = FACEBOOK_PIXELS.landingPagePrincipal;
  
  const { trackInitiateCheckout } = useFacebookPixel({
    pixelId: pixel.pixelId
  });

  const handlePlanClick = (planName: string, price: number) => {
    // Track evento de checkout
    trackInitiateCheckout(price, 'BRL', [planName]);
    
    // Também envia para o backend (CAPI)
    fetch('http://localhost:3001/api/facebook-pixel/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_type: 'InitiateCheckout',
        pixel_id: pixel.pixelId,
        access_token: 'use_env_variable', // Backend pega do .env
        value: price,
        currency: 'BRL',
        content_ids: [planName]
      })
    }).catch(err => console.error('Erro ao enviar evento:', err));
    
    // Redireciona para checkout (Kiwify, etc)
    window.location.href = `https://kiwify.app/checkout/${planName}`;
  };

  return (
    <section>
      <div className="plan-card">
        <button onClick={() => handlePlanClick('plano-basico', 197)}>
          Comprar Plano Básico
        </button>
      </div>
      
      <div className="plan-card">
        <button onClick={() => handlePlanClick('plano-premium', 297)}>
          Comprar Plano Premium
        </button>
      </div>
    </section>
  );
}
```

---

## 📊 Rastrear Compras via Webhook Kiwify

Quando o Kiwify confirmar o pagamento, rastreie a compra:

**Arquivo:** `/var/www/sales_page/backend/server.js`

No webhook Kiwify, adicione tracking (já está configurado):

```javascript
// Após criar usuário com sucesso, adicione:

app.post('/webhook/kiwify', async (req, res) => {
  try {
    // ... código existente ...
    
    // Após criar usuário:
    if (users[email]) {
      // ⬅️ ADICIONE O TRACKING DE PURCHASE
      if (process.env.FACEBOOK_PIXEL_ID && process.env.FACEBOOK_ACCESS_TOKEN) {
        const pixelClient = new FacebookPixelClient(
          process.env.FACEBOOK_PIXEL_ID,
          process.env.FACEBOOK_ACCESS_TOKEN,
          process.env.FACEBOOK_TEST_EVENT_CODE
        );
        
        await pixelClient.trackPurchase(
          req,
          {
            email: email,
            first_name: body.Customer?.first_name,
            last_name: body.Customer?.last_name,
            phone: body.Customer?.phone
          },
          parseFloat(body.order_amount) || 0,
          'BRL',
          [body.product_id || body.product_name || 'manual']
        );
        
        console.log('✅ Purchase tracking enviado para Facebook');
      }
    }
    
    // ... resto do código ...
  } catch (error) {
    // ...
  }
});
```

---

## 🧪 Testar

### 1. Testar Backend

```bash
# Terminal 1: Iniciar backend
cd /var/www/sales_page/backend
npm run dev

# Terminal 2: Testar endpoint
curl -X POST http://localhost:3001/api/facebook-pixel/track \
  -H "Content-Type: application/json" \
  -d '{
    "event_type": "PageView",
    "pixel_id": "123456789",
    "access_token": "seu_token",
    "test_event_code": "TEST12345"
  }'
```

### 2. Testar Frontend

```bash
cd /var/www/sales_page
npm run dev
```

Abra o navegador:
1. Acesse: http://localhost:5173
2. Abra DevTools (F12)
3. Vá para a aba **Console**
4. Digite: `window.fbq('track', 'PageView')`
5. Veja a requisição na aba **Network**

### 3. Ver no Facebook

1. Acesse: https://www.facebook.com/events_manager2
2. Selecione seu Pixel
3. Vá em **Test Events**
4. Você verá os eventos em tempo real!

---

## 📋 Checklist de Implementação

- [ ] Backend: Dependências instaladas (`npm install`)
- [ ] Backend: `.env` configurado com `FACEBOOK_PIXEL_ID` e `FACEBOOK_ACCESS_TOKEN`
- [ ] Backend: Servidor rodando (`npm run dev`)
- [ ] Frontend: Imports adicionados (`FacebookPixel`, `useFacebookPixel`)
- [ ] Frontend: Componente `<FacebookPixel>` adicionado no `App.tsx` ou páginas
- [ ] Frontend: Eventos rastreados no `Pricing.tsx` (opcional)
- [ ] Webhook: Tracking de Purchase adicionado no `server.js` (opcional)
- [ ] Teste: Pixel Helper instalado e funcionando
- [ ] Teste: Eventos aparecendo no Facebook Events Manager

---

## 🎬 Próximos Passos

1. ✅ Implementar pixel básico (PageView)
2. ✅ Adicionar tracking no Pricing (InitiateCheckout)
3. ✅ Adicionar tracking no Webhook (Purchase)
4. 🚀 Testar com Test Event Code
5. 🚀 Remover Test Event Code quando for para produção
6. 🚀 Configurar campanhas no Facebook Ads
7. 🚀 Criar públicos personalizados baseados nos eventos

---

## 🆘 Suporte

Se tiver problemas:

1. **Verifique os logs do backend**: `tail -f backend/logs.txt` (se configurado)
2. **Console do navegador**: F12 > Console
3. **Facebook Pixel Helper**: Chrome Extension
4. **Facebook Events Manager**: Test Events em tempo real

---

## 📚 Documentação Completa

- **Quick Start**: [QUICKSTART_FACEBOOK_PIXEL.md](./QUICKSTART_FACEBOOK_PIXEL.md)
- **Documentação Completa**: [FACEBOOK_PIXEL_SETUP.md](./FACEBOOK_PIXEL_SETUP.md)
- **Exemplos Avançados**: [src/examples/ExampleLandingPageWithPixel.tsx](./src/examples/ExampleLandingPageWithPixel.tsx)

---

Bom tracking! 🎯🚀
