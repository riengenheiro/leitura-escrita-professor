import { BookOpen } from 'lucide-react'

export function GPFinalCTA() {
  return (
    <section className="bg-gradient-to-b from-red-600 to-red-700 text-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8">
          Última Chamada!
        </h2>
        <p className="text-xl md:text-2xl mb-6 opacity-95">
          Não continue se sentindo impotente diante das dificuldades de aprendizagem.
        </p>
        <p className="text-xl md:text-2xl mb-10 opacity-95">
          Garanta agora o material que vai transformar sua forma de identificar e agir sobre as dificuldades escolares!
        </p>
        <p className="text-2xl md:text-3xl font-bold mb-10">
          Guia Prático + Bônus por apenas{' '}
          <span className="text-yellow-300 text-3xl md:text-4xl">R$ 19,70</span>
        </p>
        <a
          href="#opcoes"
          className="inline-flex items-center gap-3 px-12 py-6 bg-yellow-400 hover:bg-yellow-300 text-black text-xl md:text-2xl font-extrabold rounded-xl transition-all transform hover:scale-105 shadow-2xl uppercase"
        >
          <BookOpen className="w-8 h-8" />
          Garantir meu exemplar agora!
        </a>
      </div>
    </section>
  )
}
