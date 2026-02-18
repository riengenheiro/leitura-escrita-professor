import { useState } from 'react'
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    q: 'Nunca fiz um PDI/PEI na vida. A Fábrica Mágica funciona pra mim?',
    a: 'Sim! E na verdade foi feita JUSTAMENTE pra você. Dos nossos dados de pesquisa com 2.200 professoras: • 44% nunca tinham feito um PDI/PEI • 22% precisaram improvisar (também não sabiam direito) • 90% disseram que a faculdade não ensinou. A Fábrica Mágica te ENSINA fazendo. Você responde perguntas simples sobre seu aluno e a ferramenta te guia em cada etapa, te mostrando exatamente o que precisa ser observado e como estruturar um documento profissional. Cada PDI que você cria te ensina mais. É como ter uma mentora te guiando. Você não precisa de experiência prévia. Você VAI GANHAR experiência usando.',
  },
  {
    q: 'Usar IA não é trapacear?',
    a: 'A Fábrica Mágica é uma FERRAMENTA, assim como você usa computador, caneta, quadro... A ferramenta te ajuda a organizar e estruturar o que VOCÊ observou. O conhecimento é seu. A observação é sua. A ferramenta só te ajuda a colocar no papel de forma profissional.',
  },
  {
    q: 'O documento não fica genérico?',
    a: 'Não! Porque você responde perguntas específicas sobre CADA aluno. A ferramenta personaliza com base no que VOCÊ informou. Cada PDI, PEI ou planejamento sai único, individual, específico para cada caso — seja TEA, TDAH, DI ou qualquer outra necessidade.',
  },
  {
    q: 'Funciona pra alunos com TEA, TDAH e Deficiência Intelectual?',
    a: 'Sim! Na verdade, essa é a maior demanda que recebemos. A ferramenta gera documentos personalizados para cada tipo de necessidade: autismo (todos os níveis de suporte), TDAH, TOD, deficiência intelectual, múltiplas deficiências e muito mais. Cada documento sai adaptado ao perfil específico do aluno.',
  },
  {
    q: 'Faz PAEE e relatórios para médicos também?',
    a: 'Sim! Além do PDI e PEI, a Fábrica Mágica gera PAEE (Plano de Atendimento Educacional Especializado), relatórios descritivos, relatórios circunstanciados para encaminhamento médico, pareceres, adaptações curriculares e planejamentos alinhados à BNCC.',
  },
  {
    q: 'Sou coordenadora/diretora. Posso usar para orientar minha equipe?',
    a: 'Com certeza! Muitas coordenadoras e diretoras usam a Fábrica Mágica para padronizar a documentação da escola inteira. Você pode gerar modelos de referência para orientar seus professores, garantindo qualidade e agilidade na entrega dos documentos.',
  },
  {
    q: 'E se eu não souber usar tecnologia?',
    a: 'A Fábrica Mágica foi feita pra ser simples. Se você sabe usar WhatsApp, você sabe usar a ferramenta. E ainda tem suporte pra te ajudar.',
  },
  {
    q: 'Já fiz pós-graduação e não aprendi isso. Essa ferramenta é diferente?',
    a: 'Completamente diferente! Não é um curso teórico. É uma ferramenta PRÁTICA que gera seus documentos em minutos. Das 2.200 professoras que pesquisamos, a maioria já tinha pós e disse que nunca aprendeu a fazer esses documentos em nenhum curso. A Fábrica Mágica resolve isso de forma imediata.',
  },
  {
    q: 'E a proteção dos dados dos meus alunos?',
    a: 'Essa é uma preocupação legítima. A ferramenta foi desenvolvida seguindo as normas de proteção de dados (LGPD). Suas informações são seguras.',
  },
  {
    q: 'Posso testar antes de comprar?',
    a: 'Você tem 7 dias de garantia incondicional. Assine, use à vontade e, se não gostar, devolvemos seu dinheiro. Sem perguntas. O risco é todo nosso.',
  },
  {
    q: 'Eu não tenho dinheiro agora...',
    a: 'Pensa comigo: quanto vale ter seus finais de semana de volta? O Plano Anual custa apenas R$ 9,90 por mês — menos que um cafezinho! E se preferir o Premium, pode parcelar em até 12x de R$ 29,70.',
  },
  {
    q: 'E se não funcionar pra mim?',
    a: 'Você tem 7 dias pra testar. Se não gostar, devolvo seu dinheiro. Simples assim. O risco é todo meu.',
  },
  {
    q: 'Qual a diferença entre o Plano Anual e o Premium?',
    a: 'O Plano Anual (R$ 9,90/mês) te dá 75 créditos, suporte, templates e ebooks. O Premium (R$ 297) te dá 120 créditos + 2 cursos completos com certificado (Relatórios 90h + BNCC 60h). Se você quer a ferramenta completa com formação, o Premium é o ideal!',
  },
  {
    q: 'Como e quando terei acesso?',
    a: 'Você receberá o acesso via e-mail, após a confirmação do pagamento. A liberação é imediata para pagamentos via Pix ou cartão de crédito. Pagamentos via boleto podem levar de 24 a 72 horas.',
  },
  {
    q: 'Quais as formas de pagamento?',
    a: 'Pix, cartão de crédito e boleto. A opção de parcelamento só é possível por cartão de crédito.',
  },
]

export function FMFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      className="text-gray-900 py-16 md:py-24"
      style={{ background: 'linear-gradient(180deg, #F2F2F2 0%, #ffffff 50%, rgba(29, 143, 242, 0.04) 100%)' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 text-white shadow-md"
            style={{ background: 'linear-gradient(135deg, #1D8FF2, #1a7ed9)' }}
          >
            <HelpCircle className="w-5 h-5" />
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Perguntas que Você Pode Estar Tendo
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md border-2 overflow-hidden transition-all duration-200"
                style={{ borderColor: isOpen ? '#1C8C4D' : 'rgba(29, 143, 242, 0.2)' }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6 hover:bg-gray-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-lg md:text-xl text-gray-800 pr-4">{faq.q}</span>
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: isOpen ? '#1C8C4D' : '#F2F2F2' }}
                  >
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-white" />
                    ) : (
                      <ChevronDown className="w-5 h-5" style={{ color: '#1D8FF2' }} />
                    )}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg border-t border-gray-100 pt-4">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
