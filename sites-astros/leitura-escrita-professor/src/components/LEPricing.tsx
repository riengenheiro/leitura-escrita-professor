import { useEffect, useState } from 'react'
import { appendLandingParamsToUrl } from '../lib/affiliateCheckoutUrl'
import { Check, Trophy, FileText, Zap } from 'lucide-react'
import { PRICE, PRICE_ANCHOR, formatPrice, getCheckoutUrl } from '../config/pricing'

const planoFeatures = [
  'Aula ao vivo com a Dra. Guaciara Fornaciari sobre leitura e escrita',
  { text: '5 modelos de Ficha de Observação Individual', bonus: true },
  { text: '5 modelos de Questionário de Sondagem Inicial', bonus: true, trophy: true },
  { text: '5 modelos de PAEE - Resolução SEDUC Nº 129/2025', bonus: true },
  { text: '5 modelos de Guia de Adaptações Curriculares', bonus: true },
  { text: '5 modelos de Estudo de Caso - Resolução SEDUC 129/2025', bonus: true },
  { text: '5 modelos de Relatório de Desenvolvimento Individual', bonus: true },
  { text: '5 modelos de Relatório de Encaminhamento para Especialista', bonus: true },
  { text: '5 modelos de Avaliação Pedagógica Inicial - API', bonus: true },
  { text: '✨ 40 modelos prontos para adaptar e usar', special: true },
]

export function LEPricing() {
  const parcel3x = (PRICE / 3).toFixed(2).replace('.', ',')
  const [checkoutUrl, setCheckoutUrl] = useState(() => getCheckoutUrl())

  useEffect(() => {
    setCheckoutUrl(appendLandingParamsToUrl(getCheckoutUrl()))
  }, [])

  return (
    <section
      id="opcoes"
      className="text-black py-16 md:py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F2F2F2 0%, #ffffff 50%, rgba(28, 140, 77, 0.05) 100%)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: '#1C8C4D' }} />
        <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full opacity-12 blur-3xl" style={{ background: '#F2C849' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: '#1D8FF2' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <span
          className="inline-block w-full text-center px-4 py-2 rounded-full text-sm font-bold mb-6 text-white shadow-md"
          style={{ background: 'linear-gradient(135deg, #1C8C4D, #167d44)' }}
        >
          Sua hora é agora!
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-gray-900">
          Garanta sua aula + 40 modelos agora
        </h2>
        <p className="text-center text-xl text-gray-700 mb-12">
          Mais de 3.300 professoras já escolheram. Venha você também!
        </p>

        {/* Plano Único */}
        <div className="rounded-3xl shadow-2xl overflow-hidden border-4 bg-white relative" style={{ borderColor: '#1C8C4D' }}>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            <div className="px-6 py-2 rounded-full font-extrabold text-sm uppercase shadow-lg flex items-center gap-2 animate-pulse text-white" style={{ background: 'linear-gradient(135deg, #F2C849, #F28705)' }}>
              <Zap className="w-4 h-4" />
              Oferta por tempo limitado
            </div>
          </div>

          <div className="text-white py-6 px-6 pt-8" style={{ background: 'linear-gradient(135deg, #1C8C4D 0%, #167d44 100%)' }}>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-6 h-6" style={{ color: '#F2C849' }} />
              <p className="font-extrabold text-2xl md:text-3xl text-center uppercase">Aula + 40 Modelos</p>
              <Zap className="w-6 h-6" style={{ color: '#F2C849' }} />
            </div>
            <p className="text-center text-sm text-white/95">🏆 Tudo que você precisa em um só lugar</p>
          </div>

          <div className="p-8 bg-gradient-to-b from-[#F2F2F2] to-white">
            <div className="text-center mb-6">
              <p className="text-red-500 line-through text-2xl font-bold mb-1">de: R$ {formatPrice(PRICE_ANCHOR, true)}</p>

              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="text-center">
                  <p className="text-sm text-gray-500 uppercase font-semibold">Apenas</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-6xl md:text-7xl font-black" style={{ color: '#1C8C4D' }}>R$ {PRICE}</span>
                    <span className="text-2xl text-gray-500">,00</span>
                  </div>
                  <p className="text-sm text-gray-600 font-medium mt-1">ou 3x de R$ {parcel3x}</p>
                </div>
              </div>

              <div className="rounded-xl p-3 mb-4 border-2" style={{ background: 'rgba(242, 200, 73, 0.2)', borderColor: '#F2C849' }}>
                <p className="text-base font-bold text-gray-800">
                  💰 Cada modelo sai por menos de R$ 1,50!
                </p>
                <p className="text-sm text-gray-700">Valor real: R$ {PRICE_ANCHOR},00</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-6 border-2" style={{ borderColor: 'rgba(28, 140, 77, 0.4)' }}>
              <p className="font-bold text-center text-lg mb-4 uppercase" style={{ color: '#1C8C4D' }}>
                ✨ Você recebe tudo isso:
              </p>
              <ul className="space-y-4">
                {planoFeatures.map((item, i) => {
                  const isObject = typeof item === 'object'
                  const text = isObject ? (item as any).text : item
                  const isBonus = isObject && (item as any).bonus
                  const isTrophy = isObject && (item as any).trophy
                  const isSpecial = isObject && (item as any).special

                  return (
                    <li key={i} className={`flex items-start gap-3 ${isBonus ? 'rounded-lg border -mx-2 px-2 py-2' : ''}`} style={isBonus ? { background: 'rgba(242, 200, 73, 0.15)', borderColor: 'rgba(242, 200, 73, 0.5)' } : undefined}>
                      {isTrophy ? (
                        <Trophy className="w-7 h-7 flex-shrink-0 mt-0.5" fill="#F2C849" />
                      ) : (
                        <Check className="w-7 h-7 flex-shrink-0 mt-0.5" strokeWidth={3} style={{ color: '#1C8C4D' }} />
                      )}
                      <span className={`text-lg ${isBonus ? 'font-bold text-gray-900' : isSpecial ? 'font-semibold text-btn-primary' : 'font-medium'}`}>
                        {text}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="mb-6 p-4 rounded-xl border-2" style={{ background: 'rgba(28, 140, 77, 0.08)', borderColor: 'rgba(28, 140, 77, 0.3)' }}>
              <p className="text-sm italic text-gray-700">&ldquo;Os modelos já me salvaram várias vezes na hora de documentar observações!&rdquo;</p>
              <p className="text-sm font-bold mt-1" style={{ color: '#1C8C4D' }}>— Maria F., professora em SP</p>
            </div>
            <div className="mb-6 text-center">
              <p className="text-sm text-gray-500 mb-2">⚡ Acesso liberado na hora via PIX</p>
              <p className="text-xs text-gray-400">🔒 Compra 100% segura e protegida</p>
            </div>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-6 text-white text-2xl font-extrabold rounded-2xl transition-all transform hover:scale-[1.02] hover:shadow-2xl text-center shadow-xl"
              style={{ background: 'linear-gradient(135deg, #1C8C4D 0%, #167d44 100%)', boxShadow: '0 4px 24px rgba(28, 140, 77, 0.4)' }}
            >
              <FileText className="w-7 h-7" />
              <span>QUERO MEUS 40 MODELOS AGORA!</span>
            </a>

            <p className="text-center text-sm text-gray-500 mt-4">⏰ Oferta por tempo limitado — Só para as 100 primeiras professoras</p>
          </div>
        </div>
      </div>
    </section>
  )
}
