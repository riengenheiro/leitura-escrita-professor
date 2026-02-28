import { Shield, Sparkles } from 'lucide-react'

export function FMGarantia() {
  return (
    <section className="bg-white text-gray-900 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-10 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border-2 border-green-200">
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-green-500 bg-white flex flex-col items-center justify-center shadow-lg relative">
              <Shield className="w-12 h-12 md:w-16 md:h-16 text-green-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
              <span className="text-4xl md:text-5xl font-black text-green-600 leading-none">7</span>
              <span className="text-sm md:text-base font-bold text-green-600 uppercase">Dias</span>
            </div>
            <span className="text-sm md:text-base font-bold uppercase text-green-700 mt-3">Garantia Incondicional</span>
          </div>
          
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 text-gray-800">
              Todo o risco é meu!
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Você tem <strong className="text-green-700">7 dias de garantia incondicional</strong>.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Se por qualquer motivo você achar que não é pra você... você pede seu dinheiro de volta.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <strong>Sem perguntas. Sem burocracia.</strong> Eu tenho certeza que 7 dias são suficientes para você entender quão boa é essa oferta!
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="#oferta"
                className="inline-flex items-center gap-2 px-8 py-4 text-white text-lg font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-lg"
                style={{ background: 'linear-gradient(135deg, #1C8C4D 0%, #167d44 100%)', boxShadow: '0 4px 20px rgba(28, 140, 77, 0.4)' }}
              >
                <Sparkles className="w-5 h-5" style={{ color: '#F2C849' }} />
                Ver planos e preços
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
