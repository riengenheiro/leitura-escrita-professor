import { useState } from 'react';
import { FacebookPixel } from '../components/FacebookPixel';
import { useFacebookPixel } from '../hooks/useFacebookPixel';
import { FACEBOOK_PIXELS, trackEventServerSide } from '../config/facebookPixels';

/**
 * EXEMPLO: Landing Page com Facebook Pixel
 * 
 * Este exemplo mostra como:
 * 1. Configurar um pixel específico para a página
 * 2. Rastrear diferentes eventos (PageView, Lead, InitiateCheckout, Purchase)
 * 3. Usar desduplicação entre cliente e servidor
 * 4. Enviar dados do usuário para matching
 */
export function ExampleLandingPageWithPixel() {
  // 1. Configurar qual pixel usar (do arquivo de configuração)
  const pixelConfig = FACEBOOK_PIXELS.landingPagePrincipal;
  
  // 2. Hook para rastrear eventos
  const { trackLead, trackInitiateCheckout, trackPurchase } = useFacebookPixel({
    pixelId: pixelConfig.pixelId,
    autoPageView: false // Controlado pelo componente FacebookPixel
  });

  // Estado do formulário
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: ''
  });

  /**
   * Exemplo 1: Rastrear Lead (formulário enviado)
   */
  const handleLeadFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Gerar event_id único para desduplicação
    const eventId = `evt_lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // 1. Track no cliente (Browser Pixel)
    trackLead(eventId);
    
    // 2. Track no servidor (CAPI) - com dados do usuário
    await trackEventServerSide(
      pixelConfig.pixelId,
      'Lead',
      {
        event_id: eventId, // Mesmo ID para desduplicação
        client_data: {
          email: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone
        }
      }
    );
    
    alert('Lead registrado!');
  };

  /**
   * Exemplo 2: Rastrear InitiateCheckout (botão de compra clicado)
   */
  const handleCheckoutClick = async (productId: string, price: number) => {
    const eventId = `evt_checkout_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // 1. Track no cliente
    trackInitiateCheckout(price, 'BRL', [productId], eventId);
    
    // 2. Track no servidor
    await trackEventServerSide(
      pixelConfig.pixelId,
      'InitiateCheckout',
      {
        event_id: eventId,
        value: price,
        currency: 'BRL',
        content_ids: [productId],
        client_data: {
          email: formData.email
        }
      }
    );
    
    // Redirecionar para checkout...
    console.log('Iniciando checkout...');
  };

  /**
   * Exemplo 3: Rastrear Purchase (compra finalizada)
   */
  const handlePurchaseComplete = async (orderId: string, total: number) => {
    const eventId = `evt_purchase_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // 1. Track no cliente
    trackPurchase(total, 'BRL', [orderId], eventId);
    
    // 2. Track no servidor
    await trackEventServerSide(
      pixelConfig.pixelId,
      'Purchase',
      {
        event_id: eventId,
        value: total,
        currency: 'BRL',
        content_ids: [orderId],
        client_data: {
          email: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone
        }
      }
    );
    
    alert('Compra registrada!');
  };

  return (
    <>
      {/* Componente que injeta o pixel e rastreia PageView automaticamente */}
      <FacebookPixel 
        pixelId={pixelConfig.pixelId}
        autoPageView={true}
        trackRouteChanges={false}
      />

      <div className="landing-page">
        <h1>Landing Page com Facebook Pixel</h1>
        <p>Pixel configurado: {pixelConfig.name} ({pixelConfig.pixelId})</p>

        {/* Seção 1: Formulário de Lead */}
        <section className="lead-section">
          <h2>Cadastre-se (Lead)</h2>
          <form onSubmit={handleLeadFormSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Nome"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Sobrenome"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Telefone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <button type="submit">Enviar (Track Lead)</button>
          </form>
        </section>

        {/* Seção 2: Produtos */}
        <section className="products-section">
          <h2>Produtos</h2>
          
          <div className="product-card">
            <h3>Produto 1 - R$ 100</h3>
            <button onClick={() => handleCheckoutClick('product_1', 100)}>
              Comprar (Track InitiateCheckout)
            </button>
          </div>

          <div className="product-card">
            <h3>Produto 2 - R$ 200</h3>
            <button onClick={() => handleCheckoutClick('product_2', 200)}>
              Comprar (Track InitiateCheckout)
            </button>
          </div>
        </section>

        {/* Seção 3: Simulação de Compra */}
        <section className="purchase-section">
          <h2>Simular Compra</h2>
          <button onClick={() => handlePurchaseComplete('order_123', 100)}>
            Finalizar Compra (Track Purchase)
          </button>
        </section>
      </div>
    </>
  );
}

/**
 * EXEMPLO 2: Página com pixel diferente
 */
export function ExampleLandingPageSecundaria() {
  const pixelConfig = FACEBOOK_PIXELS.landingPageSecundaria;
  
  const { trackEvent } = useFacebookPixel({
    pixelId: pixelConfig.pixelId
  });

  const handleCustomEvent = () => {
    trackEvent('CustomEvent', {
      custom_parameter: 'valor_customizado'
    });
  };

  return (
    <>
      <FacebookPixel pixelId={pixelConfig.pixelId} autoPageView={true} />
      
      <div>
        <h1>Landing Page Secundária</h1>
        <p>Esta página usa um pixel diferente: {pixelConfig.pixelId}</p>
        
        <button onClick={handleCustomEvent}>
          Disparar Evento Customizado
        </button>
      </div>
    </>
  );
}

/**
 * EXEMPLO 3: Página de Pricing com pixels por plano
 */
interface Plan {
  id: string;
  name: string;
  price: number;
  pixelConfig: typeof FACEBOOK_PIXELS[keyof typeof FACEBOOK_PIXELS];
}

export function ExamplePricingPageWithMultiplePixels() {
  const plans: Plan[] = [
    {
      id: 'basic',
      name: 'Básico',
      price: 100,
      pixelConfig: FACEBOOK_PIXELS.planoBasico
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 200,
      pixelConfig: FACEBOOK_PIXELS.planoPro
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 300,
      pixelConfig: FACEBOOK_PIXELS.planoPremium
    }
  ];

  const handlePlanPurchase = async (plan: Plan) => {
    const eventId = `evt_${Date.now()}`;
    
    // Usa o pixel específico do plano
    window.fbq('init', plan.pixelConfig.pixelId);
    window.fbq('track', 'Purchase', {
      value: plan.price,
      currency: 'BRL',
      content_ids: [plan.id]
    }, { eventID: eventId });
    
    // Track no servidor também
    await trackEventServerSide(
      plan.pixelConfig.pixelId,
      'Purchase',
      {
        event_id: eventId,
        value: plan.price,
        currency: 'BRL',
        content_ids: [plan.id]
      }
    );
    
    alert(`Compra do plano ${plan.name} registrada!`);
  };

  return (
    <div>
      <h1>Escolha seu Plano</h1>
      
      {plans.map(plan => (
        <div key={plan.id} className="plan-card">
          <h2>{plan.name}</h2>
          <p>R$ {plan.price}</p>
          <p>Pixel: {plan.pixelConfig.pixelId}</p>
          <button onClick={() => handlePlanPurchase(plan)}>
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
}

export default ExampleLandingPageWithPixel;
