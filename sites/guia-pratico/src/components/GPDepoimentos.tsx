import { OptimizedImage } from './OptimizedImage'

// Fotos dos depoimentos: coloque em public/images/guia-pratico/
// - 05-depoimento-1.png
// - 06-depoimento-2.png
const DEPOIMENTOS = [
  { src: '/images/guia-pratico/05-depoimento-1.png', alt: 'Depoimento sobre o Guia Prático' },
  { src: '/images/guia-pratico/06-depoimento-2.png', alt: 'Depoimento sobre o Guia Prático' },
]

export function GPDepoimentos() {
  return (
    <section className="bg-[var(--color-papel-escuro)] border-y-2 border-[var(--color-borda-livro)] py-14 md:py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-[var(--color-texte-livro)]">
          Quem já usa
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Mais de <strong className="text-[var(--color-destaque)]">4.000 professoras e profissionais</strong> já utilizaram nossos materiais.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {DEPOIMENTOS.map((dep, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border-2 border-[var(--color-borda-livro)]">
              <div className="rounded-lg overflow-hidden border border-[var(--color-borda-livro)]">
                <OptimizedImage
                  src={dep.src}
                  alt={dep.alt}
                  className="w-full h-auto min-h-64 object-cover object-top"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
