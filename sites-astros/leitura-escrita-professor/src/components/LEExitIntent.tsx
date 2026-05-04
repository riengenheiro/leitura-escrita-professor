import { useState, useEffect, useCallback } from 'react'
import { appendLandingParamsToUrl } from '../lib/affiliateCheckoutUrl'
import { PRICE, getCheckoutUrl } from '../config/pricing'

const STORAGE_KEY = 'le_exit_intent_shown'

export function LEExitIntent() {
  const pagePrice = PRICE
  const [isVisible, setIsVisible] = useState(false)
  const [checkoutUrl, setCheckoutUrl] = useState(() => getCheckoutUrl())

  useEffect(() => {
    setCheckoutUrl(appendLandingParamsToUrl(getCheckoutUrl()))
  }, [])

  const showPopup = useCallback(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return
    sessionStorage.setItem(STORAGE_KEY, '1')
    setIsVisible(true)
  }, [])

  useEffect(() => {
    let lastY = 0
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 15 && lastY > 80) showPopup()
      lastY = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [showPopup])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative" style={{ animation: 'popIn 0.3s ease-out' }}>
        <style>{`@keyframes popIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }`}</style>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Espera, professora!</h3>
        <p className="text-gray-600 text-lg mb-6">
          Sua aula + 40 modelos por <span className="font-bold text-btn-primary">R$ {pagePrice}</span> ainda está disponível.
        </p>
        <p className="text-gray-500 mb-6">
          Mais de 3.300 professoras já usam os materiais da Dra. Guaciara. Não perca essa oportunidade!
        </p>
        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 bg-btn-primary hover:opacity-90 text-white text-center font-bold text-lg rounded-xl transition-colors"
        >
          Quero garantir meus 40 modelos por R$ 57
        </a>
        <button onClick={() => setIsVisible(false)} className="mt-4 w-full py-2 text-gray-500 hover:text-gray-700 text-sm">
          Continuar navegando
        </button>
      </div>
    </div>
  )
}
