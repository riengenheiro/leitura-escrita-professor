export function GPGuarantee() {
  return (
    <section className="bg-[var(--color-papel-escuro)] border-y-2 border-[var(--color-borda-livro)] py-14 md:py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-8 bg-white rounded-2xl p-6 md:p-8 border-2 border-[var(--color-borda-livro)] shadow-sm">
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-amber-500 bg-amber-50 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-amber-700">7</span>
              <span className="text-xs font-semibold text-amber-700">dias</span>
            </div>
            <span className="text-sm font-semibold text-amber-700 mt-2">Garantia</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-[var(--color-texte-livro)]">
              Você compra sem risco
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Se não for o que você esperava, pedimos reembolso e devolvemos todo o valor. <strong>Sem perguntas, sem burocracia.</strong> Assim você pode experimentar com tranquilidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
