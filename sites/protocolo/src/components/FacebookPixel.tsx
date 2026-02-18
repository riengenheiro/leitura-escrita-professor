import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useFacebookPixel } from '../hooks/useFacebookPixel';

/**
 * Props do componente FacebookPixel
 */
interface FacebookPixelProps {
  pixelId: string;
  externalId?: string;
  autoPageView?: boolean;
  trackRouteChanges?: boolean;
}

/**
 * Componente para gerenciar o Facebook Pixel
 * 
 * @example
 * // No App.tsx ou componente raiz
 * <FacebookPixel 
 *   pixelId="123456789" 
 *   autoPageView={true}
 *   trackRouteChanges={true}
 * />
 */
export function FacebookPixel({
  pixelId,
  externalId,
  autoPageView = true,
  trackRouteChanges = true
}: FacebookPixelProps) {
  const location = useLocation();
  const { trackPageView } = useFacebookPixel({
    pixelId,
    externalId,
    autoPageView: false // Desabilita auto para controlar manualmente
  });

  // Track PageView inicial
  useEffect(() => {
    if (autoPageView) {
      trackPageView();
    }
  }, [autoPageView, trackPageView]);

  // Track mudanças de rota (para SPAs)
  useEffect(() => {
    if (trackRouteChanges && !autoPageView) {
      trackPageView();
    }
  }, [location.pathname, trackRouteChanges, autoPageView, trackPageView]);

  return null; // Componente invisível
}
