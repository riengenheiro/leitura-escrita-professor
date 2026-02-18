import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  { q: 'Como vou receber o material?', a: 'O acesso é imediato! Após a confirmação do pagamento (PIX em minutos, cartão na hora), você recebe o link de acesso por e-mail e pode entrar na área de membros na mesma hora.' },
  { q: 'Serve para Ensino Fundamental ou só Infantil?', a: 'O material é focado principalmente na Educação Infantil e primeiros anos do Fundamental, alinhado aos Campos de Experiência da BNCC. As ideias podem ser adaptadas conforme a faixa etária.' },
  { q: 'Posso usar no meu planejamento oficial?', a: 'Sim! O conteúdo está totalmente alinhado à BNCC atualizada e pode ser incluído em seu planejamento pedagógico oficial sem problemas.' },
  { q: 'É alinhado à BNCC atualizada?', a: 'Sim, todo o material foi desenvolvido com base na BNCC vigente e nos Campos de Experiência da Educação Infantil.' },
  { q: 'Posso imprimir?', a: 'Sim! O material é em formato digital e você pode imprimir as atividades que precisar para usar na sala de aula.' },
  { q: 'Quanto tempo tenho acesso?', a: 'No plano Avançado, o acesso é vitalício — você mantém o material para sempre e recebe as atualizações incluídas. No plano Básico, consulte as condições na página de checkout.' },
  { q: 'Para quem é esse produto?', a: 'Qualquer professora que sabe a importância de ter ideias para sala de aula, mesmo que começando do zero.' },
  { q: 'Tenho uma garantia?', a: 'Sim! Garantia total de 7 dias. Se não gostar, devolvemos seu investimento.' },
  { q: 'Mesmo começando do Zero esse produto serve para mim?', a: 'Sim, ele traz ideias que você pode implementar no mesmo dia!' },
  { q: 'Formas de pagamento?', a: 'Pix, cartão de crédito e boleto!' },
]

export function DEFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-gray-50 text-black py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Tire suas Dúvidas</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <p className="font-bold text-lg md:text-xl text-black">{faq.q}</p>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0 text-gray-500" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-lg md:text-xl text-gray-600">{faq.a}</p>
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
