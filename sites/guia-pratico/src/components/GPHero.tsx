import { BookOpen } from 'lucide-react'
import { OptimizedImage } from './OptimizedImage'

export function GPHero() {
  return (
    <>
      {/* Hero principal – texto + capa do guia */}
      <section className="bg-gradient-to-b from-red-600 to-red-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Guia Prático Para Identificar Dificuldades Escolares!
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6">
                Chega de se sentir impotente diante das dificuldades de aprendizagem!
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
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

      {/* Faixa CTA inicial */}
      <section className="bg-gray-100 text-black py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-bold mb-3">
            Por apenas <span className="text-red-600 text-3xl md:text-4xl">R$ 19,70</span>
          </p>
          <p className="text-lg text-gray-600 mb-8">+ 1 Bônus Exclusivo de Sondagem</p>
          <a
            href="#opcoes"
            className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 hover:bg-red-700 text-white text-xl md:text-2xl font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            <BookOpen className="w-7 h-7" />
            Quero Identificar as Dificuldades Agora!
          </a>
          <p className="text-sm text-gray-500 mt-3">
            ⚡ Acesso imediato • 🔒 Compra 100% segura • ✅ Garantia de 7 dias
          </p>
        </div>
      </section>
    </>
  )
}
