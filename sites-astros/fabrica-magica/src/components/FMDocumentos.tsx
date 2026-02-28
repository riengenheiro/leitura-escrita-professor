import { FileText, ClipboardList, BookOpen, Users, PenTool, Stethoscope, CheckCircle } from 'lucide-react'

const documentos = [
  { icon: FileText, nome: 'PEI', desc: 'Plano Educacional Individualizado', cor: '#2E7D5B' },
  { icon: ClipboardList, nome: 'PEA', desc: 'Plano de Ensino Adaptado', cor: '#4A90D9' },
  { icon: BookOpen, nome: 'Ficha de Observação', desc: 'Registro detalhado do aluno', cor: '#E8A838' },
  { icon: Users, nome: 'Atividades Adaptadas', desc: 'Personalizadas por necessidade', cor: '#E07A5F' },
  { icon: PenTool, nome: 'Guia de Adaptações Curriculares', desc: 'Alinhado à BNCC', cor: '#9B72CF' },
  { icon: Stethoscope, nome: 'Comunicado aos Pais + Termo', desc: 'Pronto para imprimir e enviar', cor: '#2E7D5B' },
  { icon: FileText, nome: 'Questionário de Sondagem', desc: 'Avaliação inicial completa', cor: '#4A90D9' },
]

export function FMDocumentos() {
  return (
    <section className="bg-warm-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-texto mb-3">
            Olha tudo que você recebe
          </h2>
          <p className="text-lg text-texto-muted max-w-2xl mx-auto mb-2">
            Você preenche <strong className="text-verde">um único questionário</strong> sobre o aluno e recebe todos esses documentos prontos, de uma vez:
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="relative max-w-md w-full">
            <div className="absolute -inset-3 rounded-2xl bg-verde/5 blur-xl"></div>
            <img
              src="/images/fabrica-magica/documentos-pacote.png"
              alt="7 documentos gerados pela Fábrica Mágica: PEI, PEA, Ficha de Observação, Atividades Adaptadas, Guia de Adaptações Curriculares, Comunicado aos Pais e Questionário de Sondagem"
              className="relative w-full rounded-2xl shadow-lg border border-cream-dark"
              loading="lazy"
              width={800}
              height={900}
            />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-verde text-white text-sm font-bold px-4 py-2 rounded-full shadow-md whitespace-nowrap">
              7 documentos de uma vez!
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {documentos.map((doc, i) => (
            <div key={i} className="card-book p-5 flex items-start gap-3 hover:shadow-md transition-shadow">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${doc.cor}12` }}
              >
                <doc.icon className="w-5 h-5" style={{ color: doc.cor }} />
              </div>
              <div>
                <h3 className="font-bold text-texto text-sm">{doc.nome}</h3>
                <p className="text-xs text-texto-light">{doc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 card-book p-6 text-center border-verde/20 border-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-verde" />
            <span className="font-bold text-texto">Funciona para todas as necessidades</span>
          </div>
          <p className="text-sm text-texto-muted">
            TEA (todos os níveis de suporte), TDAH, Deficiência Intelectual, TOD, Altas Habilidades, Deficiência Física, Múltiplas Deficiências e mais.
          </p>
        </div>
      </div>
    </section>
  )
}
