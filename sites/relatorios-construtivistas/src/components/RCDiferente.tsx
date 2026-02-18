import { Check } from 'lucide-react'
import { OptimizedImage } from './OptimizedImage'

const resumoItems = [
  'Passo a passo claro para relatórios construtivistas de alunos com TEA',
  'Modelos prontos para Educação Infantil e Ensino Fundamental',
  'Frases inclusivas que valorizam o aluno',
  'Exemplos reais para aplicar com segurança',
  'Técnicas para organizar observações e desbloquear a escrita',
  'Material alinhado à BNCC e à prática pedagógica inclusiva',
]

export function RCDiferente() {
  return (
    <section className="bg-white text-black">
      <div className="bg-gray-200 py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-black mb-10">Resumindo...</h2>
          <p className="text-xl md:text-2xl font-bold text-center mb-8">com este guia você terá:</p>
          <ul className="space-y-5">
            {resumoItems.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center mt-1">
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </span>
                <span className="text-lg md:text-xl">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-gray-100 py-14 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center text-black mb-12">Garanta agora o seu exemplar</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-2xl md:text-3xl font-bold mb-6">
                De <span className="line-through text-red-600">R$ 97,00</span> por <span className="text-green-600 text-3xl md:text-4xl">R$ 27,00</span>
              </p>
              <a href="#opcoes" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-xl font-bold rounded-xl transition-all">Ver opções</a>
            </div>
            <div className="flex justify-center">
              <OptimizedImage src="/images/doutora-escola/03-diferente.png" alt="Relatórios Construtivistas TEA - Doutora Escola" className="max-w-sm w-full h-auto rounded-2xl object-cover object-center shadow-xl" width={637} height={856} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
