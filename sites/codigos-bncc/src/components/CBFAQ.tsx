const faqs = [
  { q: 'Para quem é este guia?', a: 'Para professores da Educação Infantil e Ensino Fundamental que querem dominar os códigos alfanuméricos da BNCC de uma vez por todas.' },
  { q: 'Vou entender mesmo os códigos?', a: 'Sim! O guia explica a lógica por trás de cada código, com exemplos práticos. Você vai entender em minutos o que antes parecia confuso.' },
  { q: 'Como recebo o material?', a: 'Acesso imediato após o pagamento! Você recebe por email o link para acessar o guia digital + as 5 aulas bônus.' },
  { q: 'E se eu não gostar?', a: 'Você tem 7 dias de garantia incondicional. Se não ficar satisfeita, devolvemos 100% do seu dinheiro. Sem perguntas.' },
]

export function CBFAQ() {
  return (
    <section className="bg-gray-50 text-black py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-8">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-5 md:p-6">
              <p className="font-bold text-lg md:text-xl text-black mb-2">{faq.q}</p>
              <p className="text-base md:text-lg text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
