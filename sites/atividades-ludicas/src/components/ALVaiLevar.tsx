import { Check } from 'lucide-react'

const itens = [
  'Um conjunto completo de atividades organizadas por tema',
  'Propostas lúdicas com objetivos pedagógicos claros',
  'Apoio visual e estrutura pronta para facilitar sua rotina',
]

export function ALVaiLevar() {
  return (
    <section className="bg-white text-black py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
          Este não é só mais um PDF cheio de fichas soltas.
        </h2>
        <p className="text-xl md:text-2xl font-bold text-gray-800 mb-8">Você vai levar:</p>
        <ul className="space-y-4 mb-10">
          {itens.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={3} />
              <span className="text-lg md:text-xl text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        <div className="bg-amber-50 rounded-2xl p-6 md:p-8 border-2 border-amber-200">
          <p className="text-lg md:text-xl font-bold text-gray-900 mb-2">🎁 E tem mais:</p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Esse material é ideal para quem trabalha com alfabetização na perspectiva construtivista, com olhar atento para o desenvolvimento integral da criança.
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-12 text-center max-w-3xl mx-auto">
          Esse é o livro ideal para quem deseja alfabetizar com criatividade, propósito e resultados concretos — sem abrir mão da ludicidade que encanta e ensina.
        </h2>
      </div>
    </section>
  )
}
