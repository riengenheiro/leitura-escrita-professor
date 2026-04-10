/**
 * Checkout embutido (embed_light.php) — mesmo padrão do doutora-escola-v2.
 */
const EMBED_BASE = 'https://fm.doutoraescola.com.br/checkout/embed_light.php';

export const CHECKOUT_EMBED = {
  allowedOrigin: 'https://fm.doutoraescola.com.br',
  defaultSuccessUrl: '/',
} as const;

/** Guia Prático de Dificuldades Escolares — iframe do modal */
export const CHECKOUT_EMBED_URL = `${EMBED_BASE}?s=gDtlW`;
