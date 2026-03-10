import { GraduationCap, Users, Award } from 'lucide-react';

export function RFMAutoridade() {
  return (
    <section className="section-padding bg-bege">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Foto 03 — A Especialista: Guaciara explicando, material pedagógico ao fundo */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 md:w-80 md:h-60 rounded-2xl bg-white shadow-md overflow-hidden">
              <img
                src="/images/relatorios-fm/autoridade-especialista.webp"
                alt="Dra. Guaciara Fornaciari explicando com material pedagógico — autoridade acessível"
                width="800"
                height="600"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = 'none';
                  el.parentElement!.innerHTML =
                    '<div class="flex flex-col items-center justify-center h-full text-cinza-light"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span class="text-xs mt-2">Foto em breve</span></div>';
                }}
              />
            </div>
          </div>

          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-vermelho font-body font-semibold text-sm uppercase tracking-wider mb-3">
              Quem criou a Fábrica Mágica
            </p>

            <h2 className="text-2xl md:text-3xl mb-6">
              Eu sei como é porque eu já estive aí.
            </h2>

            <div className="space-y-4 text-cinza font-body text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                Meu nome é <strong className="text-azul">Guaciara</strong>. Sou
                doutora em Educação e professora há mais de 20 anos. Já perdi
                noites, fins de semana e feriados tentando dar conta de pilhas de
                documentos.
              </p>
              <p>
                Criei a Fábrica Mágica porque sei que você conhece seus alunos
                melhor do que ninguém — mas colocar isso no papel não deveria
                custar a sua saúde, o seu sono e o seu tempo com quem você ama.
              </p>
              <p className="italic text-azul font-display text-lg md:text-xl">
                "Não quero te convencer de nada. Só te contar por que mais de
                5.325 professoras escolheram a Fábrica — e continuam renovando."
              </p>
            </div>

            {/* Mini credenciais */}
            <div className="flex flex-wrap gap-6 mt-8 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-sm font-body text-cinza">
                <GraduationCap size={18} className="text-verde" />
                Doutora em Educação
              </div>
              <div className="flex items-center gap-2 text-sm font-body text-cinza">
                <Users size={18} className="text-verde" />
                + de 5.325 professoras
              </div>
              <div className="flex items-center gap-2 text-sm font-body text-cinza">
                <Award size={18} className="text-verde" />
                + de 20 anos de sala de aula
              </div>
            </div>

            <p className="mt-8 font-display text-azul italic text-lg">
              — Guaciara Fornaciari
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
