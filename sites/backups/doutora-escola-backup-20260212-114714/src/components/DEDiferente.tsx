import { Check } from 'lucide-react'
import { OptimizedImage } from './OptimizedImage'

const garantiaItems = [
  'Guia digital com ideias para todos os Campos de Experiência',
  'Estratégias que já foram elogiadas por coordenadoras de diferentes cidades',
  'Sugestões aplicáveis em qualquer turma, já testadas por professoras reais',
  'Resultados visíveis na sua rotina desde a primeira semana',
]

export function DEDiferente() {
  return (
    <section className="bg-white text-black">
      {/* Por que este material é diferente */}
      <div className="bg-gray-200 py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-black mb-10">
            Por que este material é diferente de tudo que você já viu?
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg space-y-5">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Você já percebeu como, na internet, todo mundo repete as mesmas ideias de atividades... Mas, na prática, nada funciona igual na sua turma?
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Ou então, você até encontra propostas, mas elas não se encaixam na BNCC — e acabam gerando ainda mais dúvidas e insegurança?
            </p>
            <p className="text-xl md:text-2xl font-bold text-black">
              Este guia foi criado para resolver, de verdade, o seu dia a dia:
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Todas as atividades e estratégias aqui já foram testadas por professoras reais e elogiadas em reuniões pedagógicas.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Cada sugestão já está alinhada à BNCC, pronta para ser implementada sem medo.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
              Você não precisa reinventar a roda, nem gastar mais tempo: basta abrir, escolher e aplicar!
            </p>
          </div>
        </div>
      </div>

      {/* Ao garantir agora, você recebe */}
      <div className="bg-gray-100 py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-black mb-12">
            Ao garantir agora, você recebe:
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ul className="space-y-6">
              {garantiaItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center mt-1">
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-lg md:text-xl">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <OptimizedImage
                src="/images/doutora-escola/03-diferente.png"
                alt="Livro - Ideias para trabalhar os Campos de Experiências - Doutora Escola"
                className="max-w-sm w-full h-auto rounded-2xl object-cover object-center shadow-xl"
                width={637}
                height={856}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
