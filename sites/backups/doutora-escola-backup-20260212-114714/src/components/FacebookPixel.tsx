import { useEffect } from 'react';
import { useFacebookPixel } from '../hooks/useFacebookPixel';

/**
 * Props do componente FacebookPixel
 */
interface FacebookPixelProps {
  pixelId: string;
  externalId?: string;
  autoPageView?: boolean;
}

/**
 * Componente para gerenciar o Facebook Pixel
 * 
 * @example
 * // No App.tsx ou componente raiz
 * <FacebookPixel 
 *   pixelId="123456789" 
 *   autoPageView={true}
 * />
 */
export function FacebookPixel({
  pixelId,
  externalId,
  autoPageView = true
}: FacebookPixelProps) {
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

  return null; // Componente invisível
}
