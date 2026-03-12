/**
 * Configuração do checkout em iframe (embed).
 * Guia Completo dos Códigos Alfanuméricos da BNCC — R$ 10,00
 */
export const CHECKOUT_EMBED = {
  /** URL do checkout embed (backend) */
  url: 'https://fm.doutoraescola.com.br/checkout/embed_light.php?s=QO2kY',
  /** Origens permitidas para postMessage (deve bater com o backend) */
  allowedOrigin: 'https://fm.doutoraescola.com.br',
  /** URL de redirecionamento após sucesso (se o backend não enviar, usa esta) */
  defaultSuccessUrl: '/obrigado',
} as const;
