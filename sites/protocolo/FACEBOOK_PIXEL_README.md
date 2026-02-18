# 🎯 Facebook Pixel - Implementação Completa

Implementação completa do Facebook Pixel para seu projeto React/Node.js, baseada no exemplo PHP original.

## 📚 Documentação

| Arquivo | Descrição |
|---------|-----------|
| **[QUICKSTART_FACEBOOK_PIXEL.md](./QUICKSTART_FACEBOOK_PIXEL.md)** | 🚀 Guia rápido - setup em 5 minutos |
| **[FACEBOOK_PIXEL_SETUP.md](./FACEBOOK_PIXEL_SETUP.md)** | 📖 Documentação completa e detalhada |
| **[EXEMPLO_IMPLEMENTACAO.md](./EXEMPLO_IMPLEMENTACAO.md)** | 💡 Exemplos específicos para seu projeto |
| **[pixels.json.example](./pixels.json.example)** | ⚙️ Exemplo de configuração de múltiplos pixels |

## 🎨 Estrutura Criada

### Backend

```
backend/
├── FacebookPixelClient.js      # Classe principal para CAPI
├── pixelConfig.js               # Gerenciamento de múltiplos pixels
├── server.js                    # ✅ Atualizado com endpoint /api/facebook-pixel/track
├── package.json                 # ✅ Atualizado com dependências
└── .env.example                 # ✅ Atualizado com vars do Facebook
```

### Frontend

```
src/
├── components/
│   └── FacebookPixel.tsx        # Componente para injetar pixel
├── hooks/
│   └── useFacebookPixel.ts      # Hook para rastrear eventos
├── config/
│   └── facebookPixels.ts        # Configuração de pixels
└── examples/
    └── ExampleLandingPageWithPixel.tsx  # Exemplos de uso
```

## ⚡ Quick Start

### 1. Instalar

```bash
cd backend
npm install
```

### 2. Configurar

```bash
# Edite backend/.env
FACEBOOK_PIXEL_ID=seu_pixel_id
FACEBOOK_ACCESS_TOKEN=seu_token
```

### 3. Usar

```tsx
// App.tsx
import { FacebookPixel } from './components/FacebookPixel';

function App() {
  return (
    <>
      <FacebookPixel pixelId="123456789" autoPageView={true} />
      {/* resto do app */}
    </>
  );
}
```

## 🎯 Funcionalidades

### ✅ Cliente (Browser)

- ✅ Script do Facebook Pixel injetado automaticamente
- ✅ Rastreamento de PageView, Lead, Purchase, etc
- ✅ Hook React para eventos customizados
- ✅ Suporte a múltiplos pixels por página
- ✅ Desduplicação com eventID

### ✅ Servidor (CAPI)

- ✅ Conversão API do Facebook
- ✅ Não bloqueado por ad-blockers
- ✅ User matching avançado (email, phone, etc)
- ✅ Gerenciamento de cookies (_fbp, _fbc)
- ✅ Detecção de bots
- ✅ Suporte a múltiplos pixels via configuração
- ✅ Endpoint REST API: `/api/facebook-pixel/track`

### ✅ Múltiplos Pixels

- ✅ Por página (landing-page-1, landing-page-2)
- ✅ Por produto (product-1, product-2)
- ✅ Por campanha (black-friday, etc)
- ✅ Configuração em arquivo JSON ou código
- ✅ Fácil integração com banco de dados

## 📊 Eventos Suportados

| Evento | Descrição | Uso |
|--------|-----------|-----|
| `PageView` | Visualização de página | Automático ou manual |
| `Lead` | Formulário enviado | Captura de leads |
| `InitiateCheckout` | Início do checkout | Botão de compra clicado |
| `Purchase` | Compra confirmada | Webhook ou confirmação |
| `AddToCart` | Adicionar ao carrinho | E-commerce |
| Custom | Evento personalizado | Qualquer ação |

## 🔄 Fluxo de Tracking

### Cenário 1: PageView
```
Usuário acessa página
  ↓
<FacebookPixel> carrega
  ↓
fbq('track', 'PageView') → Facebook
```

### Cenário 2: Checkout
```
Usuário clica "Comprar"
  ↓
trackInitiateCheckout() → Cliente (fbq)
  ↓
fetch('/api/facebook-pixel/track') → Servidor (CAPI)
  ↓
Facebook (ambos com mesmo eventID = sem duplicação)
```

