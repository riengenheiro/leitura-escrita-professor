import { Star, Quote } from 'lucide-react'

export function RRTestimonials() {
  const testimonials = [
    {
      name: 'Luciana',
      location: 'São Paulo',
      text: 'Muito Obrigada Gua e toda sua equipe, você não imagina como tem me ajudado nesse processo de conhecimento adquirido, que vem de você 🥰❤️',
      rating: 5,
    },
    {
      name: 'Maria Eduarda',
      location: 'Rio de Janeiro',
      text: 'O roteiro é maravilhoso! Me ajudou muito a organizar meus relatórios. Antes eu passava horas sem saber o que escrever, agora flui naturalmente!',
      rating: 5,
    },
    {
      name: 'Carla Santos',
      location: 'Minas Gerais',
      text: 'Material incrível e totalmente alinhado com a BNCC. Me sinto muito mais confiante na hora de elaborar os relatórios. Recomendo demais!',
      rating: 5,
    },
    {
      name: 'Patrícia Lima',
      location: 'Bahia',
      text: 'Eu sempre tive dificuldade com relatórios, mas esse roteiro mudou tudo! Agora consigo fazer em muito menos tempo e com qualidade.',
      rating: 5,
    },
    {
      name: 'Juliana Costa',
      location: 'Paraná',
      text: 'Simplesmente perfeito! O passo a passo é muito claro e objetivo. Finalmente tenho um material confiável para consultar.',
      rating: 5,
    },
    {
      name: 'Fernanda Oliveira',
      location: 'Santa Catarina',
      text: 'A Doutora Gua é sensacional! Esse roteiro me economiza horas de trabalho todo mês. Gratidão por compartilhar esse conhecimento!',
      rating: 5,
    },
  ]

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold mb-6">
            <Star className="w-5 h-5 fill-current" />
            <span className="text-sm uppercase tracking-wide">Depoimentos Reais</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Veja O Que As Professoras{' '}
            <span className="text-blue-600">Estão Dizendo</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Mais de 4.000 professoras já transformaram seus relatórios
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 relative"
            >
              {/* Ícone de aspas */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Estrelas */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Texto do depoimento */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Informações do autor */}
              <div className="border-t border-blue-100 pt-4">
                <p className="font-bold text-gray-900 text-lg">
                  {testimonial.name}
                </p>
                <p className="text-blue-600 text-sm">
                  📍 {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Estatística */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 text-white shadow-xl">
          <p className="text-5xl md:text-6xl font-black mb-4">
            4.000+
          </p>
          <p className="text-2xl md:text-3xl font-bold">
            Professoras Satisfeitas
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-300 fill-current" />
            ))}
            <span className="text-2xl font-bold ml-2">4.9/5.0</span>
          </div>
        </div>
      </div>
    </section>
  )
}
