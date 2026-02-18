import { Gift, ArrowRight, Users, Clock } from 'lucide-react'

const VIP_LINK = 'https://doutoraescola.com.br/vip'

export function RRFinalCTA() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 md:py-28 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full font-semibold mb-8 border border-white/20">
          <Gift className="w-5 h-5" />
          <span className="text-base uppercase tracking-wide">Última Chance de Receber Grátis</span>
        </div>

        {/* Título principal */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
          Não Perca Esta Oportunidade!
        </h2>

        {/* Subtítulo */}
        <p className="text-2xl md:text-3xl mb-6 opacity-95 font-semibold">
          Pare de perder tempo procurando o que escrever nos relatórios
        </p>
        
        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
          Entre agora no nosso <strong className="text-green-300">Grupo VIP</strong> e receba <strong className="text-green-300">GRATUITAMENTE</strong> o roteiro completo que já ajudou mais de 4.000 professoras!
        </p>

        {/* Benefícios rápidos */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-lg md:text-xl">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
              <span className="text-green-900 font-bold text-sm">✓</span>
            </div>
            <span>100% Gratuito</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
              <span className="text-green-900 font-bold text-sm">✓</span>
            </div>
            <span>Acesso Imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
              <span className="text-green-900 font-bold text-sm">✓</span>
            </div>
            <span>Alinhado à BNCC</span>
          </div>
        </div>

        {/* CTA Principal - Aumentado e mais chamativo */}
        <div className="mb-10">
          <a
            href={VIP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-14 py-7 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black text-2xl md:text-3xl font-black rounded-2xl transition-all transform hover:scale-105 shadow-2xl uppercase group"
          >
            <Gift className="w-10 h-10 group-hover:rotate-12 transition-transform" />
            ENTRAR NO GRUPO VIP AGORA
            <ArrowRight className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        {/* Texto de segurança */}
        <p className="text-base md:text-lg opacity-80 mb-10">
          🔒 Acesso 100% Seguro • Sem Custos • Material Exclusivo
        </p>

        {/* Prova social final */}
        <div className="border-t border-white/20 pt-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <Users className="w-12 h-12 text-green-300" />
              <div className="text-left">
                <p className="text-3xl font-black">4.000+</p>
                <p className="text-sm opacity-80">Professoras no Grupo</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/20" />
            <div className="flex items-center gap-3">
              <Clock className="w-12 h-12 text-yellow-300" />
              <div className="text-left">
                <p className="text-3xl font-black">24/7</p>
                <p className="text-sm opacity-80">Acesso ao Material</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/20" />
            <div className="flex items-center gap-3">
              <Gift className="w-12 h-12 text-green-300" />
              <div className="text-left">
                <p className="text-3xl font-black">R$ 0,00</p>
                <p className="text-sm opacity-80">Totalmente Grátis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
