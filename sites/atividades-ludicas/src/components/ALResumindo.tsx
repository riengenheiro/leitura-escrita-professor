import { Check } from 'lucide-react'

const itens = [
  'Atividades lúdicas que desenvolvem a leitura e escrita com leveza e engajamento real;',
  'Jogos, trilhas, bingo, caça-palavras, recortes e desafios visuais, todos pensados para facilitar o processo de alfabetização;',
  'Propostas que trabalham sílabas simples, complexas e formação de palavras, respeitando o ritmo da criança;',
  'Atividades que estimulam a coordenação motora, percepção visual e consciência fonológica;',
  'Material visual e pedagógico, com recursos que incentivam a participação ativa do aluno;',
  'E o melhor: você imprime, aplica e vê resultado — sem precisar montar nada do zero!',
]

export function ALResumindo() {
  return (
    <section className="bg-gray-100 text-black py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center">Resumindo...</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          Você vai receber um material direto ao ponto, fiel à prática em sala de aula, e pronto para imprimir:
        </p>
        <ul className="space-y-4 mb-12">
          {itens.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" strokeWidth={3} />
              <span className="text-lg md:text-xl text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold mb-3">
            Garanta agora o seu exemplar
          </p>
          <p className="text-xl md:text-2xl text-gray-700 mb-6">
            De <span className="line-through text-gray-500">R$ 97,00</span> por{' '}
            <span className="text-green-600 text-2xl md:text-3xl font-bold">R$ 27,00</span>
          </p>
          <a
            href="#opcoes"
            className="inline-block px-10 py-5 bg-green-500 hover:bg-green-600 text-white text-xl font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
          >
            Ver opções
          </a>
        </div>
      </div>
    </section>
  )
}
