import { Award, Users, Target, Heart } from 'lucide-react'

const Author = () => {
  const stats = [
    { icon: Users, value: '+2.000', label: 'professores capacitados' },
    { icon: Award, value: '19 anos', label: 'de experiência' },
    { icon: Target, value: 'Especialista', label: 'em inclusão' },
    { icon: Heart, value: 'Missão', label: 'Simplificar a educação' },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Quem Sou Eu?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Foto da autora - coloque guaciara.jpg ou guaciara.png na pasta public/ */}
            <div className="relative">
              <div className="relative aspect-square rounded-3xl shadow-2xl overflow-hidden border-4 border-white bg-primary-200">
                <img
                  src="/guaciara.jpg"
                  alt="Dra. Guaciara Fornaciari - Doutora Escola"
                  className="w-full h-full object-cover absolute inset-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.parentElement?.querySelector('.author-fallback') as HTMLElement
                    if (fallback) fallback.classList.remove('hidden')
                  }}
                />
                <div className="author-fallback hidden absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl flex items-center justify-center border-4 border-white">
                  <div className="text-center p-6 text-gray-700">
                    <div className="text-6xl mb-3">👩‍⚕️</div>
                    <div className="font-bold text-primary-800">guaciara.jpg</div>
                    <div className="text-sm">na pasta public/</div>
                  </div>
                </div>
              </div>
              
              {/* Badge decorativo */}
              <div className="absolute -bottom-4 -right-4 bg-accent-400 text-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-black">19+</div>
                  <div className="text-sm font-bold">Anos</div>
                </div>
              </div>
            </div>

            {/* Informações */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-black text-gray-900 mb-2">
                  Guaciara Fornaciari
                </h3>
                <div className="text-xl text-primary-600 font-bold mb-4">Doutora Escola</div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Fonoaudióloga, professora, ex-coordenadora e especialista em inclusão com mais de{' '}
                  <strong>19 anos de experiência</strong> transformando a vida de educadores.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-lg border-2 border-primary-100 hover:border-primary-300 transition-all"
                    >
                      <Icon className="w-8 h-8 text-primary-600 mb-2" />
                      <div className="text-2xl font-black text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  )
                })}
              </div>

              <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white">
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-lg mb-1">Minha Missão:</div>
                    <p className="text-white/95">
                      Simplificar a educação e empoderar professores com ferramentas práticas e eficazes
                      para transformar suas aulas e a vida de seus alunos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Author
