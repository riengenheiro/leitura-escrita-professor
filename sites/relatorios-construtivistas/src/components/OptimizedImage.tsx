/**
 * Componente de Imagem Otimizada
 */

import { useState, useEffect, ImgHTMLAttributes } from 'react';

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

  useEffect(() => {
    if (!priority) return;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = avifSrc || webpSrc || src;
    if (srcSet) link.setAttribute('imagesrcset', srcSet);
    if (sizes) link.setAttribute('imagesizes', sizes);
    document.head.appendChild(link);
    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
    };
  }, [priority, src, avifSrc, webpSrc, srcSet, sizes]);

  return (
    <picture>
      {avifSrc && <source srcSet={srcSet || avifSrc} sizes={sizes} type="image/avif" />}
      {webpSrc && <source srcSet={srcSet || webpSrc} sizes={sizes} type="image/webp" />}
      <img
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
