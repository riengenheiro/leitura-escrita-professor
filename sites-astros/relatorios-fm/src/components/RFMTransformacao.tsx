import { Clock, Smile, Heart, TrendingDown } from 'lucide-react';

const CTA_URL = 'https://fm.doutoraescola.com.br/register.php';
const IMG_BASE = '/images/relatorios-fm';

const comparacoes = [
  {
    antes: 'Mais de 10 horas por bimestre',
    depois: 'Menos de 30 minutos',
    icon: <Clock size={24} />,
  },
  {
    antes: 'Fins de semana perdidos',
    depois: 'Fins de semana livres',
    icon: <Heart size={24} />,
  },
  {
    antes: 'Insegurança na linguagem técnica',
    depois: 'Documentos profissionais e alinhados à BNCC',
    icon: <Smile size={24} />,
  },
  {
    antes: 'Estresse, noites mal dormidas',
    depois: 'Qualidade de vida de volta',
    icon: <TrendingDown size={24} />,
  },
];

function FotoComFallback({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      width="800"
      height="600"
      className={`w-full h-full object-cover ${className}`}
      loading="lazy"
      decoding="async"
      onError={(e) => {
        const el = e.currentTarget;
        el.style.display = 'none';
        el.parentElement!.innerHTML =
          '<div class="flex flex-col items-center justify-center h-full text-cinza-light p-4"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg><span class="text-xs mt-2 text-center">Foto em breve</span></div>';
      }}
    />
  );
}

export function RFMTransformacao() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl mb-4">
            O que muda na sua vida
          </h2>
          <p className="text-cinza font-body text-lg max-w-2xl mx-auto">
            Em uma pesquisa com 343 professoras,{' '}
            <strong className="text-azul">78% disseram que o trabalho influencia muito a vida fora da escola</strong>.
            Marido, filhos, saúde — tudo sofre. Isso muda hoje.
          </p>
        </div>

        {/* Fotos Antes / Depois lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {/* Foto 05 — Antes: professora cansada à noite */}
          <div className="rounded-2xl overflow-hidden shadow-md border-2 border-red-100">
            <div className="aspect-[4/3] bg-bege relative">
              <FotoComFallback
                src={`${IMG_BASE}/professora-antes.webp`}
                alt="Professora à mesa, à noite, papéis espalhados — cansaço cotidiano"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-xs font-body font-semibold uppercase tracking-wider text-red-200 mb-1">
                  Antes da Fábrica
                </p>
                <p className="text-white font-body font-medium text-sm">
                  Noites perdidas, estresse, pilhas de papel
                </p>
              </div>
            </div>
          </div>

          {/* Foto 06 — Depois: professora aliviada */}
          <div className="rounded-2xl overflow-hidden shadow-md border-2 border-green-100">
            <div className="aspect-[4/3] bg-verde-light relative">
              <FotoComFallback
                src={`${IMG_BASE}/professora-depois.webp`}
                alt="Professora sorrindo para o celular — alívio, luz natural, leveza"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-xs font-body font-semibold uppercase tracking-wider text-green-200 mb-1">
                  Depois da Fábrica
                </p>
                <p className="text-white font-body font-medium text-sm">
                  Resolvido em minutos, tempo de volta
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparações numéricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {comparacoes.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <div className="bg-red-50/60 p-5 border-b border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="text-vermelho/40 mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-xs font-body font-semibold uppercase tracking-wider text-vermelho/60 mb-1">
                      Antes
                    </p>
                    <p className="text-cinza font-body font-medium">
                      {item.antes}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-verde-light/40 p-5">
                <div className="flex items-start gap-3">
                  <div className="text-verde/60 mt-0.5">{item.icon}</div>
                  <div>
                    <p className="text-xs font-body font-semibold uppercase tracking-wider text-verde/80 mb-1">
                      Depois
                    </p>
                    <p className="text-azul font-body font-semibold">
                      {item.depois}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Foto 07 — O que ela realmente ganha: vida fora da escola */}
        <div className="bg-bege rounded-3xl overflow-hidden max-w-3xl mx-auto shadow-md">
          <div className="aspect-[16/9] bg-bege-dark relative">
            <FotoComFallback
              src={`${IMG_BASE}/professora-vida-ganha.webp`}
              alt="Professora com seu filho no parque — o fim de semana que ela recuperou"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          <div className="p-8 md:p-10 text-center">
            <p className="font-display text-xl md:text-2xl text-azul mb-4 leading-snug italic">
              "Qualidade de vida com minha família e satisfação pessoal"
            </p>
            <p className="text-cinza font-body text-sm mb-6">
              — O que uma professora disse que estava perdendo, na pesquisa de 2018.
              <br />
              <strong className="text-verde">A Fábrica Mágica devolveu isso para mais de 5.300 professoras.</strong>
            </p>
            <a
              href={CTA_URL}
              className="btn-primary inline-flex"
            >
              Quero meu tempo de volta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
