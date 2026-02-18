import { Check } from 'lucide-react'

const benefits = [
  'Estratégias fáceis de aplicar, testadas e elogiadas por coordenadoras',
  'Resultados visíveis já nas primeiras semanas',
  'Planejamento rápido, mais tempo livre e alunos muito mais engajados',
]

export function DEProblema() {
  return (
    <section className="bg-white text-black py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-10 leading-tight">
          Está difícil ter ideias novas? Se sente sobrecarregada e sem reconhecimento?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
          Você não está sozinha. Milhares de professoras já sentiram esse peso — mas encontraram neste guia uma solução prática para transformar a rotina.
        </p>
        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
          Aqui você recebe atividades prontas para todos os Campos de Experiência da BNCC, criadas por quem entende a sala de aula real:
        </p>
        <ul className="space-y-5 mb-10">
          {benefits.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center mt-1">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </span>
              <span className="text-lg md:text-xl">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xl md:text-2xl mb-6">
          De <span className="line-through text-red-600">R$ 47,00</span> por apenas{' '}
          <span className="font-bold text-green-600 text-2xl md:text-3xl">R$ 10,00</span> — só para as 100 primeiras professoras.
        </p>
        <p className="text-lg md:text-xl text-gray-600">
          Clique no botão abaixo e torne seu dia a dia mais leve, criativo e inspirador!
        </p>
      </div>
    </section>
  )
}
