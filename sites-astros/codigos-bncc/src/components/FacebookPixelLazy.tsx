import { useEffect, useState } from 'react';

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

function getPageViewParams(): Record<string, string> | undefined {
  const p = getFbcFbp();
  return Object.keys(p).length === 0 ? undefined : (p as Record<string, string>);
}

interface FacebookPixelLazyProps {
  pixelId: string;
  autoPageView?: boolean;
  trackRouteChanges?: boolean;
  delay?: number;
}

declare global {
  interface Window {
    fbq?: (a: string, b?: string, c?: unknown) => void;
  }
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
    timeoutId = setTimeout(loadPixel, delay);
    return () => {
      events.forEach((event) => window.removeEventListener(event, loadPixel));
      clearTimeout(timeoutId);
    };
  }, [delay]);

  useEffect(() => {
    if (!shouldLoad || isLoaded) return;
    const isRealPixel = window.fbq && typeof (window.fbq as { callMethod?: unknown }).callMethod === 'function';
    if (isRealPixel) {
      setIsLoaded(true);
      if (autoPageView) window.fbq!('track', 'PageView', getPageViewParams());
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (typeof window.fbq !== 'undefined' && window.fbq) {
        window.fbq('init', pixelId);
        if (autoPageView) window.fbq('track', 'PageView');
        setIsLoaded(true);
      }
    };
    script.onerror = () => console.error('Erro ao carregar Facebook Pixel');
    document.head.appendChild(script);
    return () => { if (script.parentNode) script.parentNode.removeChild(script); };
  }, [shouldLoad, pixelId, autoPageView, isLoaded]);

  useEffect(() => {
    if (!trackRouteChanges || !isLoaded || typeof window.fbq === 'undefined' || !window.fbq) return;
    const handleRouteChange = () => { if (window.fbq) window.fbq('track', 'PageView', getPageViewParams()); };
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, [trackRouteChanges, isLoaded]);

  return null;
}
