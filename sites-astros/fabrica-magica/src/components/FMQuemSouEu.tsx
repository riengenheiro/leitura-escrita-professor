import { Heart } from 'lucide-react'

export function FMQuemSouEu() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-texto">
            Quem criou a Fábrica Mágica
          </h2>
        </div>

        <div className="card-book flex flex-col md:flex-row gap-8 md:gap-12 items-center p-8 md:p-10 border-2 border-cream-dark">
          <div className="flex-shrink-0">
            <div className="w-48 md:w-56 rounded-2xl overflow-hidden border-2 border-cream-dark shadow-sm">
              <img
                src="/images/fabrica-magica/guaciara.webp"
                alt="Dra. Guaciara Fornaciari"
                className="w-full h-auto block"
                width={224}
                height={224}
                loading="lazy"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-texto mb-1">Guaciara Fornaciari</p>
            <p className="text-sm text-texto-light mb-5">Fonoaudióloga · Doutora em Educação · Criadora da Fábrica Mágica</p>

            <div className="space-y-4 text-texto-muted leading-relaxed">
              <p>
                Já fui professora, alfabetizadora, coordenadora e diretora escolar. Abri uma escola do zero. Sei o que é chegar em casa com pilha de documentos pra fazer e não saber por onde começar.
              </p>
              <p>
                Quando comecei a trabalhar com inclusão, percebi que <strong className="text-texto">ninguém ensinava as professoras a fazer os documentos na prática</strong>. Nem a faculdade, nem a pós, nem a escola.
              </p>
              <p className="flex items-start gap-2">
                <Heart className="w-5 h-5 text-coral flex-shrink-0 mt-1" />
                <span>
                  Criei a Fábrica Mágica pra ser o que eu queria ter quando estava em sala de aula: uma ajuda de verdade, simples, que qualquer professora consegue usar.
                </span>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-verde-light text-verde">3.342+ professoras atendidas</span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-azul-light text-azul">11.800+ documentos criados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
