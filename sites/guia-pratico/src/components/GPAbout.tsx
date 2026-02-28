import { OptimizedImage } from './OptimizedImage'

export function GPAbout() {
  return (
    <section className="bg-[var(--color-papel-escuro)] border-y-2 border-[var(--color-borda-livro)] py-14 md:py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-[var(--color-texte-livro)]">
          Quem criou esse guia
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Guaciara Fornaciari — Doutora Escola
        </p>
        
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Fonoaudióloga, professora, ex-coordenadora e especialista em inclusão. Trabalho há anos com professores e coordenadores, simplificando o dia a dia na educação.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Com <strong className="text-[var(--color-destaque)]">mais de 17 anos de experiência</strong>, transformo a linguagem técnica em conteúdo acessível e prático, para você usar na sala de aula.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <OptimizedImage
              src="/images/guia-pratico/07-quem-sou-eu.png"
              alt="Dra. Guaciara Fornaciari - Doutora Escola"
              className="max-w-md w-full h-auto rounded-xl object-cover shadow-md border-2 border-[var(--color-borda-livro)]"
              width={637}
              height={856}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
