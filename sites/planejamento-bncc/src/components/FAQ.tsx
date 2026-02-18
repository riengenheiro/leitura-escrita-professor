import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Para quem é esse curso de planejamento?',
      answer:
        'Para qualquer professora ou coordenadora que precise fazer planejamento de aula, mesmo começando do zero. Ideal para Educação Infantil, Ensino Fundamental (anos iniciais e finais) e Educação Especial.',
    },
    {
      question: 'Como e quando terei acesso ao curso e modelos?',
      answer:
        'Você receberá o acesso via e-mail, após a confirmação do pagamento. A liberação é IMEDIATA após a confirmação. Pagamentos via PIX e cartão são confirmados rapidamente. Boleto pode levar de 24 a 72 horas.',
    },
    {
      question: 'Os arquivos são em que formato?',
      answer:
        'As aulas são em vídeo. Os modelos e ebooks são em PDF e Word (editáveis!) - tamanho A4, perfeitos para realizar a impressão se preferir.',
    },
    {
      question: 'Posso solicitar o cancelamento da compra?',
      answer:
        'Sim! Você tem 7 dias de garantia. Para solicitar cancelamento ANTES de assistir as aulas ou baixar os materiais, a devolução será de 100%. Após consumir o conteúdo, aplicam-se as regras do Código de Defesa do Consumidor.',
    },
    {
      question: 'Quanto tempo tenho de acesso ao conteúdo?',
      answer:
        'Você tem acesso vitalício! Pode acessar e revisar o conteúdo sempre que precisar, por tempo ilimitado.',
    },
    {
      question: 'Posso parcelar?',
      answer:
        'Sim! Você pode pagar em até 12x de R$ 19,70 no cartão de crédito (com acréscimo de juros da operadora). Também aceitamos PIX e boleto à vista.',
    },
    {
      question: 'Posso compartilhar o curso?',
      answer:
        'Não! Este material é de uso exclusivo de quem o adquiriu. O compartilhamento ou comercialização é proibido e configura crime previsto no art.184 do código penal brasileiro (3 meses a 4 anos de reclusão ou multa).',
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold mb-4">
              <HelpCircle className="w-5 h-5" />
              <span>Perguntas Frequentes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Tire Suas Dúvidas
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border-2 border-gray-100 overflow-hidden transition-all hover:border-primary-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary-100 to-primary-200 rounded-2xl p-8 text-center border-2 border-primary-300">
            <p className="text-lg text-gray-700">
              Ainda tem dúvidas?{' '}
              <strong className="text-primary-700">
                Você tem 7 dias de garantia para testar sem riscos!
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
