import { useEffect, useState } from 'react'
import { appendLandingParamsToUrl } from '@shared/affiliateCheckoutUrl'
import { Check, X, FileText, Sparkles, Shield, Zap } from 'lucide-react'

const URL_BASICO = 'https://fm.doutoraescola.com.br/checkout/?s=QO2kY'
const URL_COMPLETO =
  'https://pay.voompcreators.com.br/8534/offer/KShiZL/?b_id_1=2497&b_offer_1=7AYnyF&b_id_2=1503&b_offer_2=NzZHqM&b_id_3=2058&b_offer_3=vtCUUI&ch_id=1806'

const basicoFeatures = [
  { text: 'Guia dos Códigos Alfanuméricos da BNCC', included: true },
  { text: 'Aula: O que é a BNCC?', included: false },
  { text: 'Aula: A Organização da BNCC', included: false },
  { text: 'Aula: 10 Competências Gerais', included: false },
  { text: 'Aula: Competências e Habilidades', included: false },
  { text: 'Aula: Base Comum e Diversificada', included: false },
]

const completoFeatures = [
  'Guia COMPLETO dos Códigos Alfanuméricos da BNCC',
  '✨ Aula: O que é a BNCC?',
  '✨ Aula: A Organização da BNCC',
  '✨ Aula: 10 Competências Gerais',
  '✨ Aula: Competências e Habilidades',
  '✨ Aula: Base Comum e Diversificada',
]

export function CBPricing() {
  const [urlBasico, setUrlBasico] = useState(URL_BASICO)
  const [urlCompleto, setUrlCompleto] = useState(URL_COMPLETO)

  useEffect(() => {
    setUrlBasico(appendLandingParamsToUrl(URL_BASICO))
    setUrlCompleto(appendLandingParamsToUrl(URL_COMPLETO))
  }, [])

  return (
    <section id="opcoes" className="bg-gradient-to-b from-gray-100 to-white text-black py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
            Escolha sua opção:
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* BÁSICO - R$ 10 */}
          <div className="rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200 bg-white opacity-90">
            <div className="bg-gray-500 text-white py-4 px-6">
              <p className="font-bold text-lg md:text-xl text-center uppercase">Básico</p>
            </div>
            
            <div className="p-6">
              <div className="text-center mb-5">
                <div className="flex items-baseline justify-center">
                  <span className="text-gray-700 text-5xl font-black">R$ 10</span>
                  <span className="text-xl text-gray-400">,00</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">Apenas o guia</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {basicoFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {item.included ? (
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" strokeWidth={3} />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" strokeWidth={3} />
                    )}
                    <span className={`text-sm ${item.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <a
                href={urlBasico}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-gray-500 hover:bg-gray-600 text-white text-lg font-bold rounded-xl transition-all"
              >
                <FileText className="w-5 h-5" />
                Quero o Básico
              </a>
            </div>
          </div>

          {/* COMPLETO - R$ 29 */}
          <div className="rounded-2xl shadow-2xl overflow-hidden border-4 border-green-500 bg-white relative transform md:scale-105">
            <div className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-5 py-1.5 rounded-full font-extrabold text-sm uppercase shadow-lg flex items-center gap-2 animate-pulse">
                <Sparkles className="w-4 h-4" />
                Mais Vendido
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 pt-6">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-yellow-300" />
                <p className="font-extrabold text-lg md:text-xl text-center uppercase">Completo</p>
                <Zap className="w-5 h-5 text-yellow-300" />
              </div>
              <p className="text-center text-xs opacity-90 mt-1">🏆 Escolha de 87% dos professores</p>
            </div>
            
            <div className="p-6 bg-gradient-to-b from-green-50 to-white">
              <div className="text-center mb-5">
                <p className="text-red-500 line-through text-base font-bold">de R$ 67,00</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-green-600 text-5xl md:text-6xl font-black">R$ 29</span>
                  <span className="text-xl text-gray-400">,00</span>
                </div>
                <p className="text-green-600 text-sm font-bold mt-1">Guia + 5 Aulas Bônus</p>
              </div>
              
              <div className="bg-white border-2 border-green-200 rounded-xl p-4 mb-5">
                <ul className="space-y-2.5">
                  {completoFeatures.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-sm font-medium text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 mb-5 text-center">
                <p className="text-sm font-bold text-yellow-800">
                  💡 Por apenas +R$ 19 você leva 5 aulas extras!
                </p>
              </div>
              
              <a
                href={urlCompleto}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl font-extrabold rounded-xl transition-all transform hover:scale-105 shadow-xl"
              >
                <FileText className="w-6 h-6" />
                QUERO O COMPLETO
              </a>
              
              <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Shield className="w-3 h-3 text-green-500" />
                  Compra segura
                </span>
                <span>⚡ Acesso imediato</span>
                <span>✅ Garantia 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
