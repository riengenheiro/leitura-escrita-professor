export function RCGuarantee() {
  return (
    <section className="bg-white text-black py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-10 bg-amber-50 rounded-3xl p-8 md:p-12 border-2 border-amber-200">
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-amber-500 bg-white flex flex-col items-center justify-center shadow-lg">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-black flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-black text-white leading-none">7</span>
                <span className="text-xs md:text-sm font-bold text-white uppercase">Dias</span>
              </div>
            </div>
            <span className="text-sm md:text-base font-bold uppercase text-amber-700 mt-3">Garantia Incondicional</span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6">Essa compra tem garantia de 7 dias</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              O produto conta com uma garantia 100% de satisfação. Você tem 7 dias para acessar o conteúdo do curso, e se ainda achar que o treinamento não é para você, basta pedir reembolso e devolverei integralmente seu dinheiro. Sem perguntas e questionamentos. Eu tenho certeza que 7 dias são suficientes para você entender quão boa é essa oferta!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
