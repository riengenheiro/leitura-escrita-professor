import { useEffect, useState } from 'react'
import { appendLandingParamsToUrl } from '@shared/affiliateCheckoutUrl'
import { FileText } from 'lucide-react'

const URL_BASICO = 'https://fm.doutoraescola.com.br/checkout/?s=QO2kY'
const URL_COMPLETO =
  'https://pay.voompcreators.com.br/8534/offer/KShiZL/?b_id_1=2497&b_offer_1=7AYnyF&b_id_2=1503&b_offer_2=NzZHqM&b_id_3=2058&b_offer_3=vtCUUI&ch_id=1806'

export function CBFinalCTA() {
  const [urlBasico, setUrlBasico] = useState(URL_BASICO)
  const [urlCompleto, setUrlCompleto] = useState(URL_COMPLETO)

  useEffect(() => {
    setUrlBasico(appendLandingParamsToUrl(URL_BASICO))
    setUrlCompleto(appendLandingParamsToUrl(URL_COMPLETO))
  }, [])

  return (
    <section className="bg-gradient-to-b from-red-600 to-red-700 text-white py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4">Não perca essa oportunidade!</h2>
        <p className="text-lg md:text-xl mb-6 opacity-95">
          Domine os códigos da BNCC de uma vez por todas
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={urlBasico}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 text-white text-lg font-bold rounded-xl transition-all border-2 border-white/40"
          >
            Básico R$ 10
          </a>
          <a
            href={urlCompleto}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black text-xl font-extrabold rounded-xl transition-all transform hover:scale-105 shadow-2xl"
          >
            <FileText className="w-5 h-5" />
            COMPLETO R$ 29
          </a>
        </div>
        
        <p className="text-sm mt-5 opacity-80">
          ⚡ Acesso imediato • 🔒 Compra segura • ✅ Garantia 7 dias
        </p>
      </div>
    </section>
  )
}
