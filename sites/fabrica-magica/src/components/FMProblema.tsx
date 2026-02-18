import { AlertTriangle, Clock, Brain, Heart, Users, ChevronDown } from 'lucide-react'

export function FMProblema() {
  return (
    <section
      className="text-gray-900 py-16 md:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #F2F2F2 30%, rgba(28, 140, 77, 0.04) 100%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl" style={{ background: '#1D8FF2' }} />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: '#1C8C4D' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: '#F28705' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Abertura */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 text-white shadow-md"
            style={{ background: 'linear-gradient(135deg, #F28705, #e07a04)' }}
          >
            O que a pesquisa com professoras revelou
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
            Você acha que o problema é &quot;não ter tempo&quot;...
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
            Mas a verdade é muito mais profunda que isso.
          </p>
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce" style={{ color: '#1D8FF2' }} />
        </div>

        {/* Dados reais da pesquisa */}
        <div
          className="rounded-3xl p-6 md:p-8 mb-12 border-2 shadow-lg"
          style={{ background: 'linear-gradient(135deg, rgba(29, 143, 242, 0.08) 0%, rgba(28, 140, 77, 0.06) 100%)', borderColor: 'rgba(29, 143, 242, 0.3)' }}
        >
          <p className="text-center text-lg text-gray-700 mb-6">
            Perguntamos a <strong style={{ color: '#1D8FF2' }}>2.200 professoras</strong> sobre suas dificuldades com documentação escolar:
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-2xl p-5 shadow-md border" style={{ borderColor: 'rgba(242, 200, 73, 0.4)' }}>
              <div className="text-4xl font-black mb-1" style={{ color: '#F28705' }}>90%</div>
              <p className="text-gray-600 text-sm">disseram que a faculdade e a pós <strong>NÃO ensinaram</strong> a fazer esses documentos</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-md border" style={{ borderColor: 'rgba(242, 200, 73, 0.4)' }}>
              <div className="text-4xl font-black mb-1" style={{ color: '#F28705' }}>85%</div>
              <p className="text-gray-600 text-sm">nunca fizeram ou precisaram <strong>improvisar</strong> seus documentos</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-md border" style={{ borderColor: 'rgba(242, 200, 73, 0.4)' }}>
              <div className="text-4xl font-black mb-1" style={{ color: '#F28705' }}>#1</div>
              <p className="text-gray-600 text-sm">dúvida mais comum: <strong>&quot;Não sei nem por onde começar&quot;</strong></p>
            </div>
          </div>
        </div>

        {/* O verdadeiro problema */}
        <div
          className="rounded-3xl p-8 md:p-10 mb-12 border-2 shadow-lg"
          style={{ background: '#F2F2F2', borderColor: '#F2C849' }}
        >
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-white font-bold text-sm"
              style={{ background: 'linear-gradient(135deg, #1C8C4D, #167d44)' }}
            >
              <Brain className="w-5 h-5" />
              O Verdadeiro Problema
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Você não sabe fazer. E ninguém te ensinou.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: AlertTriangle, title: 'Você não sabe nem por onde começar', desc: 'Fica horas olhando a tela em branco, sem saber o que escrever' },
              { icon: AlertTriangle, title: 'Você improvisa e fica insegura', desc: '"Será que usei os termos certos?" "A coordenação vai reprovar?" "Está profissional?"' },
              { icon: Clock, title: 'Você perde tempo justamente por não saber', desc: 'Porque quando você não sabe fazer, até tarefas simples viram pesadelo' },
              { icon: Heart, title: 'Sua saúde mental sofre', desc: 'Ansiedade de entregar algo errado, medo de ser julgada, insônia pensando no que escrever' },
              { icon: Users, title: 'Sua família paga o preço', desc: 'Fins de semana perdidos tentando adivinhar como fazer, tempo com os filhos sacrificado' },
              { icon: Brain, title: 'E o pior: você sabe que tem capacidade', desc: 'Mas ninguém te deu as ferramentas. Nem na faculdade. Nem na pós. Nem na escola.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm border" style={{ borderColor: 'rgba(29, 143, 242, 0.2)' }}>
                <item.icon className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#F28705' }} />
                <div>
                  <p className="font-bold text-gray-900">{item.title}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* A mentira / falsas soluções */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 border-2 shadow-md" style={{ borderColor: 'rgba(242, 135, 5, 0.3)' }}>
            <h3 className="text-xl font-bold text-gray-800 mb-4">❌ O que o mercado te diz:</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700">❌ &quot;Faça mais uma pós-graduação...&quot;</li>
              <li className="text-lg text-gray-700">❌ &quot;Compre mais cursos teóricos...&quot;</li>
              <li className="text-lg text-gray-700">❌ &quot;Baixe mais templates e modelos...&quot;</li>
            </ul>
            <p className="text-gray-600">
              E você se sente <strong style={{ color: '#F28705' }}>culpada</strong>. Pensa que não é boa o suficiente. Que as outras professoras conseguem e você não.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 shadow-md" style={{ borderColor: 'rgba(28, 140, 77, 0.4)' }}>
            <h3 className="text-xl font-bold text-gray-800 mb-4">📊 O que a pesquisa mostra:</h3>
            <p className="text-lg text-gray-700 mb-4">
              A maioria das 2.200 professoras pesquisadas <strong>já tem pós-graduação</strong>.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Mas <strong style={{ color: '#1C8C4D' }}>nenhuma aprendeu a fazer PDI, PEI ou relatórios na prática</strong> em nenhum curso.
            </p>
            <p className="text-lg text-gray-700">
              O problema <strong>nunca foi você</strong>. O problema é que ninguém te deu a ferramenta certa.
            </p>
          </div>
        </div>

        {/* Seção para Coordenadoras */}
        <div
          className="rounded-2xl p-8 mb-12 border-2 shadow-md"
          style={{ background: 'linear-gradient(135deg, rgba(29, 143, 242, 0.08) 0%, rgba(28, 140, 77, 0.06) 100%)', borderColor: '#1D8FF2' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ background: 'linear-gradient(135deg, #1D8FF2, #1a7ed9)' }}>
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold" style={{ color: '#1D8FF2' }}>Coordenadora ou Diretora? Isso também é pra você.</h3>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            25% das profissionais pesquisadas são <strong>coordenadoras e diretoras</strong> que precisam:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-2">
              <span className="font-bold" style={{ color: '#1C8C4D' }}>•</span>
              <span>Orientar professoras que <strong>não sabem</strong> fazer PDI/PEI</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold" style={{ color: '#1C8C4D' }}>•</span>
              <span>Garantir que toda a <strong>documentação da escola</strong> esteja em dia</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold" style={{ color: '#1C8C4D' }}>•</span>
              <span>Ter <strong>modelos profissionais</strong> para padronizar a equipe</span>
            </div>
          </div>
        </div>

        {/* Mensagem de empatia - ponte para solução */}
        <div
          className="rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1D8FF2 0%, #1a7ed9 50%, #1C8C4D 100%)',
            boxShadow: '0 8px 32px rgba(29, 143, 242, 0.35)',
          }}
        >
          <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 70% 30%, #F2C849 0%, transparent 50%)' }} />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Não é sua culpa.</h3>
            <p className="text-xl text-white/95 max-w-2xl mx-auto mb-4">
              Na faculdade não ensinam. Na pós não ensinam. No dia a dia da escola, ninguém te orienta.
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-4">Das 2.200 professoras pesquisadas:</p>
            <ul className="text-lg text-white/90 max-w-xl mx-auto mb-6 space-y-1 text-left list-disc list-inside">
              <li>44% não têm experiência nenhuma em PDI/PEI</li>
              <li>22% precisaram improvisar (porque ninguém ensinou)</li>
              <li>90% confirmaram: &quot;A faculdade não preparou para isso&quot;</li>
            </ul>
            <p className="text-lg font-semibold max-w-2xl mx-auto mb-4 text-white">
              Você não é a única. Você não está sozinha.
            </p>
            <p className="text-lg font-semibold max-w-2xl mx-auto" style={{ color: '#F2C849' }}>
              A boa notícia? A Fábrica Mágica te ensina fazendo — não em meses, não em anos. Em minutos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
