# 🐳 LEIA PRIMEIRO - Facebook Pixel no Docker

## ⚡ Setup em 3 Passos

### 1️⃣ Configure o `.env`

```bash
nano backend/.env
```

Adicione no final:
```env
FACEBOOK_PIXEL_ID=123456789
FACEBOOK_ACCESS_TOKEN=seu_token_aqui
FACEBOOK_TEST_EVENT_CODE=TEST12345
FACEBOOK_DEBUG=true
```

### 2️⃣ Rebuild o Backend

```bash
./rebuild-backend.sh
```

### 3️⃣ Adicione no Frontend

Edite `src/App.tsx`:

```tsx
import { FacebookPixel } from './components/FacebookPixel';

function AppContent() {
  return (
    <>
      <FacebookPixel pixelId="123456789" autoPageView={true} />
      {/* resto do código */}
    </>
  );
}
```

**Pronto!** 🎉

---

## 📊 Testar

```bash
# Backend
curl http://localhost:3001/health

# Facebook Pixel
curl -X POST http://localhost:3001/api/facebook-pixel/track \
  -H "Content-Type: application/json" \
  -d '{"event_type":"PageView","config_id":"default"}'

# Frontend
# Abra http://localhost:8081
# DevTools (F12) > Console: window.fbq('track', 'PageView')
```

---

## 🎯 Como Funciona

### ✅ O que foi criado:

**Backend (Node.js):**
- `FacebookPixelClient.js` - Cliente para Facebook CAPI
- `pixelConfig.js` - Gerencia múltiplos pixels
- Endpoint: `POST /api/facebook-pixel/track`
- Novas dependências: `node-fetch`, `cookie-parser`

**Frontend (React):**
- `src/components/FacebookPixel.tsx` - Componente
- `src/hooks/useFacebookPixel.ts` - Hook
- `src/config/facebookPixels.ts` - Configuração

### ✅ Como usar:

**1. Pixel Global (todas as páginas):**
```tsx
// src/App.tsx
<FacebookPixel pixelId="123456789" autoPageView={true} />
```

**2. Pixel por Página:**
```tsx
// src/pages/LandingPage.tsx
import { FacebookPixel } from '../components/FacebookPixel';

export function LandingPage() {
  return (
    <>
      <FacebookPixel pixelId="111111111" />
      {/* conteúdo */}
    </>
  );
}
```

**3. Rastrear Eventos:**
```tsx
import { useFacebookPixel } from '../hooks/useFacebookPixel';

function MeuComponente() {
  const { trackLead, trackPurchase } = useFacebookPixel({
    pixelId: '123456789'
  });

  const handleSubmit = () => {
    trackLead(); // Rastreia lead
  };

  const handlePurchase = () => {
    trackPurchase(100, 'BRL', ['product-1']); // Rastreia compra
  };
}
```

---

## 🔄 Múltiplos Pixels (como no PHP)

### Configurar pixels:

Edite `src/config/facebookPixels.ts`:

```typescript
export const FACEBOOK_PIXELS = {
  landingPage1: {
    pixelId: '111111111',
    name: 'Landing Page 1'
  },
  landingPage2: {
    pixelId: '222222222',
    name: 'Landing Page 2'
  }
};
```

### Usar nas páginas:

```tsx
import { FACEBOOK_PIXELS } from '../config/facebookPixels';

const pixel = FACEBOOK_PIXELS.landingPage1;
<FacebookPixel pixelId={pixel.pixelId} />
```

---

## 🛠️ Comandos Docker Úteis

```bash
# Ver logs
docker-compose logs -f backend

# Reiniciar backend
docker-compose restart backend

# Rebuild backend
docker-compose build backend

# Ver status
docker-compose ps

# Entrar no container
docker exec -it manual-backend sh
```

---

## 📚 Documentação Completa

| Arquivo | Descrição |
|---------|-----------|
| **[SETUP_COMPLETO_DOCKER.md](./SETUP_COMPLETO_DOCKER.md)** | 🐳 Guia completo Docker |
| **[QUICKSTART_FACEBOOK_PIXEL.md](./QUICKSTART_FACEBOOK_PIXEL.md)** | 🚀 Início rápido |
| **[FACEBOOK_PIXEL_SETUP.md](./FACEBOOK_PIXEL_SETUP.md)** | 📖 Documentação detalhada |
| **[EXEMPLO_IMPLEMENTACAO.md](./EXEMPLO_IMPLEMENTACAO.md)** | 💡 Exemplos práticos |

---

## 🐛 Problemas?

### Backend não inicia:
```bash
docker-compose logs backend
docker-compose build --no-cache backend
```

### Pixel não carrega:
```bash
# Verificar se arquivos existem
docker exec -it sales-page-prod ls -la /usr/share/nginx/html/

# Rebuild frontend
docker-compose build app-prod
```

### API não responde:
```bash
curl http://localhost:3001/health
docker exec -it manual-backend sh
npm list
```

---

## ✅ Checklist

- [ ] `.env` configurado
- [ ] Backend rebuildado: `./rebuild-backend.sh`
- [ ] `<FacebookPixel>` adicionado no App.tsx
- [ ] Testado: `curl http://localhost:3001/health`
- [ ] Testado: `curl POST /api/facebook-pixel/track`
- [ ] Browser: `window.fbq` funciona
- [ ] Facebook Events Manager recebendo eventos

---

## 🎉 Está Pronto!

Seu projeto Docker agora tem Facebook Pixel funcionando igual ao PHP original!

**Cada página pode ter seu próprio pixel!** 🎯

Dúvidas? Veja a documentação completa ou os logs:
```bash
docker-compose logs -f backend | grep -i facebook
```

---

Feito com ❤️ para seu projeto!
