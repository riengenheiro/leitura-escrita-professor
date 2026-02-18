import { OptimizedImage } from './OptimizedImage'

export function GPAmostras() {
  return (
    <section className="bg-white text-black py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
          POR DENTRO DO GUIA PRÁTICO
        </h2>
        <p className="text-xl text-center text-gray-600 mb-14">
          Confira algumas amostras dos materiais que você poderá adquirir:
        </p>
        
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl">
            <OptimizedImage
              src="/images/guia-pratico/02-amostras.png"
              alt="Amostras do Guia Prático - Doutora Escola"
              className="w-full h-auto rounded-2xl shadow-2xl"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
