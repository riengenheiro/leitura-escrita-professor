import { useEffect, useCallback } from 'react';

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return;
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}

function getFbcFbp(): { fbc?: string; fbp?: string } {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const fbclid = params.get('fbclid');
  let fbc: string | null = getCookie('_fbc');
  if (fbclid) {
    const existingFbc = getCookie('_fbc');
    const existingFbclid = existingFbc ? existingFbc.split('.').pop() ?? '' : '';
    if (!existingFbc || existingFbclid !== fbclid) {
      fbc = `fb.1.${Date.now()}.${fbclid}`;
      setCookie('_fbc', fbc, 90);
    }
  }
  const fbp = getCookie('_fbp');
  return { ...(fbc ? { fbc } : {}), ...(fbp ? { fbp } : {}) };
}

function getPageViewParams(): Record<string, string> {
  const p = getFbcFbp();
  return (Object.keys(p).length === 0 ? {} : p) as Record<string, string>;
}

/**
 * Parâmetros de configuração do Pixel
 */
export interface FacebookPixelConfig {
  pixelId: string;
  externalId?: string;
  autoPageView?: boolean;
}

/**
 * Parâmetros de evento
 */
export interface EventParameters {
  value?: number;
  currency?: string;
  content_ids?: string[];
  content_type?: string;
  num_items?: number;
  [key: string]: any;
}

/**
 * Tipo para função fbq
 */
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

/**
 * Hook para gerenciar o Facebook Pixel
 * 
 * @example
 * const { trackEvent, trackPageView } = useFacebookPixel({
 *   pixelId: '123456789',
 *   autoPageView: false
 * });
 * 
 * // Track evento personalizado
 * trackEvent('InitiateCheckout', { value: 100, currency: 'BRL' });
 */
export function useFacebookPixel(config: FacebookPixelConfig) {
  const { pixelId, externalId, autoPageView = true } = config;

  /**
   * Inicializa o Facebook Pixel
   */
  useEffect(() => {
    // Verifica se já foi inicializado
    if (window.fbq) return;

    // Carrega o script do Facebook Pixel
    (function(f: any, b: any, e: any, v: any) {
      let n: any, t: any, s: any;
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );

    // Inicializa o pixel
    const initOptions = externalId ? { external_id: externalId } : {};
    window.fbq('init', pixelId, initOptions);

    // Configuração global
    window.fbq.disablePushState = true; // Evita eventos duplicados em SPAs

    // Track PageView automático
    if (autoPageView) {
      window.fbq('track', 'PageView');
    }
  }, [pixelId, externalId, autoPageView]);

  /**
   * Track evento personalizado
   */
  const trackEvent = useCallback(
    (eventName: string, parameters: EventParameters = {}, eventId?: string) => {
      if (!window.fbq) {
        console.warn('Facebook Pixel não inicializado');
        return;
      }

      // Adiciona external_id se disponível
      if (externalId) {
        parameters.external_id = externalId;
      }

      // Track com ou sem eventID para desduplicação
      if (eventId) {
        window.fbq('track', eventName, parameters, { eventID: eventId });
      } else {
        window.fbq('track', eventName, parameters);
      }
    },
    [externalId]
  );

  /**
   * Track PageView
   */
  const trackPageView = useCallback(() => {
    trackEvent('PageView', getPageViewParams());
  }, [trackEvent]);

  /**
   * Track InitiateCheckout
   */
  const trackInitiateCheckout = useCallback(
    (value: number, currency: string = 'BRL', contentIds: string[] = [], eventId?: string) => {
      trackEvent(
        'InitiateCheckout',
        {
          value,
          currency,
          content_ids: contentIds,
          content_type: 'product',
          num_items: contentIds.length
        },
        eventId
      );
    },
    [trackEvent]
  );

  /**
   * Track Purchase
   */
  const trackPurchase = useCallback(
    (value: number, currency: string = 'BRL', contentIds: string[] = [], eventId?: string) => {
      trackEvent(
        'Purchase',
        {
          value,
          currency,
          content_ids: contentIds,
          content_type: 'product',
          num_items: contentIds.length
        },
        eventId
      );
    },
    [trackEvent]
  );

  /**
   * Track Lead
   */
  const trackLead = useCallback(
    (eventId?: string) => {
      trackEvent('Lead', {}, eventId);
    },
    [trackEvent]
  );

  /**
   * Track AddToCart
   */
  const trackAddToCart = useCallback(
    (value: number, currency: string = 'BRL', contentIds: string[] = [], eventId?: string) => {
      trackEvent(
        'AddToCart',
        {
          value,
          currency,
          content_ids: contentIds,
          content_type: 'product'
        },
        eventId
      );
    },
    [trackEvent]
  );

  return {
    trackEvent,
    trackPageView,
    trackInitiateCheckout,
    trackPurchase,
    trackLead,
    trackAddToCart
  };
}
