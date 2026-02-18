/**
 * Facebook Pixel com Lazy Loading
 * Inclui fbc/fbp para melhorar Qualidade da correspondência (Event Match Quality) no Meta.
 */

import { useEffect, useState } from 'react';

/** Lê um cookie pelo nome */
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

/** Define cookie com expiração em dias */
function setCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return;
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/;SameSite=Lax`;
}

/** Obtém fbc/fbp para enviar com eventos (fbclid da URL ou cookie _fbc/_fbp). */
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

function getPageViewParams(): Record<string, string> | undefined {
  const p = getFbcFbp();
  return Object.keys(p).length === 0 ? undefined : (p as Record<string, string>);
}

interface FacebookPixelLazyProps {
  pixelId: string;
  autoPageView?: boolean;
  trackRouteChanges?: boolean;
  delay?: number; // delay em ms antes de carregar (padrão: 2000ms)
}

export function FacebookPixelLazy({
  pixelId,
  autoPageView = true,
  trackRouteChanges = false,
  delay = 2000,
}: FacebookPixelLazyProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Estratégia: carregar após interação do usuário ou timeout
    let timeoutId: ReturnType<typeof setTimeout>;
    let hasInteracted = false;

    const loadPixel = () => {
      if (hasInteracted) return;
      hasInteracted = true;
      setShouldLoad(true);
    };

    // Eventos de interação do usuário
    const events = ['scroll', 'click', 'touchstart', 'keydown', 'mousemove'];
    events.forEach((event) => {
      window.addEventListener(event, loadPixel, { once: true, passive: true });
    });

    // Timeout como fallback
    timeoutId = setTimeout(() => {
      loadPixel();
    }, delay);

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, loadPixel);
      });
      clearTimeout(timeoutId);
    };
  }, [delay]);

  useEffect(() => {
    if (!shouldLoad || isLoaded) return;

    // Verifica se o pixel real já foi carregado (não é só o stub do HTML)
    const isRealPixel = window.fbq && typeof (window.fbq as { callMethod?: unknown }).callMethod === 'function';
    if (isRealPixel) {
      setIsLoaded(true);
      if (autoPageView) {
        window.fbq!('track', 'PageView', getPageViewParams());
      }
      return;
    }

    // fbq já existe (stub no HTML). fbevents.js exige que fbq exista ao executar — não remover.

    // Carrega o script do Facebook Pixel (sem crossOrigin para evitar CORS)
    const script = document.createElement('script');
    script.src = `https://connect.facebook.net/en_US/fbevents.js`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      // Inicializa o pixel (fbq é definido pelo fbevents.js)
      if (typeof window.fbq !== 'undefined' && window.fbq) {
        window.fbq('init', pixelId);
        if (autoPageView) {
          window.fbq('track', 'PageView');
        }
        setIsLoaded(true);
      }
    };

    script.onerror = () => {
      console.error('Erro ao carregar Facebook Pixel');
    };

    document.head.appendChild(script);

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [shouldLoad, pixelId, autoPageView, isLoaded]);

  // Tracking de mudanças de rota (se necessário)
  useEffect(() => {
    if (!trackRouteChanges || !isLoaded || typeof window.fbq === 'undefined' || !window.fbq) return;

    const handleRouteChange = () => {
      if (window.fbq) {
        window.fbq('track', 'PageView', getPageViewParams());
      }
    };

    // Para React Router
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [trackRouteChanges, isLoaded]);

  return null;
}
