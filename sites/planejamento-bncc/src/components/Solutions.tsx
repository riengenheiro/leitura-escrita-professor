import { CheckCircle, Zap } from 'lucide-react'

const Solutions = () => {
  const solutions = [
    {
      icon: '📋',
      title: 'Modelos prontos e testados',
      description: 'para copiar e colar',
    },
    {
      icon: '✅',
      title: 'Método passo a passo',
      description: 'validado por centenas de professores',
    },
    {
      icon: '⚡',
      title: 'Organização inteligente',
      description: 'que economiza até 10h por semana',
    },
    {
      icon: '🎯',
      title: '100% alinhado à BNCC',
      description: 'sem complicação ou incertezas',
    },
  ]

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold mb-4">
              <Zap className="w-5 h-5" />
              <span>A Solução Que Você Precisa</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Transforme Seu Planejamento em Poucas Horas
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Com o <strong>Método BNCC Aprovado</strong>, você terá tudo o que precisa para criar
              planejamentos profissionais e alinhados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary-200 hover:border-primary-400 transition-all hover:shadow-xl hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{solution.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                    <p className="text-gray-700">{solution.description}</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-primary-500 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Pare de perder tempo e comece a planejar com eficiência!
            </h3>
            <p className="text-xl mb-8 opacity-95">
              Junte-se a +2.000 professores que já transformaram seu planejamento
            </p>
            <button
              onClick={scrollToPricing}
              className="bg-white text-primary-700 hover:bg-gray-100 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              VER PLANOS E PREÇOS →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
