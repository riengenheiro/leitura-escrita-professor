import { CheckCircle, Star, CreditCard } from 'lucide-react'

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Texto */}
          <div className="space-y-6">
            <div className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              ⚡ 88% OFF! Apenas R$ 197 (ou 12x R$ 19,70)
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Reduza em <span className="text-primary-600">70%</span> o Tempo do Seu{' '}
              <span className="text-primary-600">Planejamento Anual</span> com o Método BNCC Aprovado
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              <strong>40+ Modelos Editáveis</strong> + Videoaulas + <strong>3 Bônus Exclusivos</strong> para criar planejamentos alinhados à BNCC em poucas horas{' '}
              <strong>(mesmo começando do zero)</strong>
            </p>

            {/* Benefícios rápidos */}
            <div className="space-y-3">
              {[
                '40+ Modelos em Word e PDF (editáveis!)',
                'Videoaulas completas para todas as etapas',
                'Economize até 10h por semana no preparo',
                '100% alinhado às diretrizes da BNCC',
                'Acesso vitalício + Garantia de 7 dias',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Preço */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-primary-200">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 line-through text-xl">De R$ 1.738,00</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    88% OFF
                  </span>
                </div>
                <div className="text-5xl font-black text-primary-600">Por apenas R$ 197</div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CreditCard className="w-5 h-5" />
                  <span className="font-medium text-lg">ou 12x de R$ 19,70 no cartão</span>
                </div>
                <div className="text-sm text-gray-500 italic">
                  = Menos de R$ 1 por dia para transformar seu planejamento!
                </div>
              </div>
            </div>

            {/* CTA Principal */}
            <button
              onClick={scrollToPricing}
              className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold text-xl py-5 px-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 animate-pulse-slow"
            >
              🎯 QUERO MEU ACESSO AGORA
            </button>

            {/* Trust badges */}
            <div className="flex flex-col items-center gap-2 text-sm text-gray-600 text-center">
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <span>✓ Garantia de 7 dias</span>
                <span>•</span>
                <span>✓ Acesso imediato</span>
                <span>•</span>
                <span>✓ Suporte incluído</span>
              </div>
            </div>

            {/* Prova Social */}
            <div className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-xl p-5 border border-accent-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-900">Planejamento Anual BNCC</div>
                  <div className="text-gray-700 font-medium">+2.000 professores aprovam</div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-sm text-gray-600">(847 avaliações)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem Hero - coloque hero.jpg ou hero.png na pasta public/ */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl p-8 shadow-2xl">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-4 border-primary-300">
                <img
                  src="/hero.jpg"
                  alt="Curso de Planejamento BNCC - Doutora Escola"
                  className="w-full h-full object-cover absolute inset-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.parentElement?.querySelector('.hero-fallback') as HTMLElement
                    if (fallback) fallback.classList.remove('hidden')
                  }}
                />
                <div className="hero-fallback hidden absolute inset-0 bg-white/90 rounded-2xl flex items-center justify-center border-4 border-dashed border-primary-300">
                  <div className="text-center p-6 text-gray-600">
                    <div className="text-5xl mb-3">📚</div>
                    <div className="font-bold text-primary-700">hero.jpg</div>
                    <div className="text-sm">na pasta public/</div>
                  </div>
                </div>
              </div>
              
              {/* Badges decorativos */}
              <div className="absolute -top-4 -right-4 bg-accent-400 text-white rounded-full p-4 shadow-xl animate-bounce-slow">
                <div className="text-center">
                  <div className="text-2xl font-black">88%</div>
                  <div className="text-xs font-bold">OFF</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-primary-600 text-white rounded-2xl p-4 shadow-xl">
                <div className="text-sm font-bold">✓ Acesso Vitalício</div>
                <div className="text-xs opacity-90">+ Garantia 7 dias</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
