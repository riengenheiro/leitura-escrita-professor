import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Preciso instalar alguma coisa no computador?',
    a: 'Não. A Fábrica Mágica funciona direto no navegador — aquele que você já usa para acessar o Google ou o WhatsApp Web. Funciona no computador, no celular e no tablet. Não precisa instalar nada.',
  },
  {
    q: 'Eu não entendo muito de tecnologia. Vou conseguir usar?',
    a: 'Sim! Se você sabe preencher uma ficha de matrícula ou responder um formulário, você sabe usar. São perguntas simples sobre o aluno — nome, idade, o que você observa em sala. Você responde e os documentos ficam prontos.',
  },
  {
    q: 'Nunca fiz um PDI ou PEI na vida. Funciona pra mim?',
    a: 'Funciona sim, e foi feita justamente pra você. Você não precisa saber fazer o documento — você só preenche as informações do aluno. Os documentos saem com termos técnicos corretos, alinhados à BNCC e prontos pra entregar.',
  },
  {
    q: 'O documento não fica genérico, igual pra todo mundo?',
    a: 'Não. Cada documento é personalizado com base nas suas respostas sobre cada aluno. Nome, necessidades, o que você observa, tudo aparece no documento final. Nenhum documento é igual ao outro.',
  },
  {
    q: 'Funciona para TEA, TDAH e Deficiência Intelectual?',
    a: 'Sim. Funciona para TEA (todos os níveis de suporte), TDAH, TOD, Deficiência Intelectual, Altas Habilidades, Deficiência Física, Múltiplas Deficiências e mais.',
  },
  {
    q: 'E se eu não gostar?',
    a: 'Você tem 7 dias pra experimentar. Se não gostar, é só pedir o reembolso e devolvemos todo o seu dinheiro. Sem perguntas, sem burocracia.',
  },
  {
    q: 'Quantos documentos eu posso criar?',
    a: 'No plano Essencial, você cria até 75 documentos por ano. No plano Completo, até 120 documentos. Para a maioria das professoras, isso é mais que suficiente para o ano inteiro.',
  },
  {
    q: 'Como recebo o acesso?',
    a: 'Por e-mail, logo após o pagamento. Se pagar com Pix ou cartão, o acesso é imediato. Se preferir boleto, pode levar de 24 a 72 horas.',
  },
]

export function FMFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-texto mb-3">
            Perguntas frequentes
          </h2>
          <p className="text-texto-muted">
            Tire suas dúvidas antes de decidir.
          </p>
        </div>

        <div className="card-book divide-y divide-cream-dark overflow-hidden">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 hover:bg-cream transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-texto text-sm">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-texto-light transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <p className="text-texto-muted text-sm leading-relaxed px-6 pb-5 pr-12">
                    {faq.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center card-book p-6">
          <p className="text-sm text-texto-muted mb-3">Ainda tem alguma dúvida?</p>
          <a
            href="https://api.whatsapp.com/send?phone=5519989863544"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-verde font-semibold text-sm hover:underline"
          >
            Fale com a gente no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
