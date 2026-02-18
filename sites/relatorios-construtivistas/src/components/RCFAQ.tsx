const faqs = [
  { q: 'Para quem e esse produto?', a: 'Qualquer pessoa que sabe a importancia de fazer um relatorio, mesmo que comecando do zero.' },
  { q: 'Tenho uma garantia?', a: 'Sim! Garantia total de 7 dias.' },
  { q: 'Mesmo comecando do Zero esse produto serve para mim?', a: 'Sim, ele e um passo a passo, voce pode implementar no mesmo dia!' },
  { q: 'Formas de pagamento?', a: 'Pix, cartao de credito, boleto!' },
]

export function RCFAQ() {
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
