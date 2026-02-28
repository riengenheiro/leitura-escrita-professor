import { BookOpen, Shield, Zap, CheckCircle } from 'lucide-react'
import { OptimizedImage } from './OptimizedImage'

export function GPHero() {
  return (
    <>
      {/* Hero – ambiente familiar, feito para professora */}
      <section className="bg-[var(--color-papel-escuro)] border-b-2 border-[var(--color-borda-livro)]">
        <div className="max-w-5xl mx-auto px-6 py-14 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-lg text-[var(--color-destaque)] font-semibold mb-2 font-ui">
                Feito para você, professora
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 text-[var(--color-texte-livro)]">
                Guia Prático para Identificar Dificuldades Escolares
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                O material que você usa no dia a dia com os livros didáticos — em formato de guia, direto e fácil de usar.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden shadow-xl border-2 border-[var(--color-borda-livro)]">
                <OptimizedImage
                  src="/images/guia-pratico/01-hero.png"
                  alt="Guia Prático Para Identificar Dificuldades Escolares - Doutora Escola"
                  className="w-full h-full object-cover object-center"
                  priority={true}
                  width={637}
                  height={856}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa CTA – simples, segura, um clique */}
      <section className="bg-white border-y-2 border-[var(--color-borda-livro)] py-10">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xl text-gray-700 mb-1">A partir de</p>
          <p className="text-4xl md:text-5xl font-bold text-[var(--color-destaque)] mb-1 font-ui">R$ 19,70</p>
          <p className="text-base text-gray-600 mb-6">Básico ou Pacote Especial — escolha na página</p>
          <a
            href="#opcoes"
            className="font-ui inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-destaque)] hover:bg-red-800 text-white text-lg font-bold rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            <BookOpen className="w-5 h-5" />
            Quero o meu guia
          </a>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-5 text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-600" />
              Acesso na hora
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-green-600" />
              Compra segura
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-600" />
              7 dias de garantia
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
