import { Check, Crown, Zap, Shield } from 'lucide-react'

const Pricing = () => {
  const mainFeatures = [
    '✅ Curso Completo de Planejamento (Valor: R$ 947)',
    '40+ Modelos de Planejamento em Word e PDF',
    'Videoaulas completas para todas as etapas',
    'Planejamento para Educação Infantil (bebês, crianças pequenas e bem pequenas)',
    'Planejamento para Ensino Fundamental (anos iniciais e finais)',
    'Planejamento para Alfabetização',
    'Planejamento para Educação Especial e Inclusão',
    'Entendendo a BNCC e códigos alfanuméricos',
    'Modelos de Avaliação e Relatórios',
    'Cartas de Intenção para diferentes perfis',
    'Roteiros de Planejamento Anual',
    'Projetos Contextualizados e PDI',
  ]

  const bonuses = [
    {
      title: '🎁 BÔNUS 1: Semana Pedagógica Online',
      value: 'R$ 397',
      items: [
        'Planejamento de Aula na BNCC',
        'Projeto na BNCC',
        'Primeira Semana: Adaptação e Acolhimento',
        'Plano de Desenvolvimento Individual (PDI)',
        'Sondagem Inicial e Resultados',
      ],
    },
    {
      title: '🎁 BÔNUS 2: A Sexualidade no Autismo',
      value: 'R$ 97',
      items: [
        'Aula completa de 1h58min',
        'Estratégias práticas de sala de aula',
        'Perguntas e respostas',
      ],
    },
    {
      title: '🎁 BÔNUS 3: Como Usar PNL na Sala de Aula',
      value: 'R$ 297',
      items: [
        'Técnicas de Programação Neurolinguística',
        'Como motivar e influenciar positivamente alunos',
        'Linguagem corporal e expressão facial',
        'Comunicação eficaz em sala de aula',
      ],
    },
  ]

  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Veja Tudo O Que Você Vai Receber
            </h2>
            <p className="text-xl text-gray-700">
              Investimento que se paga na <strong className="text-primary-600">primeira semana de uso</strong>
            </p>
          </div>

          {/* Plano Único Completo */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-500">
              <div className="bg-gradient-to-r from-accent-400 to-accent-500 text-white text-center py-3 font-bold flex items-center justify-center gap-2">
                <Crown className="w-6 h-6" />
                CURSO COMPLETO + 3 BÔNUS EXCLUSIVOS
              </div>

              <div className="bg-white p-8 md:p-10">
                {/* Preço */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <span className="text-gray-500 line-through text-2xl">De R$ 1.738,00</span>
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full text-base font-bold">
                      88% OFF
                    </span>
                  </div>
                  <div className="text-6xl font-black text-primary-600 mb-2">R$ 197</div>
                  <div className="text-xl text-gray-700 font-semibold mb-1">
                    ou 12x de R$ 19,70 no cartão
                  </div>
                  <p className="text-gray-600 italic">Menos de R$ 1 por dia!</p>
                </div>

                {/* Curso Principal */}
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-primary-600">📚</span> Curso Completo de Planejamento
                  </h3>
                  <ul className="space-y-3">
                    {mainFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bônus */}
                <div className="space-y-6 mb-8">
                  {bonuses.map((bonus, index) => (
                    <div key={index} className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-xl p-6 border-2 border-accent-200">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-xl font-bold text-gray-900">{bonus.title}</h4>
                        <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                          {bonus.value}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {bonus.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-accent-600">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Valor Total */}
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 mb-8 border-2 border-primary-200">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">Valor Total de Tudo:</div>
                    <div className="text-3xl font-black text-gray-900 mb-1">R$ 1.738,00</div>
                    <div className="text-lg text-primary-700 font-bold">
                      Você paga apenas R$ 197 hoje!
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold text-xl py-5 px-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 animate-pulse-slow">
                  <Zap className="inline w-6 h-6 mr-2" />
                  GARANTIR ACESSO COMPLETO AGORA
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                  ✓ Acesso imediato após pagamento • Garantia de 7 dias
                </p>
              </div>
            </div>
          </div>

          {/* Garantia */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-primary-100 to-primary-200 rounded-2xl p-8 text-center border-2 border-primary-300">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-lg">
                <Shield className="w-10 h-10 text-primary-600" />
              </div>
              <div className="text-3xl font-black text-gray-900 mb-2">
                GARANTIA DE 7 DIAS
              </div>
              <p className="text-gray-700 text-lg">
                <strong>100% de satisfação garantida</strong> ou seu dinheiro de volta!
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-primary-600 text-xl">✓</span>
              <span>Compra 100% segura</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <span className="text-primary-600 text-xl">✓</span>
              <span>Acesso imediato</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <span className="text-primary-600 text-xl">✓</span>
              <span>Suporte incluído</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
