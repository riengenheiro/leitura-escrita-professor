import { BookOpen, Target, GraduationCap, Users } from 'lucide-react'

const Modules = () => {
  const modules = [
    {
      number: 1,
      icon: BookOpen,
      title: 'Planejamento Educação Infantil',
      items: [
        'Planejamento sem livro (bebês e crianças)',
        'Planejamento com livro (crianças bem pequenas e pequenas)',
        'Planejamento Multisseriado',
        'Planejamento para Berçário',
        'Modelos editáveis em Word e PDF',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: 2,
      icon: Target,
      title: 'Entendendo a BNCC',
      items: [
        'Diferença entre objetivos e habilidades',
        'Códigos alfanuméricos da Educação Infantil',
        'Códigos alfanuméricos do Ensino Fundamental',
        'Como usar o site da BNCC na prática',
        'Estratégias de metodologia',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: 3,
      icon: GraduationCap,
      title: 'Alfabetização e Fundamental',
      items: [
        'Planejamento para Alfabetização',
        'Ensino Fundamental (anos iniciais)',
        'Ensino Fundamental (anos finais)',
        'Planejamento com "Gancho Vida Real"',
        'Distribuição estratégica de conteúdos',
      ],
      color: 'from-primary-500 to-primary-600',
    },
    {
      number: 4,
      icon: Users,
      title: 'Educação Especial e Inclusão',
      items: [
        'Diferenciando termos da Educação Inclusiva',
        'Planejamento para Educação Especial',
        'Plano de Desenvolvimento Individual (PDI)',
        'Adaptações e estratégias específicas',
        'Avaliação Consciente',
      ],
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              O Que Você Vai Receber
            </h2>
            <p className="text-xl text-gray-700">
              <strong>40+ Modelos Editáveis</strong> + Videoaulas completas em <strong>4 módulos práticos</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module) => {
              const Icon = module.icon
              return (
                <div
                  key={module.number}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105"
                >
                  <div className={`bg-gradient-to-r ${module.color} p-6 text-white`}>
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold opacity-90">Módulo {module.number}</div>
                        <h3 className="text-2xl font-bold">{module.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {module.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-primary-500 text-xl flex-shrink-0">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 bg-gradient-to-r from-accent-100 to-accent-200 rounded-2xl p-8 text-center border-2 border-accent-300">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              40+ Modelos Editáveis em Word e PDF
            </h3>
            <p className="text-gray-700 text-lg">
              Cartas de Intenção • Avaliações • Checklists • Tabelas • Roteiros • PDI • Portfólio
            </p>
            <p className="text-gray-600 mt-2">
              Tudo pronto para você copiar, colar e adaptar para sua realidade!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Modules
