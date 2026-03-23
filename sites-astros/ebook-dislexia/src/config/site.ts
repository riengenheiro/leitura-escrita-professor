export const SITE_URL = 'https://dislexia.doutoraescola.com.br';

const EMBED_BASE = 'https://fm.doutoraescola.com.br/checkout/embed_light.php';

export const CHECKOUT_EMBED = `${EMBED_BASE}?s=dokg3`;
export const CHECKOUT_DIRECT = 'https://fm.doutoraescola.com.br/checkout/?s=dokg3';

export const CHECKOUT_CONFIG = {
  allowedOrigin: 'https://fm.doutoraescola.com.br',
  successUrl: '/obrigado/',
} as const;

export const FACEBOOK_PIXEL_ID = '903214411087074';
