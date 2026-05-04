import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  { q: 'Como vou receber o material?', a: 'O acesso é imediato! Após a confirmação do pagamento (PIX em minutos, cartão na hora), você recebe o link de acesso por e-mail e pode baixar os modelos na mesma hora.' },
  { q: 'Para quem é esse material?', a: 'Para professoras, pedagogas, psicopedagogas e neuropsicopedagogas que trabalham com leitura e escrita em sala de aula, apoio pedagógico ou acompanhamento individualizado.' },
  { q: 'Os modelos são prontos ou preciso editar?', a: 'São modelos de referência que você adapta à realidade de cada aluno. Eles trazem a estrutura, a linguagem técnica adequada e os campos corretos — você só preenche com o que observou.' },
  { q: 'Serve para qualquer ano escolar?', a: 'Sim! Os modelos de Ficha de Observação, Sondagem, Relatórios e Adaptações podem ser usados em Educação Infantil e nos primeiros anos do Ensino Fundamental.' },
  { q: 'Posso usar os documentos oficialmente?', a: 'Sim. Os modelos de PAEE e Estudo de Caso seguem a Resolução SEDUC Nº 129/2025 e os outros documentos são adequados para uso em reuniões pedagógicas, encaminhamentos e prontuários.' },
  { q: 'Quantos modelos estão inclusos no Completo?', a: 'São 40 modelos: 5 para cada uma das 8 categorias de documentos — Ficha de Observação, Sondagem, PAEE, Adaptações Curriculares, Estudo de Caso, Relatório de Desenvolvimento, Encaminhamento e API.' },
  { q: 'Mesmo sendo iniciante, esse material serve para mim?', a: 'Sim! Os modelos foram pensados para quem ainda não tem segurança na escrita técnica. Você observa, anota o que viu e usa o modelo para estruturar o documento de forma profissional.' },
  { q: 'Tenho garantia?', a: 'Sim! Garantia total de 7 dias. Se não gostar, devolvemos seu investimento sem perguntas.' },
  { q: 'Formas de pagamento?', a: 'Pix, cartão de crédito e boleto!' },
]

export function LEFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-gray-50 text-black py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Tire suas Dúvidas</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">
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
