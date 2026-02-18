interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function OptimizedImage({ src, alt, width, height, className = '', priority = false, fetchPriority }: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={fetchPriority}
      className={className}
    />
  );
}
