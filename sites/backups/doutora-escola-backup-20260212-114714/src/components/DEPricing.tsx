import { Check, Trophy, FileText, Sparkles, Zap } from 'lucide-react'

const profissionalFeatures = [
  'Livro Digital - Ideias para trabalhar os Campos de Experiência',
]

const avancadoFeatures = [
  'Livro Digital - Ideias para trabalhar os Campos de Experiência',
  { text: '🎁 BÔNUS #1: Aula - Até quando é normal trocar P/B, T/D, K/G, F/V, X/J, S/Z', bonus: true },
  { text: '🎁 BÔNUS #2: Aula - Escrita Espelhada: Um motivo que ninguém te contou', bonus: true, trophy: true },
  { text: '🎁 BÔNUS #3: Ideias para o seu Projeto de Leitura', bonus: true },
  { text: '✨ Atualizações VITALÍCIAS do conteúdo', special: true },
  { text: '✨ Acesso VITALÍCIO na área de membros', special: true },
]

export function DEPricing() {
  return (
    <section id="opcoes" className="bg-gradient-to-b from-gray-100 to-white text-black py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Escolha a melhor opção para você
        </h2>
        <p className="text-center text-xl text-gray-600 mb-12">
          Mais de 2.000 professoras já escolheram. Qual será a sua?
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Plano Básico */}
          <div className="rounded-3xl shadow-lg overflow-hidden border-2 border-gray-200 bg-white transform transition-all hover:scale-[1.02]">
            <div className="bg-gray-700 text-white py-5 px-6">
              <p className="font-bold text-xl md:text-2xl text-center uppercase">Básico</p>
            </div>
            <div className="p-8">
              <p className="text-gray-500 text-lg mb-2">Plano Básico</p>
              <p className="text-red-500 line-through text-lg">de: R$ 47,00</p>
              <div className="flex items-baseline gap-2 mb-8">
                <p className="text-green-600 text-5xl md:text-6xl font-extrabold">R$ 10</p>
                <span className="text-2xl text-gray-500">,00</span>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-600 text-center">✓ Apenas o essencial para começar</p>
              </div>
              
              <ul className="space-y-4 mb-10 min-h-[120px]">
                {profissionalFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={3} />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://fm.doutoraescola.com.br/checkout/?s=ZAZZe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-5 bg-gray-600 hover:bg-gray-700 text-white text-xl font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
              >
                <FileText className="w-6 h-6" />
                Quero o Básico
              </a>
            </div>
          </div>

          {/* Plano Avançado - DESTAQUE */}
          <div className="rounded-3xl shadow-2xl overflow-hidden border-4 border-green-500 bg-white relative transform md:scale-110 transition-all hover:scale-[1.12]">
            {/* Badges superiores */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full font-extrabold text-sm uppercase shadow-lg flex items-center gap-2 animate-pulse">
                <Sparkles className="w-4 h-4" />
                Mais Vendido
              </div>
            </div>
            
            <div className="absolute -top-3 -right-3 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm rotate-12 shadow-xl">
              ECONOMIZE R$ 268
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-6 px-6 pt-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-6 h-6 text-yellow-300" />
                <p className="font-extrabold text-2xl md:text-3xl text-center uppercase">Avançado</p>
                <Zap className="w-6 h-6 text-yellow-300" />
              </div>
              <p className="text-center text-sm opacity-90">🏆 Recomendado por professoras</p>
            </div>
            
            <div className="p-8 bg-gradient-to-b from-green-50 to-white">
              <div className="text-center mb-6">
                <p className="text-gray-600 text-lg mb-2 font-semibold">Plano Completo com BÔNUS</p>
                <p className="text-red-500 line-through text-2xl font-bold mb-1">de: R$ 297,00</p>
                
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 uppercase font-semibold">Apenas</p>
                    <div className="flex items-baseline">
                      <span className="text-green-600 text-6xl md:text-7xl font-black">R$ 29</span>
                      <span className="text-2xl text-gray-500">,00</span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium mt-1">ou 3x de R$ 9,67</p>
                  </div>
                </div>
                
                <div className="bg-yellow-100 border-2 border-yellow-400 rounded-xl p-3 mb-4">
                  <p className="text-base font-bold text-yellow-800">
                    💰 Cada item sairia por menos de R$ 5,00!
                  </p>
                  <p className="text-sm text-yellow-700">Valor real: R$ 297,00</p>
                </div>
              </div>
              
              <div className="bg-white border-2 border-green-200 rounded-2xl p-6 mb-6">
                <p className="font-bold text-center text-lg mb-4 text-green-700 uppercase">
                  ✨ Você recebe tudo isso:
                </p>
                <ul className="space-y-4">
                  {avancadoFeatures.map((item, i) => {
                    const isObject = typeof item === 'object'
                    const text = isObject ? (item as any).text : item
                    const isBonus = isObject && (item as any).bonus
                    const isTrophy = isObject && (item as any).trophy
                    const isSpecial = isObject && (item as any).special
                    
                    return (
                      <li key={i} className={`flex items-start gap-3 ${isBonus ? 'bg-yellow-50 -mx-2 px-2 py-2 rounded-lg border border-yellow-200' : ''}`}>
                        {isTrophy ? (
                          <Trophy className="w-7 h-7 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" />
                        ) : (
                          <Check className="w-7 h-7 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={3} />
                        )}
                        <span className={`text-lg ${isBonus ? 'font-bold text-gray-900' : isSpecial ? 'font-semibold text-green-700' : 'font-medium'}`}>
                          {text}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
              
              <div className="mb-6 text-center">
                <p className="text-sm text-gray-500 mb-2">⚡ Acesso liberado na hora via PIX</p>
                <p className="text-xs text-gray-400">🔒 Compra 100% segura e protegida</p>
              </div>
              
              <a
                href="https://fm.doutoraescola.com.br/checkout/?s=6sa9j"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-2xl font-extrabold rounded-2xl transition-all transform hover:scale-105 shadow-2xl text-center"
              >
                <FileText className="w-7 h-7" />
                <span className="text-center">QUERO O COMPLETO AGORA!</span>
              </a>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                ⏰ Oferta por tempo limitado
              </p>
            </div>
          </div>
        </div>
        
        {/* Comparativo */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center border-2 border-green-200">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">🤔 Qual a diferença?</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <p className="font-bold text-xl mb-2 text-gray-700">Plano de R$ 10</p>
              <p className="text-gray-600">Apenas o livro básico</p>
              <p className="text-4xl font-bold text-gray-400 mt-2">1</p>
              <p className="text-sm text-gray-500">produto</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-6 shadow-lg border-2 border-green-400">
              <p className="font-bold text-xl mb-2 text-green-700">Plano de R$ 29</p>
              <p className="text-green-600 font-semibold">Livro + 5 Bônus Exclusivos</p>
              <p className="text-4xl font-bold text-green-600 mt-2">6</p>
              <p className="text-sm text-green-600 font-medium">produtos completos</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 mt-6 font-medium">
            💡 Por apenas <span className="text-green-600 font-bold text-xl">R$ 19 a mais</span>, você leva <span className="font-bold">5x mais conteúdo!</span>
          </p>
        </div>
      </div>
    </section>
  )
}
