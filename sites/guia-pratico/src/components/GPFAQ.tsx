const faqs = [
  {
    q: 'Como e quando terei acesso aos materiais?',
    a: 'Você receberá o acesso via e-mail, após a confirmação do pagamento. A liberação é imediata APÓS A CONFIRMAÇÃO DO PAGAMENTO. Obs: a confirmação de compras efetuadas via pix, cartão de crédito são mais rápidas que pagamentos via boleto (a compensação bancária varia de 24 a 72 horas)',
  },
  {
    q: 'Quais as formas de pagamentos?',
    a: 'Pix, cartão de crédito e boleto. *A opção de parcelamento só é possível apenas por cartão de crédito, com acréscimo de juros.',
  },
  {
    q: 'Os arquivos são em que formato?',
    a: 'Os resumos e mapas mentais são configurados em PDF – tamanho A4 (perfeitos para realizar a impressão, se assim preferir).',
  },
  {
    q: 'Posso compartilhar?',
    a: 'Não! Este material é de uso exclusivo daquele que o adquiriu. Portanto, fica proibido o compartilhamento e/ou a comercialização do mesmo, visto que se trata de um crime previsto no art.184 do código penal brasileiro, com pena de 3 meses a 4 anos de reclusão ou multa.',
  },
  {
    q: 'Posso solicitar o cancelamento da compra?',
    a: 'Para fins de cancelamento, o download de qualquer arquivo é considerado como consumo de um produto físico. Em caso de solicitação de cancelamento por culpa exclusiva do CONTRATANTE, o valor ressarcido obedecerá à proporção do valor dos arquivos cujo download ainda não tenha sido realizado, diminuído de 50% do valor total da compra, referentes aos tributos e despesas administrativas. Em qualquer caso, se todo o CONTEÚDO já tiver tido seu download realizado pela CONTRATADA, não será possível efetuar o cancelamento. Fica ressalvada a hipótese de arrependimento, previsto no Código do Consumidor, assim a devolução do valor pago deverá ser requerida no prazo máximo de até 07 (sete) dias corridos após a data da compra.',
  },
]

export function GPFAQ() {
  return (
    <section className="bg-white text-black py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          Perguntas frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl shadow-md p-6 md:p-8 border-2 border-gray-200">
              <p className="font-bold text-xl md:text-2xl text-red-700 mb-3">{faq.q}</p>
              <p className="text-lg text-gray-700 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-center">
          <a
            href="https://doutoraescola.com.br/privacidade/privacidade.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 underline font-medium"
          >
            POLÍTICA DE PRIVACIDADE
          </a>
          <span className="text-gray-400">•</span>
          <a
            href="https://doutoraescola.com.br/privacidade/termo.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 underline font-medium"
          >
            TERMOS DE USO
          </a>
          <span className="text-gray-400">•</span>
          <a
            href="https://api.whatsapp.com/send?phone=5519989863544"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 underline font-medium"
          >
            CONTATO
          </a>
        </div>
      </div>
    </section>
  )
}
