import { BookOpen } from 'lucide-react'

export function GPFinalCTA() {
  return (
    <section className="bg-[var(--color-destaque)] text-white py-14 md:py-16">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Pronto para usar na sua rotina
        </h2>
        <p className="text-lg mb-6 opacity-95">
          Básico <strong className="text-yellow-200">R$ 19,70</strong> ou Pacote Especial <strong className="text-yellow-200">R$ 47,90</strong>. Acesso na hora. Compra segura.
        </p>
        <a
          href="#opcoes"
          className="font-ui inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[var(--color-destaque)] hover:bg-gray-100 text-lg font-bold rounded-lg transition-all shadow-md"
        >
          <BookOpen className="w-5 h-5" />
          Escolher meu pacote
        </a>
      </div>
    </section>
  )
}
