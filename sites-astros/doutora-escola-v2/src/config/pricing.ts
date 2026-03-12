/**
 * Preços V2.0: Básico R$ 47 | Completo R$ 119
 * Site: https://colecaocampoexperiencias.doutoraescola.com.br/
 */
export const SITE_URL = 'https://colecaocampoexperiencias.doutoraescola.com.br';
export const PRICE_BASIC = 47;
export const PRICE_ANCHOR = 147;
export const PRICE_COMPLETO = 119;
export const PRICE_COMPLETO_ANCHOR = 297;

export function formatPrice(value: number, withCents = false): string {
  if (withCents) return value.toFixed(2).replace('.', ',');
  return String(value);
}

/** Checkout em embed (modal) — embed_light.php */
const CHECKOUT_EMBED_BASE = 'https://fm.doutoraescola.com.br/checkout/embed_light.php?s=';
/** Checkout normal (nova aba / fallback) */
const CHECKOUT_DIRECT_BASE = 'https://fm.doutoraescola.com.br/checkout/?s=';

/** Plano básico R$ 47 - Ideias para Trabalhar os Campos de Experiências V2 */
export const CHECKOUT_BASIC = CHECKOUT_EMBED_BASE + 'OdvIY';
/** URL normal (nova aba / fallback) para o plano básico */
export const CHECKOUT_BASIC_DIRECT = CHECKOUT_DIRECT_BASE + 'OdvIY';
/** Plano completo R$ 119 - Kit Completo com Bônus */
export const CHECKOUT_COMPLETO = CHECKOUT_EMBED_BASE + '0LuhT';
/** URL normal (nova aba / fallback) para o plano completo */
export const CHECKOUT_COMPLETO_DIRECT = CHECKOUT_DIRECT_BASE + '0LuhT';
