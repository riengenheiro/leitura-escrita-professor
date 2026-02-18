const faqs = [
  { q: 'Para quem é esse produto?', a: 'Qualquer pessoa que sabe a importância de ter ideias para sala de aula, mesmo que começando do zero.' },
  { q: 'Tenho uma garantia?', a: 'Sim! Garantia total de 7 dias.' },
  { q: 'Mesmo começando do Zero esse produto serve para mim?', a: 'Sim, ele traz ideias que você pode implementar no mesmo dia!' },
  { q: 'Formas de pagamento?', a: 'Pix, cartão de crédito, boleto!' },
]

export function DEFAQ() {
  return (
    <section className="bg-gray-50 text-black py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">Tire suas Dúvidas</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 md:p-8">
              <p className="font-bold text-xl md:text-2xl text-black mb-3">{faq.q}</p>
              <p className="text-lg md:text-xl text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
