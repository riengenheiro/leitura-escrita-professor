import { Award, Users, FileText, GraduationCap, Quote, Sparkles } from 'lucide-react'
import { OptimizedImage } from './OptimizedImage'

export function FMSobre() {
  return (
    <section
      className="text-gray-900 py-16 md:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(165deg, #1D8FF2 0%, #1a7ed9 25%, #1C8C4D 75%, #167d44 100%)',
        color: '#fff',
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: '#F2C849' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: '#F28705' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span
            className="inline-block px-5 py-2.5 rounded-full text-sm font-bold shadow-lg mb-6"
            style={{ background: '#F2C849', color: '#1a1a1a' }}
          >
            A mente por trás da Fábrica Mágica
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-white drop-shadow-sm">
            Quem é Guaciara Fornaciari?
          </h2>
          <p className="text-xl text-white/95 max-w-2xl mx-auto">
            20+ anos transformando a vida de professoras
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <p className="text-lg text-white/95 leading-relaxed">
              Sou fonoaudióloga, tenho pós-graduação em inclusão e certificação internacional em autismo. Mas mais importante que isso...
            </p>
            <p className="text-lg text-white leading-relaxed">
              <strong className="text-[#F2C849]">Já fui professora. Já fui alfabetizadora. Já fui coordenadora. Já fui diretora escolar. E abri uma escola do zero.</strong>
            </p>
            <p className="text-lg text-white/95 leading-relaxed">
              Depois de ser professora e passar dias desesperada tentando entender como fazer um PEI, um relatório, um planejamento... Depois de ser coordenadora e ver professoras tensas, irritadas... Eu criei uma ferramenta que <strong className="text-white">transforma o que levava dias e horas... em minutos.</strong>
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border-2 border-white/30 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-6 h-6 text-[#F2C849]" />
                  <span className="text-2xl font-black text-white">3.342+</span>
                </div>
                <span className="text-sm text-white/90">usuárias</span>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border-2 border-white/30 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-6 h-6 text-[#F2C849]" />
                  <span className="text-2xl font-black text-white">11.827+</span>
                </div>
                <span className="text-sm text-white/90">documentos gerados</span>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border-2 border-white/30 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-6 h-6 text-[#F2C849]" />
                  <span className="text-2xl font-black text-white">20+</span>
                </div>
                <span className="text-sm text-white/90">anos de experiência</span>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border-2 border-white/30 shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap className="w-6 h-6 text-[#F2C849]" />
                  <span className="text-2xl font-black text-white">150h</span>
                </div>
                <span className="text-sm text-white/90">em certificados</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-3xl blur-2xl opacity-60"
                style={{ background: 'linear-gradient(135deg, #F2C849, #F28705)' }}
              />
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4"
                style={{ borderColor: '#F2C849' }}
              >
                <OptimizedImage
                  src="/images/fabrica-magica/guaciara.webp"
                  alt="Dra. Guaciara Fornaciari - Criadora da Fábrica Mágica"
                  className="max-w-sm w-full h-auto object-cover"
                  width={400}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>

        {/* História pessoal — autoridade emocional */}
        <div
          className="mt-16 rounded-3xl p-8 md:p-12 border-2 shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 100%)',
            borderColor: 'rgba(242, 200, 73, 0.6)',
          }}
        >
          <div className="flex justify-center mb-6">
            <Quote className="w-12 h-12 text-[#F2C849] opacity-90" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
            &ldquo;Ou você faz, ou fica pra trás&rdquo;
          </h3>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-white/95 leading-relaxed">
            <p>
              Eu fui uma menina muito tímida. Tive depressão infantil. Vim de uma família rígida. Era a mais velha de 4 irmãos... todas as expectativas estavam em mim.
            </p>
            <p>
              Um dia, já professora, fiz uma reunião escolar. Uma mãe advogada, muito bem vestida, chegou pra falar comigo. Quando a vi, meu cérebro me levou lá pra minha adolescência. <strong className="text-[#F2C849]">E eu travei.</strong>
            </p>
            <p>
              Naquele dia aprendi uma das lições mais importantes da minha vida: <strong className="text-[#F2C849]">&ldquo;Ou você faz, ou fica pra trás.&rdquo;</strong>
            </p>
            <p>
              Passei 9 anos nessa transformação. E hoje estou aqui... com mais de 20 anos de experiência... <strong className="text-white">para te ajudar a não passar pelo que eu passei.</strong>
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="#oferta"
              className="inline-flex items-center gap-2 px-8 py-4 text-white text-lg font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-2 border-[#F2C849] shadow-lg"
              style={{ background: 'rgba(28, 140, 77, 0.9)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
            >
              <Sparkles className="w-5 h-5" style={{ color: '#F2C849' }} />
              Ver planos e preços
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
