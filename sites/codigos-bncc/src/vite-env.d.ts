/// <reference types="vite/client" />

declare global {
  interface Window {
    fbq?: (action: string, ...args: unknown[]) => void;
  }
}

export {}
