import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'de_exit_intent_shown'

export function DEExitIntent() {
  const [isVisible, setIsVisible] = useState(false)

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
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-pop-in"
        style={{ animation: 'popIn 0.3s ease-out' }}
      >
        <style>{`
          @keyframes popIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}</style>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
          Espera, professora!
        </h3>
        <p className="text-gray-600 text-lg mb-6">
          Seu exemplar por <span className="font-bold text-btn-primary">R$ 10</span> ainda está disponível.
        </p>
        <p className="text-gray-500 mb-6">
          Mais de 2.000 professoras já transformaram suas aulas. Não perca essa oportunidade!
        </p>
        <a
          href="https://fm.doutoraescola.com.br/checkout/?s=ZAZZe"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 bg-btn-primary hover:opacity-90 text-white text-center font-bold text-lg rounded-xl transition-colors"
        >
          Quero garantir por R$ 10
        </a>
        <button
          onClick={() => setIsVisible(false)}
          className="mt-4 w-full py-2 text-gray-500 hover:text-gray-700 text-sm"
        >
          Continuar navegando
        </button>
      </div>
    </div>
  )
}
