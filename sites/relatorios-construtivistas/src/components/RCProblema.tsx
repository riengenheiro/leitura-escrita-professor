import { Check } from 'lucide-react'

const benefits = [
  'Estrutura pronta para relatórios de Educação Infantil e Ensino Fundamental',
  'Frases-modelo claras, respeitosas e inclusivas',
  'Exemplos reais para cada parte do relatório',
  'Orientações para aspectos sensoriais, sociais, cognitivos e emocionais',
  'Técnicas para observar, registrar e relatar sem travar',
  'Recomendações pedagógicas viáveis e humanizadas',
]

export function RCProblema() {
  return (
    <section className="bg-white text-black py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mb-6 leading-tight">
          Tudo o que você sempre quis saber sobre relatórios construtivistas de alunos com TEA
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed text-center">
          Explicado com clareza, exemplos reais e passo a passo aplicável.
        </p>
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 mb-10">
          <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed font-semibold">Caro(a) Professor(a),</p>
          <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">Você já se sentiu inseguro ao escrever um relatório de aluno com TEA?</p>
          <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">Já passou horas tentando encontrar as palavras certas?</p>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">Você não está sozinho. Ninguém nos ensina, na prática, como transformar observações em palavras que acolhem e representam o aluno com respeito.</p>
          <p className="text-xl md:text-2xl font-bold text-black mb-6">Mas isso muda agora.</p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">Apresento um guia prático: Relatórios Construtivistas para Alunos com TEA — passo a passo completo para criar relatórios com segurança, clareza e humanidade.</p>
        </div>
        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">Criado por quem já ajudou milhares de professoras, este material reúne tudo para relatórios realmente construtivistas — sem achismos, com base na realidade da sala de aula.</p>
        <h3 className="text-2xl md:text-3xl font-extrabold mb-6">O que você vai encontrar:</h3>
        <ul className="space-y-5 mb-10">
          {benefits.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center mt-1">
                <Check className="w-5 h-5 text-white" strokeWidth={3} />
              </span>
              <span className="text-lg md:text-xl">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xl md:text-2xl mb-4 font-bold text-black">Por que esse material é diferente?</p>
        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">Foi criado a partir da prática real de sala de aula, com olhar técnico e afetuoso. Você não vai apenas preencher um relatório — vai representar com dignidade o aluno sob sua responsabilidade.</p>
        <p className="text-xl md:text-2xl mb-4 font-bold text-black">Para quem é este guia?</p>
        <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">Para professores da Educação Infantil e do Ensino Fundamental que precisam escrever relatórios para alunos com TEA, com mais segurança e modelo alinhado à BNCC.</p>
        <h3 className="text-2xl md:text-3xl font-extrabold mb-6">Bônus exclusivo:</h3>
        <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">Além do passo a passo: tabela de observações pronta para imprimir, técnicas para destravar a escrita, checklist e modelos para uso imediato.</p>
        <p className="text-xl md:text-2xl font-bold text-center mb-6">A partir de hoje, montar um relatório construtivista será tão simples quanto seguir um roteiro com começo, meio e fim.</p>
      </div>
    </section>
  )
}
