import { Sparkles, MessageSquare, Cpu, FileCheck, ArrowRight } from 'lucide-react'

export function FMSolucao() {
  return (
    <section
      className="text-gray-900 py-16 md:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(165deg, rgba(28, 140, 77, 0.08) 0%, #F2F2F2 25%, #ffffff 50%, rgba(242, 200, 73, 0.08) 75%, rgba(29, 143, 242, 0.06) 100%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 rounded-full opacity-25 blur-3xl" style={{ background: '#F2C849' }} />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: '#1C8C4D' }} />
        <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: '#1D8FF2' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl" style={{ background: '#F28705' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-bold shadow-lg mb-6"
            style={{ background: 'linear-gradient(135deg, #F2C849 0%, #F28705 100%)', color: '#1a1a1a' }}
          >
            <Sparkles className="w-5 h-5" />
            A solução que você tanto esperava!
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
            E se existisse uma ferramenta que te ENSINASSE a fazer?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            E se você pudesse <strong style={{ color: '#1C8C4D' }}>APRENDER fazendo</strong>, sem medo de errar?
          </p>
        </div>

        {/* Nome da solução — destaque de celebração */}
        <div
          className="text-center mb-16 py-8 px-6 rounded-3xl border-2"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(242,242,242,0.95) 100%)', borderColor: '#F2C849', boxShadow: '0 8px 32px rgba(28, 140, 77, 0.15)' }}
        >
          <h3 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#1C8C4D' }}>
            FÁBRICA MÁGICA
          </h3>
          <p className="text-2xl text-gray-700 font-semibold">O Método que Te Ensina Enquanto Cria</p>
        </div>

        {/* Os 3 passos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 border-2 h-full shadow-lg" style={{ borderColor: '#1C8C4D' }}>
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg" style={{ background: 'linear-gradient(135deg, #1C8C4D, #167d44)' }}>1</div>
              <div className="mt-6 flex justify-center mb-6">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(28, 140, 77, 0.15)' }}>
                  <MessageSquare className="w-10 h-10" style={{ color: '#1C8C4D' }} />
                </div>
              </div>
              <h4 className="text-xl font-bold text-center mb-3 text-gray-900">A Ferramenta Te Ensina Perguntando</h4>
              <p className="text-gray-600 text-center text-sm">
                Você responde perguntas simples sobre seu aluno. Cada pergunta te mostra <strong style={{ color: '#1C8C4D' }}>EXATAMENTE</strong> o que você precisa observar e registrar. É como ter uma mentora ao seu lado te guiando.
              </p>
            </div>
            <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
              <ArrowRight className="w-8 h-8" style={{ color: '#1D8FF2' }} />
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 border-2 h-full shadow-lg" style={{ borderColor: '#F2C849' }}>
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg" style={{ background: 'linear-gradient(135deg, #F28705, #e07a04)' }}>2</div>
              <div className="mt-6 flex justify-center mb-6">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(242, 200, 73, 0.25)' }}>
                  <Cpu className="w-10 h-10" style={{ color: '#F28705' }} />
                </div>
              </div>
              <h4 className="text-xl font-bold text-center mb-3 text-gray-900">Você Aprende Enquanto Faz</h4>
              <p className="text-gray-600 text-center text-sm">
                A Fábrica Mágica organiza suas respostas e te mostra como um PDI profissional deve ser estruturado. Termos técnicos corretos, alinhamento à BNCC, tudo automaticamente. Você <strong style={{ color: '#F28705' }}>VÊ</strong> como deve ser feito.
              </p>
            </div>
            <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
              <ArrowRight className="w-8 h-8" style={{ color: '#F2C849' }} />
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 border-2 h-full shadow-lg" style={{ borderColor: '#1C8C4D' }}>
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg" style={{ background: 'linear-gradient(135deg, #1C8C4D, #167d44)' }}>3</div>
              <div className="mt-6 flex justify-center mb-6">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(28, 140, 77, 0.15)' }}>
                  <FileCheck className="w-10 h-10" style={{ color: '#1C8C4D' }} />
                </div>
              </div>
              <h4 className="text-xl font-bold text-center mb-3 text-gray-900">Documento Pronto + Você Aprendeu!</h4>
              <p className="text-gray-600 text-center text-sm">
                Seu PDI, PEI ou relatório sai completo, personalizado e profissional. E o melhor: agora você <strong style={{ color: '#1C8C4D' }}>SABE</strong> fazer. Na próxima vez, estará ainda mais segura.
              </p>
            </div>
          </div>
        </div>

        {/* Resultados — celebração */}
        <div
          className="rounded-3xl p-8 md:p-12 border-2 shadow-xl"
          style={{ background: 'linear-gradient(135deg, #ffffff 0%, rgba(28, 140, 77, 0.06) 100%)', borderColor: '#1C8C4D' }}
        >
          <h4 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: '#1C8C4D' }}>
            O resultado? Você finalmente tem a solução!
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {[
              'Você APRENDE a fazer PDI, PEI e relatórios profissionais',
              'Sem medo de errar — termos técnicos e BNCC já vêm certos',
              'Funciona mesmo se você nunca fez um documento desses na vida',
              'A ferramenta te guia passo a passo, você não fica perdida',
              'Documentos personalizados para TEA, TDAH, DI e todas as necessidades',
              'E ainda por cima: em minutos ao invés de horas ou dias',
              'Sem levar insegurança e trabalho pra casa',
            ].map((txt, i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <span className="text-lg text-gray-700">✅ {txt}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="#oferta"
              className="inline-flex items-center gap-3 px-10 py-5 text-white text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-lg"
              style={{ background: 'linear-gradient(135deg, #1C8C4D 0%, #167d44 100%)', boxShadow: '0 4px 20px rgba(28, 140, 77, 0.4)' }}
            >
              <Sparkles className="w-7 h-7" />
              Ver planos e preços
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
