import { Users, Heart, Stethoscope } from 'lucide-react'

const personas = [
  {
    icon: Users,
    title: 'Para professoras',
    description: 'Para professoras que entendem que as dificuldades de alguns alunos vão além do pedagógico e precisam compreender como agir para auxiliar efetivamente essas crianças.',
  },
  {
    icon: Heart,
    title: 'Para mães',
    description: 'Para mães que buscam compreender por que seu filho enfrenta tantas dificuldades na sala de aula.',
  },
  {
    icon: Stethoscope,
    title: 'Para profissionais da saúde',
    description: 'Para psicopedagogas e profissionais da saúde que desejam entender as principais dificuldades encontradas na escola e aprender como atuar eficazmente sobre elas.',
  },
]

export function GPParaQuem() {
  return (
    <section className="bg-gray-50 text-black py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-14">
          PARA QUEM É ESTE MATERIAL?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, i) => {
            const Icon = persona.icon
            return (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-center mb-4 text-red-700">
                  {persona.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  {persona.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
