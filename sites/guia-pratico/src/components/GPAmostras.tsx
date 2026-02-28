import { OptimizedImage } from './OptimizedImage'

export function GPAmostras() {
  return (
    <section className="bg-white border-y-2 border-[var(--color-borda-livro)] text-[var(--color-texte-livro)] py-14 md:py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Por dentro do guia
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Algumas páginas do material que você vai receber:
        </p>
        
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl">
            <OptimizedImage
              src="/images/guia-pratico/02-amostras.png"
              alt="Amostras do Guia Prático - Doutora Escola"
              className="w-full h-auto rounded-lg shadow-lg border-2 border-[var(--color-borda-livro)]"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
