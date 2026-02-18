/**
 * Componente de Imagem Otimizada
 * 
 * Features:
 * - Lazy loading nativo
 * - Suporte a WebP/AVIF com fallback
 * - Imagens responsivas (srcset)
 * 
 * Economia: ~14 KiB por imagem
 */

import { useState, useEffect, useRef } from 'react';
import type { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
  webpSrc?: string;
  avifSrc?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  srcSet,
  sizes,
  webpSrc,
  avifSrc,
  width,
  height,
  priority = false,
  className = '',
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Preload de imagens prioritárias
  useEffect(() => {
    if (!priority) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = avifSrc || webpSrc || src;
    if (srcSet) {
      link.setAttribute('imagesrcset', srcSet);
    }
    if (sizes) {
      link.setAttribute('imagesizes', sizes);
    }
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [priority, src, avifSrc, webpSrc, srcSet, sizes]);

  // Imagem em cache pode disparar load antes do onLoad estar ligado; checar complete no ref
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete) setIsLoaded(true);
  }, [src]);

  return (
    <picture>
      {/* AVIF (melhor compressão) */}
      {avifSrc && (
        <source
          srcSet={srcSet || avifSrc}
          sizes={sizes}
          type="image/avif"
        />
      )}
      
      {/* WebP (fallback moderno) */}
      {webpSrc && (
        <source
          srcSet={srcSet || webpSrc}
          sizes={sizes}
          type="image/webp"
        />
      )}

      {/* Imagem original (fallback) */}
      <img
        ref={imgRef}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </picture>
  );
}
