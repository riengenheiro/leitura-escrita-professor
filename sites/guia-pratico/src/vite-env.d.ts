/// <reference types="vite/client" />

/** Facebook Pixel (carregado via script externo) */
interface Window {
  fbq?: (...args: unknown[]) => void;
}
