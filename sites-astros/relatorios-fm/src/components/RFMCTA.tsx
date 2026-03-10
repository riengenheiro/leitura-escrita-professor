import { ArrowRight, ShieldCheck } from 'lucide-react';

const CTA_URL = 'https://fm.doutoraescola.com.br/checkout/?s=UtP0C';

export function RFMCTA() {
  return (
    <section className="section-padding bg-azul text-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-2xl md:text-4xl text-white mb-6 leading-snug">
            Não quero te convencer de nada agora.
          </h2>

          <p className="font-body text-white/80 text-lg md:text-xl mb-4 leading-relaxed">
            Só te contar por que mais de 5.325 professoras escolheram a Fábrica
            Mágica — e continuam renovando.
          </p>

          <p className="font-body text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
            Depois disso, <strong className="text-white">você mesma decide</strong> se faz sentido
            para a sua situação.
          </p>

          <p className="font-display text-white/90 text-xl italic mb-10">
            Não parece justo?
          </p>

          <a
            href={CTA_URL}
            className="inline-flex items-center gap-2 px-8 py-4 bg-mais-vendido text-white font-body font-bold text-lg rounded-xl hover:opacity-90 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Esse é meu plano
            <ArrowRight size={20} />
          </a>

          <div className="flex items-center gap-2 justify-center text-white/50 font-body text-sm mt-4">
            <ShieldCheck size={14} />
            Garantia de 7 dias · Suporte por WhatsApp · Cancele quando quiser
          </div>

          {/* Contadores sociais */}
          <div className="flex flex-wrap gap-8 justify-center mt-12 pt-8 border-t border-white/10">
            <div className="text-center">
              <p className="font-display text-3xl text-white font-bold">5.325+</p>
              <p className="font-body text-white/60 text-sm">professoras ativas</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl text-white font-bold">30 min</p>
              <p className="font-body text-white/60 text-sm">tempo médio por relatório</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl text-white font-bold">98%</p>
              <p className="font-body text-white/60 text-sm">taxa de renovação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white" />
      </div>
    </section>
  );
}