### Cenário 3: Webhook Kiwify
```
Kiwify confirma pagamento
  ↓
POST /webhook/kiwify
  ↓
pixelClient.trackPurchase() → Facebook CAPI
  ↓
Evento registrado (não bloqueado por ad-blocker)
```

## 🔒 Segurança

- ✅ Access tokens **NUNCA** no frontend
- ✅ Tokens apenas no backend (.env)
- ✅ Validação de bots
- ✅ Rate limiting recomendado
- ✅ HTTPS obrigatório em produção

## 🧪 Testes

### Browser
```javascript
// Console do navegador
window.fbq('track', 'PageView');
```

### API
```bash
curl -X POST http://localhost:3001/api/facebook-pixel/track \
  -H "Content-Type: application/json" \
  -d '{
    "event_type": "PageView",
    "config_id": "landing-page-1"
  }'
```

### Facebook Events Manager
1. https://www.facebook.com/events_manager2
2. Selecione seu pixel
3. Test Events
4. Veja em tempo real

## 📋 Exemplos de Uso

### Exemplo 1: Global (App.tsx)
```tsx
<FacebookPixel pixelId="123456789" autoPageView={true} />
```

### Exemplo 2: Por Página
```tsx
const pixel = FACEBOOK_PIXELS.landingPage1;
<FacebookPixel pixelId={pixel.pixelId} />
```

### Exemplo 3: Evento Manual
```tsx
const { trackPurchase } = useFacebookPixel({ pixelId: '123456789' });
trackPurchase(100, 'BRL', ['order_1']);
```

### Exemplo 4: Server-Side (CAPI)
```javascript
await pixelClient.trackPurchase(req, { email }, 100, 'BRL', ['order_1']);
```

### Exemplo 5: Com Configuração por ID
```bash
curl -X POST http://localhost:3001/api/facebook-pixel/track \
  -H "Content-Type: application/json" \
  -d '{
    "event_type": "Purchase",
    "config_id": "product-1",
    "value": 197,
    "currency": "BRL",
    "content_ids": ["manual-basico"],
    "client_data": {
      "email": "user@example.com"
    }
  }'
```

## 🚀 Deploy

### Desenvolvimento
```bash
# Backend
cd backend
npm run dev

# Frontend
npm run dev
```

### Produção
```bash
# Backend
cd backend
npm start

# Frontend
npm run build
```

**Importante:**
- Configure `.env` com valores reais
- Remova `FACEBOOK_TEST_EVENT_CODE` em produção
- Use HTTPS
- Configure CORS adequadamente

## 🎯 Diferenças do PHP Original

| Recurso | PHP Original | Nova Implementação |
|---------|--------------|-------------------|
| Linguagem | PHP | JavaScript/Node.js |
| SDK | facebook-php-business-sdk | Fetch API nativo |
| Configuração | Banco de dados | Arquivo .env + JSON |
| Frontend | Script manual | Hook React + Componente |
| API | Arquivo único | Endpoint REST |
| Cookies | $_COOKIE | cookie-parser |
| Sessions | $_SESSION | localStorage/backend |

## 🔧 Manutenção

### Adicionar novo pixel

```javascript
// backend/pixelConfig.js
'novo-produto': {
  pixelId: '444444444',
  accessToken: process.env.FACEBOOK_ACCESS_TOKEN_NOVO,
  name: 'Novo Produto'
}
```

### Usar no frontend

```tsx
import { FACEBOOK_PIXELS } from '../config/facebookPixels';

const pixel = FACEBOOK_PIXELS.novoProduto;
<FacebookPixel pixelId={pixel.pixelId} />
```

### Tracking server-side

```javascript
fetch('/api/facebook-pixel/track', {
  method: 'POST',
  body: JSON.stringify({
    event_type: 'Purchase',
    config_id: 'novo-produto',
    value: 197
  })
});
```

## 📞 Suporte

- **Documentação Facebook**: https://developers.facebook.com/docs/marketing-api/conversions-api
- **Events Manager**: https://www.facebook.com/events_manager2
- **Business Help Center**: https://www.facebook.com/business/help

## ✅ Checklist de Deploy

- [ ] Backend configurado com .env
- [ ] Dependências instaladas
- [ ] Pixel ID e Access Token válidos
- [ ] Test Event Code removido (produção)
- [ ] CORS configurado
- [ ] HTTPS habilitado
- [ ] Webhook testado
- [ ] Events Manager configurado
- [ ] Públicos criados
- [ ] Campanhas configuradas

---

**Desenvolvido com base no exemplo PHP original e adaptado para React/Node.js** 🚀

Feito com ❤️ para maximizar suas conversões!
