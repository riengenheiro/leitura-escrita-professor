/**
 * Configuração do checkout em iframe (embed_light.php).
 * Usado pelo modal de checkout transparente no site.
 */
const EMBED_BASE = 'https://fm.doutoraescola.com.br/checkout/embed_light.php';

export const CHECKOUT_EMBED = {
  /** Origens permitidas para postMessage (deve bater com o backend) */
  allowedOrigin: 'https://fm.doutoraescola.com.br',
  /** URL de redirecionamento após sucesso (se o backend não enviar, usa esta) */
  defaultSuccessUrl: '/',
} as const;

/** URL do embed para o plano Básico (R$ 47) */
export const CHECKOUT_EMBED_BASIC = `${EMBED_BASE}?s=OdvIY`;
/** URL do embed para o plano Completo (R$ 119) */
export const CHECKOUT_EMBED_COMPLETO = `${EMBED_BASE}?s=0LuhT`;
