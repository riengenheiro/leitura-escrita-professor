/**
 * Repassa da URL atual da landing para o checkout apenas parâmetros de afiliado/marketing.
 * Não copia `s` (slug do produto no fm) nem outros parâmetros arbitrários.
 */
export const LANDING_PARAMS_FOR_CHECKOUT = [
  'aff',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'src',
  'ref',
] as const;

function isAllowedKey(key: string): boolean {
  return (LANDING_PARAMS_FOR_CHECKOUT as readonly string[]).includes(key);
}

/**
 * Anexa à URL de destino os parâmetros permitidos presentes em `window.location`.
 * Fora do browser ou sem query na landing, devolve `targetUrl` inalterada.
 */
export function appendLandingParamsToUrl(targetUrl: string): string {
  if (typeof window === 'undefined' || !targetUrl) return targetUrl;

  let landingParams: URLSearchParams;
  try {
    landingParams = new URL(window.location.href).searchParams;
  } catch {
    return targetUrl;
  }

  let out: URL;
  try {
    out = new URL(targetUrl, window.location.origin);
  } catch {
    return targetUrl;
  }

  let changed = false;
  landingParams.forEach((value, key) => {
    if (!isAllowedKey(key)) return;
    if (!out.searchParams.has(key)) {
      out.searchParams.set(key, value);
      changed = true;
    }
  });

  return changed ? out.href : targetUrl;
}
