import { OptimizedImage } from './OptimizedImage'

export function GPInumeras() {
  return (
    <section className="bg-white text-black py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-14">
          INÚMERAS PESSOAS JÁ FACILITARAM SEUS ESTUDOS TROCANDO
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
            <p className="text-2xl md:text-3xl font-bold text-center text-red-700 mb-4">ISSO</p>
            <OptimizedImage
              src="/images/guia-pratico/03-antes.png"
              alt="Materiais técnicos complicados"
              className="w-full h-auto rounded-xl shadow-lg"
              width={400}
              height={300}
            />
          </div>
          
          <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-400">
            <p className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-4">POR ISSO</p>
            <OptimizedImage
              src="/images/guia-pratico/04-depois.png"
              alt="Guia Prático simplificado"
              className="w-full h-auto rounded-xl shadow-lg"
              width={400}
              height={300}
            />
          </div>
        </div>
        
        <div className="bg-yellow-50 rounded-2xl p-8 md:p-12 border-2 border-yellow-400 text-center">
          <p className="text-xl md:text-2xl font-bold text-gray-800 italic">
            "Quando a professora ou mãe identifica a origem da dificuldade da criança, isso permite buscar uma solução especializada."
          </p>
        </div>
      </div>
    </section>
  )
}
