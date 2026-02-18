import { Check, FileText, Trophy } from 'lucide-react'

const profissionalFeatures = ['Livro Digital - Atividades Lúdicas para Alfabetização']
const avancadoFeatures = [
  'Livro Digital - Atividades Lúdicas para Alfabetização',
  'Modelo de Planejamento para Alfabetização',
  'Modelo de Relatório para Alfabetização',
]

export function ALPricing() {
  return (
    <section id="opcoes" className="bg-gradient-to-b from-gray-100 to-white text-black py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">ESPERA! EU PREPAREI ALGO AINDA MELHOR PARA VOCÊ!</h2>
        <p className="text-center text-xl text-gray-600 mb-12">Temos opções que atendem a todos os gostos!</p>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl shadow-lg overflow-hidden border-2 border-gray-200 bg-white">
            <div className="bg-gray-700 text-white py-5 px-6">
              <p className="font-bold text-xl md:text-2xl text-center uppercase">PROFISSIONAL</p>
            </div>
            <div className="p-8">
              <p className="text-gray-500 text-lg mb-2">de: R$ 97,00</p>
              <div className="flex items-baseline gap-2 mb-8">
                <p className="text-green-600 text-5xl md:text-6xl font-extrabold">R$ 27</p>
                <span className="text-2xl text-gray-500">,00</span>
              </div>
              <ul className="space-y-4 mb-10">
                {profissionalFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={3} />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://pay.voompcreators.com.br/redirect/21683" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-5 bg-gray-600 hover:bg-gray-700 text-white text-xl font-bold rounded-xl transition-all shadow-lg">
                <FileText className="w-6 h-6" />
                Quero o Profissional
              </a>
            </div>
          </div>
          <div className="rounded-3xl shadow-2xl overflow-hidden border-4 border-green-500 bg-white relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full font-extrabold text-sm uppercase shadow-lg">Mais completo</span>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-6 px-6 pt-10">
              <p className="font-extrabold text-2xl md:text-3xl text-center uppercase">AVANÇADO</p>
            </div>
            <div className="p-8 bg-gradient-to-b from-green-50 to-white">
              <p className="text-gray-600 text-lg mb-2">de: R$ 197,00</p>
              <div className="flex items-baseline gap-2 mb-8">
                <p className="text-green-600 text-5xl md:text-6xl font-extrabold">R$ 37</p>
                <span className="text-2xl text-gray-500">,00</span>
              </div>
              <ul className="space-y-4 mb-10">
                {avancadoFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {i === 2 ? <Trophy className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" /> : <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={3} />}
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="https://pay.voompcreators.com.br/redirect/21684" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl font-extrabold rounded-2xl transition-all shadow-2xl">
                <FileText className="w-7 h-7" />
                Quero o Avançado
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
