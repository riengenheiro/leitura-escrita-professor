import { X } from 'lucide-react'

const naoDeseja = [
  'Parar de perder tempo procurando ideias soltas na internet',
  'Evitar conteúdos sem fundamento pedagógico',
  'Sair da mesmice e reativar o encantamento dos alunos com a alfabetização',
]

export function ALProblema() {
  return (
    <section className="bg-white text-black py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">Caro(a) Professor(a),</p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          Você já sentiu que as atividades tradicionais de alfabetização não estão conectando com seus alunos?
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
          Talvez você já tenha tentado usar jogos, histórias e recursos visuais, mas sempre fica aquela dúvida: será que estou alinhado(a) à BNCC? Será que essa atividade realmente ajuda meu aluno a aprender?
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
          Então chegou a hora de ter em mãos um material que te guia do começo ao fim, com atividades lúdicas prontas, fundamentadas, testadas em sala de aula e organizadas para facilitar o seu planejamento!
        </p>
        <p className="text-xl md:text-2xl font-bold text-gray-900 mb-6">🧩 Este material é perfeito para quem deseja:</p>
        <ul className="space-y-4 mb-8">
          {naoDeseja.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" strokeWidth={3} />
              <span className="text-lg md:text-xl text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8">
          E por que você precisa exatamente deste material AGORA?
        </h2>
        <p className="text-xl md:text-2xl font-bold text-gray-800">Veja 3 motivos indiscutíveis:</p>
      </div>
    </section>
  )
}
