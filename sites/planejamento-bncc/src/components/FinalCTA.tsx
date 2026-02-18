import { Clock, Zap, Shield } from 'lucide-react'

const FinalCTA = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold mb-6 animate-pulse">
                <Clock className="w-5 h-5" />
                <span>⏰ Última Chance!</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black mb-4">
                Não perca essa oportunidade única de transformar seu planejamento anual
              </h2>

              <p className="text-xl md:text-2xl mb-8 opacity-95">
                🚨 OFERTA EXPIRA EM BREVE!
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border-2 border-white/20">
                <p className="text-lg mb-2">
                  Depois que o timer zerar, o preço volta para{' '}
                  <strong className="text-accent-300 text-2xl">R$ 1.738,00</strong>
                </p>
                <p className="text-base opacity-90">
                  Não perca a chance de economizar <strong>R$ 1.541,00</strong> hoje!
                </p>
              </div>

              <button
                onClick={scrollToPricing}
                className="w-full md:w-auto bg-white text-red-600 hover:bg-gray-100 font-black text-xl md:text-2xl py-6 px-12 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center gap-3"
              >
                <Zap className="w-6 h-6" />
                GARANTIR ACESSO POR R$ 197 (12x R$ 19,70)
              </button>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm opacity-95">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span>Compra 100% segura</span>
                </div>
                <span>•</span>
                <span>Acesso imediato</span>
                <span>•</span>
                <span>Garantia de 7 dias</span>
              </div>
            </div>

            {/* Urgency strip */}
            <div className="bg-accent-500 text-white py-4 px-8 text-center font-bold text-lg">
              ⚡ Vagas Limitadas - Garanta seu acesso agora antes que acabe!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
