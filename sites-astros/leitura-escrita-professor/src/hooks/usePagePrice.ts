import { useState, useEffect } from 'react'
import { PRICE_BASIC } from '../config/pricing'

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
