/**
 * Configuração de preços para teste (A/B ou multivariado).
 *
 * Uma página por valor:
 *   /       = R$ 10 (principal)
 *   /v1     = R$ 17
 *   /v2     = R$ 27
 *   /v3     = R$ 37
 *   /v4     = R$ 47
 *
 * PRICE_BASIC é o valor padrão quando nenhuma prop price é passada (página principal).
 */
export const PRICE_OPTIONS = [10, 17, 27, 37, 47] as const;
export type PriceOption = (typeof PRICE_OPTIONS)[number];

/** Valor atual do plano básico (livro digital). Mude aqui para testar 10, 17, 27, 37 ou 47. */
export const PRICE_BASIC: number = 10;

/** Preço âncora (riscado) "de R$ 67". Só exibido quando o preço da página for menor (ex.: por apenas R$ 47). */
export const PRICE_ANCHOR = 67;

/** Diferença fixa do plano Avançado em relação ao Básico: Avançado = Básico + 19. */
export const ADVANCED_EXTRA = 19;

/** Formata valor para exibição: "10" ou "10,00" */
export function formatPrice(value: number, withCents = false): string {
  if (withCents) return value.toFixed(2).replace('.', ',');
  return String(value);
}

const CHECKOUT_BASE = 'https://fm.doutoraescola.com.br/checkout/?s=';

/** Links de checkout por preço do plano BÁSICO (R$ 10, 17, 27, 37, 47) → slug do ?s= */
const CHECKOUT_BASIC: Record<number, string> = {
  10: 'ZAZZe',
  17: 'AUDyA',
  27: '09TJh',
  37: 'lanTB',
  47: 'EhENl',
};

/** Links de checkout por preço do plano AVANÇADO (29, 36, 46, 56, 66) — indexado pelo básico da página */
const CHECKOUT_ADVANCED: Record<number, string> = {
  10: '6sa9j',
  17: 'Q9vRH',
  27: '7DCSf',
  37: 'AwNdS',
  47: '54E7Y',
};

/** URL do checkout: plano 'basic' ou 'advanced'. Usa o preço básico da página para escolher o link. */
export function getCheckoutUrl(basicPrice: number, plan: 'basic' | 'advanced'): string {
  const slug = plan === 'basic' ? CHECKOUT_BASIC[basicPrice] : CHECKOUT_ADVANCED[basicPrice];
  return slug ? `${CHECKOUT_BASE}${slug}` : `${CHECKOUT_BASE}${plan === 'basic' ? 'ZAZZe' : '6sa9j'}`;
}
