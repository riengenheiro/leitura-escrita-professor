const testimonials = [
  {
    text: 'Nunca mais fiquei horas sem saber como alinhar minhas ideias à BNCC. O guia me salvou no planejamento e ainda deixou a coordenação super feliz.',
    name: 'Juliana Alves',
    role: 'Professora Itu - SP - Ed. Infantil',
  },
  {
    text: 'Comprei porque estava exausta. Já na primeira semana, meus alunos ficaram mais atentos e engajados. Recomendo para toda professora que quer tempo livre e mais resultados.',
    name: 'Simone Almeida',
    role: 'Professora Niteroi - RJ',
  },
  {
    text: 'Antes eu me sentia sobrecarregada e sem criatividade para inovar nas atividades. Com esse guia, tudo ficou mais simples: consegui planejar minhas aulas em menos tempo, recebi elogios da coordenação e, o mais importante, vi meus alunos muito mais envolvidos. Recomendo para toda professora que quer sentir orgulho do próprio trabalho!',
    name: 'Carla Soares',
    role: 'Professora - BA',
  },
]

export function DETestimonials() {
  return (
    <section className="bg-white text-black py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-14">
          Resultados reais de quem já aplicou
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-md flex flex-col">
              <p className="text-lg text-gray-700 mb-6 flex-1 italic leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-bold text-lg">{t.name}</p>
                <p className="text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center bg-yellow-50 rounded-2xl p-8 md:p-12 border-2 border-yellow-200">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 text-yellow-800">
            ESPERA! EU PREPAREI ALGO AINDA MELHOR PARA VOCÊ!
          </h3>
          <p className="text-xl md:text-2xl font-bold text-yellow-700">Temos opções que atendem a todos os gostos!</p>
        </div>
      </div>
    </section>
  )
}
