import { Sparkles, Clock, Zap, ArrowRight } from 'lucide-react'

export function MainCTA() {
  return (
    <section className="mb-6">
      {/* Badge de destaque */}
      <div className="flex justify-center mb-3">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold rounded-full shadow-lg animate-bounce-slow">
          <Sparkles className="w-3.5 h-3.5" />
          MAIS ACESSADO
        </span>
      </div>

      {/* Card principal */}
      <a
        href="https://doutoraescola.com.br"
        className="group block relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 p-1 glow-green link-card"
      >
        {/* Efeito de shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" 
             style={{ backgroundSize: '200% 100%' }} />
        
        <div className="relative bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600 rounded-xl p-5">
          {/* Ícone */}
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-extrabold text-white leading-tight mb-1 group-hover:text-yellow-200 transition-colors">
                Fábrica Mágica
              </h2>
              <p className="text-white/90 text-sm font-medium leading-snug">
                Crie PDI, PEI, Avaliações, Relatórios e Planejamentos
              </p>
            </div>

            <div className="flex-shrink-0 self-center">
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Benefício principal */}
          <div className="mt-4 flex items-center justify-center gap-2 bg-white/15 backdrop-blur rounded-lg py-2.5 px-4">
            <Clock className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-bold text-sm">
              Em menos de 3 minutos!
            </span>
            <Zap className="w-5 h-5 text-yellow-300" />
          </div>

          {/* Indicador de ação */}
          <div className="mt-3 text-center">
            <span className="inline-flex items-center gap-2 text-white/90 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
              </span>
              Clique para acessar agora
            </span>
          </div>
        </div>
      </a>
    </section>
  )
}
