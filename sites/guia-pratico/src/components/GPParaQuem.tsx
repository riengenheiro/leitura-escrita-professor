import { BookOpen, Heart, Stethoscope } from 'lucide-react'

const personas = [
  {
    icon: BookOpen,
    title: 'Para você, professora',
    description: 'Feito para quem vive na sala de aula e lida com livros didáticos todo dia. Um guia no mesmo formato que você já usa — prático, direto e fácil de consultar.',
    highlight: true,
  },
  {
    icon: Heart,
    title: 'Para mães',
    description: 'Para entender melhor as dificuldades do seu filho na escola e saber como apoiá-lo.',
    highlight: false,
  },
  {
    icon: Stethoscope,
    title: 'Para profissionais da saúde',
    description: 'Para psicopedagogas e outras profissionais que atuam com dificuldades de aprendizagem.',
    highlight: false,
  },
]

export function GPParaQuem() {
  return (
    <section className="bg-white border-y-2 border-[var(--color-borda-livro)] py-14 md:py-18">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-[var(--color-texte-livro)]">
          É para você?
        </h2>
        <p className="text-center text-gray-600 mb-10">Este material foi pensado especialmente para:</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((persona, i) => {
            const Icon = persona.icon
            return (
              <div
                key={i}
                className={`rounded-2xl p-6 border-2 transition-shadow ${
                  persona.highlight
                    ? 'bg-[var(--color-papel)] border-[var(--color-destaque)] shadow-md'
                    : 'bg-[var(--color-papel)] border-[var(--color-borda-livro)]'
                }`}
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    persona.highlight ? 'bg-[var(--color-destaque)]' : 'bg-gray-300'
                  }`}>
                    <Icon className={`w-7 h-7 ${persona.highlight ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                </div>
                <h3 className={`text-lg md:text-xl font-bold text-center mb-3 ${
                  persona.highlight ? 'text-[var(--color-destaque)]' : 'text-[var(--color-texte-livro)]'
                }`}>
                  {persona.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center text-sm md:text-base">
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
