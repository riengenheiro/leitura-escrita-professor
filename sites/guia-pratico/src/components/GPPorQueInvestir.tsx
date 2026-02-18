import { Check } from 'lucide-react'

const beneficios = [
  {
    title: 'Transformei a linguagem técnica em uma linguagem de fácil compreensão.',
    description: 'Com mais de 17 anos de experiência trabalhando com professores e mães, sei exatamente como explicar de maneira simples e didática o que está acontecendo com a criança.',
  },
  {
    title: 'Te mostrei que não é preguiça.',
    description: 'Muitas vezes, interpretamos errado as dificuldades das crianças. Ao compreender, por exemplo, que uma criança que respira pela boca pode ter sua compreensão reduzida e parecer preguiçosa, mudamos completamente a maneira de enxergá-la.',
  },
  {
    title: 'Simplifiquei a maneira de planejar!',
    description: 'Quando você descobre o que dificulta o aprendizado da criança, fica mais fácil escolher as atividades certas para ajudá-la. Também é possível buscar profissionais da saúde que podem tratar essas questões e apoiar no desenvolvimento dela.',
  },
  {
    title: 'Economizei seu tempo',
    description: 'Este tipo de informação que apresentei no guia prático não se encontra nos cursos de pedagogia e materiais da área da educação. Foi minha vivência treinando professores e atendendo crianças no meu consultório que me permitiu ter essa visão integrada das áreas da saúde e da educação. E agora, você tem acesso resumido a todo esse conhecimento.',
  },
]

export function GPPorQueInvestir() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white text-black py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-14">
          MAS POR QUE INVESTIR NO GUIA PRÁTICO?
        </h2>
        
        <div className="space-y-8">
          {beneficios.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center mt-1">
                  <Check className="w-6 h-6 text-white" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-red-700">
                    {item.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
