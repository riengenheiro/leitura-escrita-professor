export function GPPorQueInvestirPDFs() {
  return (
    <section className="bg-[var(--color-papel)] border-y-2 border-[var(--color-borda-livro)] py-14 md:py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-[var(--color-texte-livro)]">
          Por que em PDF?
        </h2>
        <p className="text-center text-gray-600 mb-8">Prático para você usar e imprimir se quiser</p>
        
        <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-[var(--color-borda-livro)]">
          <p className="text-gray-700 mb-4 leading-relaxed">
            Sem custo de frete — você recebe na hora por e-mail. Se quiser imprimir, sai barato e você usa como material de apoio na sala.
          </p>
          <div className="bg-[var(--color-papel)] rounded-lg p-5 border border-[var(--color-borda-livro)]">
            <p className="font-bold text-[var(--color-texte-livro)] mb-2">Atendimento por 1 ano</p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Dúvidas sobre o material? Você pode enviar e-mail durante um ano. Incluído no valor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
