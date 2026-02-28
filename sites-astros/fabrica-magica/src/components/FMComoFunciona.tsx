import { ClipboardCheck, FileText, Printer, ArrowRight } from 'lucide-react'

const passos = [
  {
    num: '1',
    icon: ClipboardCheck,
    titulo: 'Preencha o questionário',
    desc: 'São perguntas simples sobre o aluno: nome, idade, o que você observa em sala. Você só preenche como preencheria qualquer ficha escolar.',
    cor: '#2E7D5B',
    destaque: 'Sem termos técnicos complicados',
  },
  {
    num: '2',
    icon: FileText,
    titulo: 'Os documentos ficam prontos',
    desc: 'Suas respostas viram documentos completos, com termos técnicos corretos e alinhamento à BNCC. Tudo organizado e profissional.',
    cor: '#4A90D9',
    destaque: 'Automático — você não precisa formatar nada',
  },
  {
    num: '3',
    icon: Printer,
    titulo: 'Use na escola',
    desc: 'Imprima, entregue à coordenação, envie aos pais. Seus documentos de inclusão prontos, sem insegurança e sem levar trabalho pra casa.',
    cor: '#E8A838',
    destaque: 'Pronto para imprimir ou enviar',
  },
]

export function FMComoFunciona() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-texto mb-3">
            Como funciona
          </h2>
          <p className="text-lg text-texto-muted">
            Três passos. É simples como preencher uma ficha.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {passos.map((passo, i) => (
            <div key={passo.num} className="relative text-center">
              <div className="relative inline-flex items-center justify-center mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: `${passo.cor}12` }}
                >
                  <passo.icon className="w-7 h-7" style={{ color: passo.cor }} />
                </div>
                <span
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center"
                  style={{ background: passo.cor }}
                >
                  {passo.num}
                </span>
              </div>
              <h3 className="text-lg font-bold text-texto mb-2">{passo.titulo}</h3>
              <p className="text-sm text-texto-muted leading-relaxed max-w-xs mx-auto mb-3">{passo.desc}</p>
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: `${passo.cor}12`, color: passo.cor }}
              >
                {passo.destaque}
              </span>

              {i < passos.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-10 z-10">
                  <ArrowRight className="w-6 h-6 text-cream-dark" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 text-center card-book p-6 border-2 border-dashed border-verde/20 max-w-2xl mx-auto">
          <p className="text-texto-muted">
            <strong className="text-verde">Dica:</strong> Se você sabe preencher a ficha de matrícula de um aluno, você sabe usar a Fábrica Mágica. É a mesma coisa — só que no final, seus documentos saem prontos.
          </p>
        </div>
      </div>
    </section>
  )
}
