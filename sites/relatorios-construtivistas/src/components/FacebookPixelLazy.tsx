/**
 * Facebook Pixel com Lazy Loading
 * Inclui fbc/fbp para melhorar Qualidade da correspondência (Event Match Quality) no Meta.
 */

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

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

/**
 * Obtém fbc (e opcionalmente fbp) para enviar com eventos.
 * - fbc: lê fbclid da URL, formata como fb.1.{timestamp}.{fbclid} e grava em _fbc (90 dias).
 * - fbp: lido do cookie _fbp (definido pelo Pixel).
 */
function getFbcFbp(): { fbc?: string; fbp?: string } {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const fbclid = params.get('fbclid');
  let fbc: string | null = getCookie('_fbc');

  if (fbclid) {
    const existingFbc = getCookie('_fbc');
    const existingFbclid = existingFbc ? existingFbc.split('.').pop() ?? '' : '';
    if (!existingFbc || existingFbclid !== fbclid) {
      const creationTime = Date.now();
      fbc = `fb.1.${creationTime}.${fbclid}`;
      setCookie('_fbc', fbc, 90);
    }
  }

  const fbp = getCookie('_fbp');
  return {
    ...(fbc ? { fbc } : {}),
    ...(fbp ? { fbp } : {}),
  };
}

/** Parâmetros de usuário para PageView (fbc/fbp melhoram Event Match Quality) */
function getPageViewParams(): Record<string, string> | undefined {
  const p = getFbcFbp();
  if (Object.keys(p).length === 0) return undefined;
  return p as Record<string, string>;
}

interface FacebookPixelLazyProps {
  pixelId: string;
  autoPageView?: boolean;
  trackRouteChanges?: boolean;
  delay?: number;
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
    let timeoutId: ReturnType<typeof setTimeout>;
    let hasInteracted = false;
    const loadPixel = () => {
      if (hasInteracted) return;
      hasInteracted = true;
      setShouldLoad(true);
    };
    const events = ['scroll', 'click', 'touchstart', 'keydown', 'mousemove'];
    events.forEach((event) => {
      window.addEventListener(event, loadPixel, { once: true, passive: true });
    });
    timeoutId = setTimeout(() => loadPixel(), delay);
    return () => {
      events.forEach((event) => window.removeEventListener(event, loadPixel));
      clearTimeout(timeoutId);
    };
  }, [delay]);

  useEffect(() => {
    if (!shouldLoad || isLoaded) return;
    if (window.fbq) {
      setIsLoaded(true);
      if (autoPageView) window.fbq('track', 'PageView', getPageViewParams());
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (typeof window.fbq !== 'undefined' && window.fbq) {
        window.fbq('init', pixelId);
        if (autoPageView) window.fbq('track', 'PageView', getPageViewParams());
        setIsLoaded(true);
      }
    };
    script.onerror = () => console.error('Erro ao carregar Facebook Pixel');
    document.head.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [shouldLoad, pixelId, autoPageView, isLoaded]);

  useEffect(() => {
    if (!trackRouteChanges || !isLoaded || typeof window.fbq === 'undefined' || !window.fbq) return;
    const handleRouteChange = () => window.fbq && window.fbq('track', 'PageView', getPageViewParams());
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [trackRouteChanges, isLoaded]);

  return null;
}
