import { Check } from 'lucide-react'

const benefits = [
  'Estratégias fáceis de aplicar, testadas e elogiadas por coordenadoras',
  'Resultados visíveis já nas primeiras semanas',
  'Planejamento rápido, mais tempo livre e alunos muito mais engajados',
]

export function DEProblema() {
  return (
    <section
      className="text-black py-16 md:py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #F2F2F2 50%, rgba(28, 140, 77, 0.05) 100%)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-0 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: '#1D8FF2' }} />
        <div className="absolute bottom-20 right-0 w-64 h-64 rounded-full opacity-15 blur-3xl" style={{ background: '#1C8C4D' }} />
        <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full opacity-12 blur-3xl" style={{ background: '#F2C849' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <span
          className="inline-block w-full text-center px-4 py-2 rounded-full text-sm font-bold mb-8 text-white shadow-md"
          style={{ background: 'linear-gradient(135deg, #1C8C4D, #167d44)' }}
        >
          Para professoras de educação infantil
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-10 leading-tight text-gray-900">
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
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 text-white shadow-md"
                style={{ background: 'linear-gradient(135deg, #1C8C4D, #167d44)' }}
              >
                <Check className="w-5 h-5" strokeWidth={3} />
              </span>
              <span className="text-lg md:text-xl text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
        <div className="bg-white rounded-2xl p-6 border-2 shadow-md mb-6" style={{ borderColor: '#F2C849' }}>
          <p className="text-xl md:text-2xl text-center mb-0">
            De <span className="line-through text-gray-500">R$ 47,00</span> por apenas{' '}
            <span className="font-bold text-2xl md:text-3xl" style={{ color: '#1C8C4D' }}>R$ 10,00</span> — só para as 100 primeiras professoras.
          </p>
        </div>
        <p className="text-lg md:text-xl text-gray-700 text-center">
          Clique no botão abaixo e torne seu dia a dia mais leve, criativo e inspirador!
        </p>
      </div>
    </section>
  )
}
