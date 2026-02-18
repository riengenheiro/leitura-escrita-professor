import { AlertCircle } from 'lucide-react'

const Problems = () => {
  const problems = [
    {
      icon: '⏰',
      title: 'Horas perdidas',
      description: 'tentando entender como aplicar a BNCC na prática',
    },
    {
      icon: '🔄',
      title: 'Retrabalho constante',
      description: 'porque o planejamento não fica alinhado',
    },
    {
      icon: '😰',
      title: 'Estresse e insegurança',
      description: 'na distribuição de conteúdos ao longo do ano',
    },
    {
      icon: '📄',
      title: 'Materiais genéricos',
      description: 'que não atendem suas necessidades específicas',
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold mb-4">
              <AlertCircle className="w-5 h-5" />
              <span>A Realidade dos Professores Hoje</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Você se identifica com algum desses problemas?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-100 hover:border-red-300 transition-all hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{problem.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{problem.title}</h3>
                    <p className="text-gray-700">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-700 font-medium">
              Se você respondeu <strong>SIM</strong> para qualquer um desses problemas,{' '}
              <span className="text-primary-600 font-bold">você está no lugar certo!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problems
