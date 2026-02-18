import { Check } from 'lucide-react'
import { OptimizedImage } from './OptimizedImage'

const items = ['Planejamentos', 'Relatórios PDI', 'Documentação escolar/ata', 'Desenvolvimento individual', 'TEA, TDAH e muito mais']

export function RCAbout() {
  return (
    <section className="bg-gray-100 text-black py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">Quem sou eu?</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Sou Guaciara Fornaciari, também conhecida como Doutora Escola. Fonoaudióloga, professora, ex-coordenadora e especialista em inclusão, dedico minha trajetória a tornar a vida de professores e coordenadores mais simples, especialmente na elaboração de relatórios.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Com mais de 19 anos de experiência, transformo a linguagem técnica e complexa em algo acessível e fácil de entender. Já ajudei mais de 2.000 professoras por meio dos meus cursos, permitindo que elas desenvolvam diversos tipos de documentos, como:
            </p>
            <ul className="space-y-4 mb-8">
              {items.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0" strokeWidth={3} />
                  <span className="text-lg md:text-xl font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Meu objetivo é capacitar profissionais da educação para que possam registrar suas observações de forma clara, objetiva e sem complicação.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <OptimizedImage src="/images/doutora-escola/07-quem-sou-eu.png" alt="Guaciara Fornaciari - Doutora Escola" className="max-w-md w-full h-auto rounded-3xl object-cover shadow-2xl border-4 border-white" width={637} height={856} />
          </div>
        </div>
      </div>
    </section>
  )
}
