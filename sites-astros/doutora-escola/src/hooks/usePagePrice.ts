import { useState, useEffect } from 'react'
import { PRICE_BASIC } from '../config/pricing'

/**
 * Retorna o preço da página: prop > data-page-price no body (fallback para /v1, /v2 quando o servidor entrega index.html) > R$ 10.
 */
export function usePagePrice(priceFromProp: number | undefined): number {
  const [fromUrl, setFromUrl] = useState<number | null>(null)

  useEffect(() => {
    if (priceFromProp !== undefined) return
    const raw = document.body?.dataset?.pagePrice
    if (raw != null) setFromUrl(Number(raw))
  }, [priceFromProp])

  if (priceFromProp !== undefined) return priceFromProp
  if (fromUrl != null && !Number.isNaN(fromUrl)) return fromUrl
  return PRICE_BASIC
}
