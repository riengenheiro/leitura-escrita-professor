/**
 * Configuração de múltiplos Facebook Pixels
 * 
 * IMPORTANTE: Nunca exponha os access_tokens no frontend!
 * Os access_tokens devem ficar APENAS no backend (.env)
 */

export interface PixelConfig {
  id: string;
  name: string;
  pixelId: string;
  // NÃO coloque accessToken aqui - deve ficar no backend!
}

/**
 * Pixels configurados por página/campanha/produto
 * 
 * Exemplo de uso:
 * - Cada landing page pode ter seu próprio pixel
 * - Cada produto pode ter seu pixel específico
 * - Cada campanha pode ter tracking separado
 */
export const FACEBOOK_PIXELS: Record<string, PixelConfig> = {
  // Landing Page Principal
  landingPagePrincipal: {
    id: 'landingPagePrincipal',
    name: 'Landing Page Principal',
    pixelId: '123456789' // Substitua pelo seu Pixel ID
  },

  // Landing Page Secundária
  landingPageSecundaria: {
    id: 'landingPageSecundaria',
    name: 'Landing Page Secundária',
    pixelId: '987654321' // Substitua pelo seu Pixel ID
  },

  // Exemplo: Por produto/plano
  planoBasico: {
    id: 'planoBasico',
    name: 'Plano Básico',
    pixelId: '111111111'
  },

  planoPro: {
    id: 'planoPro',
    name: 'Plano Pro',
    pixelId: '222222222'
  },

  planoPremium: {
    id: 'planoPremium',
    name: 'Plano Premium',
    pixelId: '333333333'
  },

  // Exemplo: Por campanha
  campanhaBlackFriday: {
    id: 'campanhaBlackFriday',
    name: 'Campanha Black Friday',
    pixelId: '444444444'
  }
};

/**
 * Obtém configuração do pixel por ID
 */
export function getPixelConfig(pixelId: string): PixelConfig | undefined {
  return FACEBOOK_PIXELS[pixelId];
}

/**
 * Obtém pixel padrão (se configurado)
 */
export function getDefaultPixel(): PixelConfig | undefined {
  return FACEBOOK_PIXELS.landingPagePrincipal;
}

/**
 * Lista todos os pixels configurados
 */
export function getAllPixels(): PixelConfig[] {
  return Object.values(FACEBOOK_PIXELS);
}

/**
 * Envia evento para o backend (CAPI)
 * 
 * ATENÇÃO: O access_token deve estar configurado no backend!
 * Não envie tokens no frontend!
 */
export async function trackEventServerSide(
  pixelId: string,
  eventType: string,
  eventData: {
    event_id?: string;
    value?: number;
    currency?: string;
    content_ids?: string[];
    client_data?: {
      email?: string;
      phone?: string;
      first_name?: string;
      last_name?: string;
      [key: string]: any;
    };
  }
) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';
  
  try {
    const response = await fetch(`${backendUrl}/api/facebook-pixel/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        event_type: eventType,
        pixel_id: pixelId,
        // O backend deve pegar o access_token das variáveis de ambiente
        // baseado no pixel_id ou usar um mapping interno
        ...eventData
      })
    });

    return await response.json();
  } catch (error) {
    console.error('Erro ao enviar evento para backend:', error);
    return { success: false, error };
  }
}
