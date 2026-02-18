import { Award, BookOpen, Users, Star } from 'lucide-react'

export function RRAbout() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Conheça a{' '}
            <span className="text-blue-600">Dra. Guaciara Fornaciari</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Especialista em Inclusão Escolar com Reputação Nacional
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lado esquerdo - Imagem */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              {/* Elementos decorativos */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-50" />
              
              {/* Container da imagem */}
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/images/roteiro-relatorios/guaciara.png"
                  alt="Dra. Guaciara Fornaciari - Especialista em Inclusão Escolar"
                  className="w-full h-full object-cover"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>

          {/* Lado direito - Texto */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Quem é Guaciara Fornaciari?
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                <strong className="text-blue-600">Guaciara Fornaciari</strong> é especialista em inclusão escolar e possui uma <strong>reputação nacional</strong> por auxiliar professores com relatórios.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Além de trabalhar com relatórios, ela ministra ensinamentos sobre <strong>BNCC, planejamento e inclusão escolar</strong>, transformando a vida de milhares de educadores em todo o Brasil.
              </p>
            </div>

            {/* Credenciais */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    Especialista
                  </h4>
                </div>
                <p className="text-gray-700">
                  Referência nacional em inclusão escolar e relatórios
                </p>
              </div>

              <div className="bg-violet-50 p-6 rounded-xl border border-violet-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    Educadora
                  </h4>
                </div>
                <p className="text-gray-700">
                  Ensina BNCC, planejamento e inclusão escolar
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    +4.000
                  </h4>
                </div>
                <p className="text-gray-700">
                  Professoras já impactadas por seu trabalho
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    Confiança
                  </h4>
                </div>
                <p className="text-gray-700">
                  Material aprovado e recomendado por milhares
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
