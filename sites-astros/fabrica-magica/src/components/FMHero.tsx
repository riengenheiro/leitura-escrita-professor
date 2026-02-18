import { Sparkles, Clock, FileText } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

const IMG_BASE = '/images/fabrica-magica';

export function FMHero() {
  return (
    <>
      <section
        className="text-gray-900 relative overflow-hidden"
        style={{
          background: 'linear-gradient(165deg, #F2F2F2 0%, #ffffff 35%, rgba(29, 143, 242, 0.06) 70%, rgba(28, 140, 77, 0.04) 100%)',
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-30 blur-3xl" style={{ background: '#1D8FF2' }} />
          <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full opacity-25 blur-3xl" style={{ background: '#1C8C4D' }} />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ background: '#F2C849' }} />
          <div className="absolute top-20 right-1/3 w-48 h-48 rounded-full opacity-15 blur-3xl" style={{ background: '#F28705' }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div
                  className="absolute -inset-3 rounded-3xl blur-2xl opacity-40"
                  style={{ background: 'linear-gradient(135deg, #1D8FF2, #1C8C4D)' }}
                />
                <div
                  className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4"
                  style={{ aspectRatio: '1080 / 1920', borderColor: '#F2C849' }}
                >
                  <OptimizedImage
                    src={`${IMG_BASE}/hero-fm.webp`}
                    alt="Fábrica Mágica - Gerador de Documentos Escolares"
                    className="w-full h-full object-contain"
                    priority={true}
                    fetchPriority="high"
                    width={1080}
                    height={1920}
                  />
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-1">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 text-white shadow-md"
                style={{ background: 'linear-gradient(135deg, #1C8C4D, #167d44)' }}
              >
                Para professoras que querem praticidade
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                <span className="text-gray-900">Crie Seu Primeiro PDI </span>
                <span className="block mt-1" style={{ color: '#1D8FF2' }}>Sem Medo de Errar</span>
              </h1>
              <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4" style={{ color: '#1a1a1a' }}>
                Mesmo que você nunca tenha feito um na vida
              </p>

              <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
                PDI, PEI, PAEE, Relatórios, Planejamentos, Avaliações…
                <br />
                <strong className="text-gray-900">A ferramenta que te ensina</strong> enquanto cria documentos profissionais.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-8">
                Para professoras, coordenadoras e diretoras que não sabem por onde começar.{' '}
                <strong style={{ color: '#1C8C4D' }}>Você aprende fazendo</strong> — e ainda economiza horas de trabalho.
              </p>

              <a
                href="#oferta"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 text-white text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #1C8C4D 0%, #167d44 100%)',
                  boxShadow: '0 4px 20px rgba(28, 140, 77, 0.4)',
                }}
              >
                <Sparkles className="w-7 h-7" />
                Fazer Meu Primeiro PDI Agora
              </a>
            </div>
          </div>
        </div>

        <section
          className="text-white py-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #1D8FF2 0%, #1a7ed9 50%, #1C8C4D 100%)',
            boxShadow: '0 4px 24px rgba(29, 143, 242, 0.25)',
          }}
        >
          <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 20% 50%, #F2C849 0%, transparent 50%)' }} />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <p className="text-center font-bold text-sm mb-6 uppercase tracking-wider" style={{ color: '#F2C849' }}>
              Fábrica Mágica — Gerador de Documentos Escolares
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Sparkles className="w-6 h-6 mb-2" style={{ color: '#F2C849' }} />
                <span className="text-3xl md:text-4xl font-black" style={{ color: '#F2C849' }}>3.342+</span>
                <span className="text-sm text-white/90 mt-1">professoras que começaram do zero</span>
              </div>
              <div className="flex flex-col items-center">
                <FileText className="w-6 h-6 mb-2" style={{ color: '#F2C849' }} />
                <span className="text-3xl md:text-4xl font-black" style={{ color: '#F2C849' }}>11.827+</span>
                <span className="text-sm text-white/90 mt-1">documentos profissionais gerados</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-6 h-6 mb-2" style={{ color: '#F2C849' }} />
                <span className="text-3xl md:text-4xl font-black" style={{ color: '#F2C849' }}>3 min</span>
                <span className="text-sm text-white/90 mt-1">para criar (depois que você aprende)</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-6 h-6 mb-2" style={{ color: '#F2C849' }} />
                <span className="text-3xl md:text-4xl font-black" style={{ color: '#F2C849' }}>150h</span>
                <span className="text-sm text-white/90 mt-1">de certificados inclusos</span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
