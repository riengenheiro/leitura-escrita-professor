import { ArrowRight } from 'lucide-react';

const IMG_BASE = '/images/relatorios-fm';

const passos = [
  {
    numero: '1',
    titulo: 'Você responde',
    descricao:
      'Perguntas simples sobre o seu aluno — coisas que você já sabe de cor. Sem linguagem técnica, sem pegadinha.',
    imagem: `${IMG_BASE}/interface-em-uso.webp`,
    alt: 'Mãos usando a Fábrica Mágica no celular — interface simples e acessível',
  },
  {
    numero: '2',
    titulo: 'A Fábrica gera',
    descricao:
      'Em poucos minutos, transforma suas respostas em um documento profissional, com a linguagem técnica certa e alinhado à BNCC.',
    imagem: `${IMG_BASE}/autoridade-descoberta.webp`,
    alt: 'Guaciara olhando para o notebook com expressão de satisfação — o documento está pronto',
  },
  {
    numero: '3',
    titulo: 'Pronto. É seu.',
    descricao:
      'Relatório, PEI, PDI ou planejamento — pronto para imprimir, enviar ou entregar. Sem refazer, sem dúvida.',
    imagem: `${IMG_BASE}/documento-pronto.webp`,
    alt: 'Mãos segurando o relatório finalizado — documento profissional pronto para usar',
  },
];

function FotoPlaceholder({ alt }: { alt: string }) {
  return (
    <div className="w-full h-full bg-bege flex flex-col items-center justify-center text-cinza-light p-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
        <circle cx="9" cy="9" r="2"/>
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
      </svg>
      <span className="text-xs mt-2 text-center">{alt}</span>
    </div>
  );
}

export function RFMComoFunciona() {
  return (
    <section className="section-padding bg-offwhite" id="como-funciona">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl mb-4">
            Simples assim. De verdade.
          </h2>
          <p className="text-cinza font-body text-lg max-w-2xl mx-auto">
            A Fábrica Mágica não escreve sozinha. Ela transforma o que
            você <strong className="text-azul">já sabe</strong> sobre seus alunos em
            documentos profissionais.
          </p>
        </div>

        <div className="space-y-10 md:space-y-16">
          {passos.map((passo, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div
                key={i}
                className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}
              >
                {/* Foto */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-bege">
                    <img
                      src={passo.imagem}
                      alt={passo.alt}
                      width="800"
                      height="600"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const el = e.currentTarget;
                        el.style.display = 'none';
                        const placeholder = document.createElement('div');
                        placeholder.className = 'w-full h-full bg-bege flex flex-col items-center justify-center text-cinza-light p-4';
                        placeholder.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg><span class="text-xs mt-2 text-center">Foto em breve</span>`;
                        el.parentElement?.appendChild(placeholder);
                      }}
                    />
                  </div>
                </div>

                {/* Texto */}
                <div className="w-full md:w-1/2">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-azul text-white font-body font-bold text-lg mb-4">
                    {passo.numero}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl mb-3 text-azul">
                    {passo.titulo}
                  </h3>
                  <p className="text-cinza font-body text-lg leading-relaxed">
                    {passo.descricao}
                  </p>

                  {i < passos.length - 1 && (
                    <div className="hidden md:flex items-center gap-2 mt-6 text-cinza-light">
                      <ArrowRight size={20} />
                      <span className="font-body text-sm">Próximo passo</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-cinza font-body text-base max-w-xl mx-auto bg-bege rounded-xl p-6 border border-bege-dark">
            <strong className="text-azul">"Mas eu não entendo de tecnologia..."</strong>
            <br />
            Se você sabe responder perguntas sobre seu aluno, você sabe usar a Fábrica.
            É como preencher um formulário — só que no final sai um documento pronto.
          </p>
        </div>
      </div>
    </section>
  );
}
