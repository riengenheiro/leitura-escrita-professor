import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    text: 'Nunca mais fiquei horas sem saber como alinhar minhas ideias à BNCC. O guia me salvou no planejamento e ainda deixou a coordenação super feliz.',
    name: 'Juliana Alves',
    role: 'Professora Itu - SP - Ed. Infantil',
    initials: 'JA',
  },
  {
    text: 'Comprei porque estava exausta. Já na primeira semana, meus alunos ficaram mais atentos e engajados. Recomendo para toda professora que quer tempo livre e mais resultados.',
    name: 'Simone Almeida',
    role: 'Professora Niterói - RJ',
    initials: 'SA',
  },
  {
    text: 'Antes eu me sentia sobrecarregada e sem criatividade para inovar nas atividades. Com esse guia, tudo ficou mais simples: consegui planejar minhas aulas em menos tempo, recebi elogios da coordenação e, o mais importante, vi meus alunos muito mais envolvidos. Recomendo para toda professora que quer sentir orgulho do próprio trabalho!',
    name: 'Carla Soares',
    role: 'Professora - BA',
    initials: 'CS',
  },
  {
    text: 'O material é excelente! As ideias são práticas e posso usar imediatamente na sala. Minhas crianças amaram as atividades.',
    name: 'Patrícia Mendes',
    role: 'Professora Campinas - SP',
    initials: 'PM',
  },
  {
    text: 'Vale muito a pena investir no plano completo. Os bônus complementam perfeitamente o livro e me deram uma base sólida para o ano todo.',
    name: 'Fernanda Lima',
    role: 'Professora Curitiba - PR',
    initials: 'FL',
  },
  {
    text: 'Alinhado à BNCC atualizada, organizado e fácil de usar. Transformou meu planejamento!',
    name: 'Beatriz Nascimento',
    role: 'Professora Porto Alegre - RS',
    initials: 'BN',
  },
]

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 mb-2" style={{ color: '#F2C849' }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
  )
}

export function DETestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => setActiveIndex(i => (i + 1) % testimonials.length)
  const prev = () => setActiveIndex(i => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section
      className="text-black py-16 md:py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #F2F2F2 40%, rgba(242, 200, 73, 0.06) 100%)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-72 h-72 rounded-full opacity-15 blur-3xl" style={{ background: '#F2C849' }} />
        <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: '#1C8C4D' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <span
          className="inline-block w-full text-center px-4 py-2 rounded-full text-sm font-bold mb-6 text-white shadow-md"
          style={{ background: 'linear-gradient(135deg, #F2C849, #F28705)' }}
        >
          Quem já encontrou a solução ama!
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4 text-gray-900">
          Resultados reais de quem já aplicou
        </h2>
        <div className="flex items-center justify-center gap-2 mb-14 flex-wrap">
          <div className="flex gap-0.5" style={{ color: '#F2C849' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="text-gray-700 font-semibold">4.9/5</span>
          <span className="text-gray-500">— Avaliado por 2.000+ professoras</span>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg flex flex-col border-2" style={{ borderColor: 'rgba(28, 140, 77, 0.25)' }}>
              <StarRating />
              <p className="text-lg text-gray-700 mb-6 flex-1 italic leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-md" style={{ background: 'linear-gradient(135deg, #1C8C4D, #167d44)' }}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2" style={{ borderColor: 'rgba(28, 140, 77, 0.25)' }}>
            <StarRating />
            <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">&ldquo;{testimonials[activeIndex].text}&rdquo;</p>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-md" style={{ background: 'linear-gradient(135deg, #1C8C4D, #167d44)' }}>
                {testimonials[activeIndex].initials}
              </div>
              <div>
                <p className="font-bold text-lg">{testimonials[activeIndex].name}</p>
                <p className="text-gray-500">{testimonials[activeIndex].role}</p>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button onClick={prev} className="p-2 rounded-full text-white transition-all" style={{ background: '#1D8FF2' }}>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="flex items-center text-sm text-gray-600 font-medium">
                {activeIndex + 1} / {testimonials.length}
              </span>
              <button onClick={next} className="p-2 rounded-full text-white transition-all" style={{ background: '#1D8FF2' }}>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div
          className="text-center rounded-2xl p-8 md:p-12 border-2 shadow-lg"
          style={{ background: 'linear-gradient(135deg, rgba(242, 200, 73, 0.15) 0%, rgba(28, 140, 77, 0.08) 100%)', borderColor: '#F2C849' }}
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 text-gray-900">
            ESPERA! EU PREPAREI ALGO AINDA MELHOR PARA VOCÊ!
          </h3>
          <p className="text-xl md:text-2xl font-bold" style={{ color: '#1C8C4D' }}>Temos opções que atendem a todos os gostos!</p>
        </div>
      </div>
    </section>
  )
}
