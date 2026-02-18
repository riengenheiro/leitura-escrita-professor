import { useState, useEffect, useRef, type ImgHTMLAttributes } from 'react';

type OptimizedImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  src: string;
  alt: string;
  srcSet?: string;
  sizes?: string;
  webpSrc?: string;
  avifSrc?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function OptimizedImage(props: OptimizedImageProps) {
  const {
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
    ...rest
  } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!priority) return;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = avifSrc || webpSrc || src;
    if (srcSet) link.setAttribute('imagesrcset', srcSet);
    if (sizes) link.setAttribute('imagesizes', sizes);
    document.head.appendChild(link);
    return () => { if (document.head.contains(link)) document.head.removeChild(link); };
  }, [priority, src, avifSrc, webpSrc, srcSet, sizes]);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;
    if (img.complete) setIsLoaded(true);
  }, [src]);

  return (
    <picture>
      {avifSrc && <source srcSet={srcSet || avifSrc} sizes={sizes} type="image/avif" />}
      {webpSrc && <source srcSet={srcSet || webpSrc} sizes={sizes} type="image/webp" />}
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
        {...rest}
      />
    </picture>
  );
}
