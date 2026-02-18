import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Professora há 15 anos',
      avatar: '👩‍🏫',
      text: 'Economizei mais de 8 horas por semana! Os modelos são práticos e realmente funcionam. Recomendo para todos os professores.',
      rating: 5,
    },
    {
      name: 'Ana Costa',
      role: 'Coordenadora Pedagógica',
      avatar: '👩‍💼',
      text: 'Finalmente consegui fazer um planejamento alinhado à BNCC sem stress. O método é simples e eficaz!',
      rating: 5,
    },
    {
      name: 'Carla Santos',
      role: 'Professora iniciante',
      avatar: '👩‍🎓',
      text: 'Mesmo sendo iniciante, consegui criar meu planejamento completo. Os modelos são um divisor de águas!',
      rating: 5,
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Veja os Resultados de Quem Já Usa
            </h2>
            <p className="text-xl text-gray-700">
              Mais de <strong className="text-primary-600">2.000 professores</strong> já transformaram seu planejamento
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-primary-200 mb-4" />

                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-white text-white" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-4xl font-black">4.9/5</div>
                <div className="text-lg opacity-95">847 avaliações verificadas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
