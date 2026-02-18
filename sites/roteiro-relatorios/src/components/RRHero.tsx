import { FileText, Download, Users } from 'lucide-react'

const VIP_LINK = 'https://doutoraescola.com.br/vip'

export function RRHero() {
  return (
    <>
      {/* Barra de anúncio superior */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 text-white px-4 py-4 shadow-xl">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
              <span className="text-base md:text-lg font-bold uppercase tracking-wider">
                🎁 MAIS DE 4.000 PROFESSORAS JÁ ACESSARAM!
              </span>
            </div>
          </div>
          <p className="text-sm md:text-base mt-2 opacity-90">
            Material 100% GRATUITO - Acesso imediato no grupo VIP
          </p>
        </div>
      </header>

      {/* Hero principal */}
      <section className="bg-gradient-to-b from-white to-blue-50 text-black overflow-visible">
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24 overflow-visible">
          <div className="grid lg:grid-cols-2 gap-12 items-center overflow-visible">
            {/* Lado esquerdo - Texto */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold mb-6">
                <Download className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wide">100% Gratuito</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-gray-900">
                Roteiro Para Fazer o{' '}
                <span className="text-blue-600">Relatório do Aluno</span>
              </h1>

              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-2xl mb-6 shadow-lg">
                <p className="text-2xl md:text-3xl font-bold text-center">
                  📚 100% GRÁTIS
                </p>
              </div>

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                Aqui você vai encontrar um <strong className="text-blue-600">Roteiro Perfeito</strong> para fazer o seu Relatório de Desenvolvimento Escolar.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-xl">
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                  ✅ Alinhado às normas da <strong>BNCC</strong><br />
                  ✅ Roteiro <strong>PRÁTICO</strong> passo a passo<br />
                  ✅ Economize tempo do seu final de semana<br />
                  ✅ Organize seu pensamento e facilite sua escrita
                </p>
              </div>

              {/* CTA Principal */}
              <a
                href={VIP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xl md:text-2xl font-extrabold rounded-2xl transition-all transform hover:scale-105 shadow-2xl w-full md:w-auto justify-center group"
              >
                <FileText className="w-8 h-8 group-hover:animate-bounce" />
                QUERO RECEBER O EBOOK GRÁTIS!
              </a>

              <p className="text-sm text-gray-500 mt-4 text-center md:text-left">
                ⚡ Acesso imediato ao grupo VIP • 🔒 100% Seguro • ✅ Sem custos
              </p>
            </div>

            {/* Lado direito - Imagem */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end overflow-visible">
              <div className="relative w-full max-w-md overflow-visible">
                {/* Elementos decorativos */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200 rounded-full blur-2xl opacity-50 animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
                
                {/* Container da imagem com sombra e borda */}
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/images/roteiro-relatorios/hero.png"
                    alt="Roteiro Para Fazer o Relatório do Aluno - 100% Grátis"
                    className="w-full h-full object-cover"
                    width={637}
                    height={856}
                  />
                </div>

                {/* Badge flutuante - left-[30%] evita corte no lado direito no mobile */}
                <div className="absolute -bottom-4 left-[30%] -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-xl font-bold text-lg whitespace-nowrap animate-bounce">
                  🎁 MATERIAL GRATUITO
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa de prova social */}
      <section className="bg-blue-600 text-white py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-7 h-7" />
              </div>
              <div className="text-left">
                <p className="text-3xl md:text-4xl font-black">+4.000</p>
                <p className="text-sm md:text-base opacity-90">Professoras</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <FileText className="w-7 h-7" />
              </div>
              <div className="text-left">
                <p className="text-3xl md:text-4xl font-black">100%</p>
                <p className="text-sm md:text-base opacity-90">Alinhado BNCC</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Download className="w-7 h-7" />
              </div>
              <div className="text-left">
                <p className="text-3xl md:text-4xl font-black">GRÁTIS</p>
                <p className="text-sm md:text-base opacity-90">Sem custos</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
