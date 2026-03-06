/**
 * Configuração do checkout em iframe (embed).
 * Usado na página /checkout para carregar o checkout PHP em embed.
 */
export const CHECKOUT_EMBED = {
  /** URL do checkout embed (backend PHP) */
  url: 'https://vivasuamissao.top/fabricaderelatorios//checkout/embed_light.php?s=xwQOP',
  /** Origens permitidas para postMessage (deve bater com o backend) */
  allowedOrigin: 'https://vivasuamissao.top',
  /** URL de redirecionamento após sucesso (se o backend não enviar, usa esta) */
  defaultSuccessUrl: '/obrigado',
} as const;
