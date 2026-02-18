import { OptimizedImage } from './OptimizedImage'

export function GPAbout() {
  return (
    <section className="bg-gray-50 text-black py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
          Olá, Guaciara Fornaciari, também conhecida como Doutora Escola,
        </h2>
        <p className="text-xl text-center text-gray-600 mb-14 max-w-3xl mx-auto">
          É um prazer conhecer alguém com sua vasta experiência e conhecimento.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Como fonoaudióloga, professora, ex-coordenadora e especialista em inclusão, você desenha um percurso notável.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Além disso, seu trabalho tem um impacto significativo na vida de professores e coordenadores, simplificando a tarefa desafiadora de elaborar relatórios diariamente.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Com <strong className="text-red-600">mais de 17 anos de experiência</strong>, transformo a linguagem técnica em conteúdo acessível e prático, ajudando milhares de profissionais da educação e famílias a compreenderem e agirem sobre as dificuldades de aprendizagem.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <OptimizedImage
              src="/images/guia-pratico/07-quem-sou-eu.png"
              alt="Dra. Guaciara Fornaciari - Doutora Escola"
              className="max-w-md w-full h-auto rounded-3xl object-cover shadow-2xl border-4 border-white"
              width={637}
              height={856}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
