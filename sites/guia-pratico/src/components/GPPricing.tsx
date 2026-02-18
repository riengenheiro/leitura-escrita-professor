import { Check, BookOpen, Gift } from 'lucide-react'

export function GPPricing() {
  return (
    <section id="opcoes" className="bg-gradient-to-b from-gray-100 to-white text-black py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          QUANTO ISSO DEVERIA CUSTAR?
        </h2>
        
        {/* Tabela de Preços */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg mb-10">
          <div className="space-y-4 text-lg md:text-xl">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <span className="font-semibold">Guia Prático de Dificuldades Escolares</span>
              <span className="font-bold text-gray-700">R$ 127,00</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <span className="font-semibold">Ebook de Sondagem Escolar</span>
              <span className="font-bold text-gray-700">R$ 97,00</span>
            </div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-2xl font-bold">Total</span>
              <span className="text-3xl font-extrabold text-red-600">R$ 236,00</span>
            </div>
          </div>
        </div>
        
        {/* Oferta Principal */}
        <div className="text-center mb-10">
          <p className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Tudo isso deveria custar R$ 47,00 mas você não pagará esse valor!
          </p>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Por tempo limitado, você irá adquirir o Guia Prático de Dificuldades Escolares + 01 bônus por apenas:
          </p>
        </div>
        
        {/* Card de Preço */}
        <div className="rounded-3xl shadow-2xl overflow-hidden border-4 border-red-500 bg-white relative transform transition-all hover:scale-[1.02] max-w-2xl mx-auto">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-8 py-2 rounded-full font-extrabold text-sm uppercase shadow-lg animate-pulse">
            OFERTA POR TEMPO LIMITADO
          </div>
          
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-8 px-6 pt-10">
            <p className="font-extrabold text-3xl md:text-4xl text-center uppercase mb-2">
              Guia Prático Completo
            </p>
            <p className="text-center text-lg opacity-90">+ 1 Bônus de Sondagem</p>
          </div>
          
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg mb-2">De R$ 47,00 por apenas:</p>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-baseline justify-center">
                    <span className="text-red-600 text-5xl md:text-6xl font-black">R$ 19</span>
                    <span className="text-2xl text-gray-500">,70</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-8">
              <p className="font-bold text-center text-lg mb-4 text-green-700 uppercase flex items-center justify-center gap-2">
                <Check className="w-6 h-6" />
                Você recebe:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg font-medium">Guia Prático de Dificuldades Escolares (PDF)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg font-medium">BÔNUS: Ebook de Sondagem Escolar</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg font-medium">Atendimento exclusivo por e-mail durante 1 ano</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-6 text-center">
              <p className="text-sm text-gray-500 mb-2">⚡ Acesso liberado imediatamente após confirmação</p>
              <p className="text-xs text-gray-400">🔒 Compra 100% segura e protegida</p>
            </div>
            
            <a
              href="https://pay.voompcreators.com.br/redirect/11045"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-2xl font-extrabold rounded-2xl transition-all transform hover:scale-105 shadow-2xl"
            >
              <BookOpen className="w-8 h-8" />
              QUERO ADQUIRIR AGORA!
            </a>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              ✅ Garantia incondicional de 7 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
