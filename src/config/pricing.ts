export const PRICE: number = 57;
export const PRICE_ANCHOR = 97;

export function formatPrice(value: number, withCents = false): string {
  if (withCents) return value.toFixed(2).replace('.', ',');
  return String(value);
}

const CHECKOUT_BASE = 'https://fm.doutoraescola.com.br/checkout/?s=';
const CHECKOUT_SLUG = 'WHVo7';

export function getCheckoutUrl(): string {
  return `${CHECKOUT_BASE}${CHECKOUT_SLUG}`;
}
