export const PRICE_BASIC: number = 57;
export const PRICE_ANCHOR = 97;
export const ADVANCED_EXTRA = 40;

export function formatPrice(value: number, withCents = false): string {
  if (withCents) return value.toFixed(2).replace('.', ',');
  return String(value);
}

const CHECKOUT_BASE = 'https://fm.doutoraescola.com.br/checkout/?s=';

const CHECKOUT_BASIC: Record<number, string> = {
  57: 'WHVo7',
};

const CHECKOUT_ADVANCED: Record<number, string> = {
  57: 'WHVo7',
};

export function getCheckoutUrl(basicPrice: number, plan: 'basic' | 'advanced'): string {
  const slug = plan === 'basic' ? CHECKOUT_BASIC[basicPrice] : CHECKOUT_ADVANCED[basicPrice];
  return slug ? `${CHECKOUT_BASE}${slug}` : `${CHECKOUT_BASE}WHVo7`;
}
