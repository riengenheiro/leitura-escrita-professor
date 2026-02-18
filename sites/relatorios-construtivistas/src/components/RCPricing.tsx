import { Check, Trophy, FileText, Sparkles, Zap } from 'lucide-react'

const profissionalFeatures = [
  'Livro Digital - Relatórios Construtivistas para Alunos com TEA',
]

const avancadoFeatures = [
  'Livro Digital - Relatórios Construtivistas para Alunos com TEA',
  { text: '✅ Ebook de Sondagem Escolar', bonus: true },
  { text: '🏆 Ebook Introdução ao Autismo', bonus: true, trophy: true },
  { text: '✅ Aula: Como organizar o Relatório', bonus: true },
  { text: '✅ Aula: Sugestões de textos.', bonus: true },
]

export function RCPricing() {
  return (
    <section id="opcoes" className="bg-gradient-to-b from-gray-100 to-white text-black py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          Escolha a melhor opção para você
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {/* PROFISSIONAL */}
          <div className="rounded-3xl shadow-lg overflow-hidden border-2 border-gray-200 bg-white transform transition-all hover:scale-[1.02]">
            <div className="bg-gray-700 text-white py-5 px-6">
              <p className="font-bold text-xl md:text-2xl text-center uppercase">Profissional</p>
            </div>
            <div className="p-8">
              <p className="text-gray-500 text-lg mb-2">de: R$ 147,00</p>
              <div className="flex items-baseline gap-2 mb-8">
                <p className="text-green-600 text-5xl md:text-6xl font-extrabold">R$ 27</p>
                <span className="text-2xl text-gray-500">,00</span>
              </div>
              <ul className="space-y-4 mb-10 min-h-[80px]">
                {profissionalFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={3} />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://pay.voompcreators.com.br/redirect/21614"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-5 bg-gray-600 hover:bg-gray-700 text-white text-xl font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
              >
                <FileText className="w-6 h-6" />
                Quero o Profissional
              </a>
            </div>
          </div>

          {/* AVANÇADO - DESTAQUE */}
          <div className="rounded-3xl shadow-2xl overflow-hidden border-4 border-green-500 bg-white relative transform md:scale-105 transition-all hover:scale-[1.07]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full font-extrabold text-sm uppercase shadow-lg flex items-center gap-2 animate-pulse">
                <Sparkles className="w-4 h-4" />
                Mais Vendido
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-6 px-6 pt-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-6 h-6 text-yellow-300" />
                <p className="font-extrabold text-2xl md:text-3xl text-center uppercase">Avançado</p>
                <Zap className="w-6 h-6 text-yellow-300" />
              </div>
              <p className="text-center text-sm opacity-90">🏆 Recomendado</p>
            </div>
            <div className="p-8 bg-gradient-to-b from-green-50 to-white">
              <div className="text-center mb-6">
                <p className="text-red-500 line-through text-xl font-bold mb-1">de: R$ 297,00</p>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="text-center">
                    <p className="text-green-600 text-5xl md:text-6xl font-black">R$ 57</p>
                    <span className="text-xl text-gray-500">,00</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {avancadoFeatures.map((item, i) => {
                  const isObject = typeof item === 'object'
                  const text = isObject ? (item as { text: string }).text : item
                  const isTrophy = isObject && (item as { trophy?: boolean }).trophy
                  return (
                    <li key={i} className="flex items-start gap-3">
                      {isTrophy ? (
                        <Trophy className="w-7 h-7 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" />
                      ) : (
                        <Check className="w-7 h-7 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={3} />
                      )}
                      <span className="text-lg font-medium">{text}</span>
                    </li>
                  )
                })}
              </ul>
              <a
                href="https://pay.voompcreators.com.br/redirect/21616"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl md:text-2xl font-extrabold rounded-2xl transition-all transform hover:scale-105 shadow-2xl text-center"
              >
                <FileText className="w-7 h-7" />
                QUERO O AVANÇADO AGORA!
              </a>
              <p className="text-center text-sm text-gray-500 mt-4">⏰ Oferta por tempo limitado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
