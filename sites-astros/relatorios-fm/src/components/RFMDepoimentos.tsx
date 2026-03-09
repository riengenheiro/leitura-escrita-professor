import { Quote, Star } from 'lucide-react';

interface Depoimento {
  nome: string;
  cargo: string;
  texto: string;
  destaque?: string;
}

const depoimentos: Depoimento[] = [
  {
    nome: 'Rosiane',
    cargo: 'Professora AEE',
    texto: 'Precisava entregar um relatório para o neurologista no dia seguinte. Fiz em 20 minutos o que levaria uma noite inteira. A Fábrica salvou meu dia.',
    destaque: 'Fiz em 20 minutos',
  },
  {
    nome: 'Patricia',
    cargo: 'Professora AEE',
    texto: 'Existe uma profissional antes e depois da Fábrica Mágica. Me deu segurança para escrever documentos que eu sempre tive medo de fazer.',
    destaque: 'Divisor de águas',
  },
  {
    nome: 'Maeli',
    cargo: 'Professora — 2 salas de recursos',
    texto: 'São 40 relatórios por bimestre. Antes eu passava fins de semana inteiros. Agora resolvo em uma tarde. Não largo nunca mais.',
    destaque: '40 relatórios em uma tarde',
  },
  {
    nome: 'Rosinéa',
    cargo: 'Professora AEE',
    texto: 'Ganhei qualidade de vida. É isso. Simples assim. Tenho tempo para mim e para minha família de novo.',
    destaque: 'Qualidade de vida',
  },
  {
    nome: 'Neyla',
    cargo: 'Professora',
    texto: 'Não vejo minha vida profissional sem a Fábrica Mágica. Ela me deu as palavras que eu sempre procurei. Me sinto segura agora.',
    destaque: 'Indispensável',
  },
  {
    nome: 'Acrirlene',
    cargo: 'Professora — 2 escolas',
    texto: 'Duas escolas, prazos simultâneos, datas diferentes. A Fábrica me salvou de pirar. Consigo organizar tudo num só lugar.',
    destaque: '2 escolas organizadas',
  },
];

export function RFMDepoimentos() {
  return (
    <section className="section-padding bg-offwhite" id="depoimentos">
      <div className="container">
        {/* Header com foto 04 — A Conexão: Guaciara ouvindo, receptiva */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md border-4 border-white bg-bege">
              <img
                src="/images/relatorios-fm/autoridade-conexao.webp"
                alt="Guaciara sorrindo de forma receptiva — empatia e conexão"
                width="600"
                height="600"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = 'none';
                  el.parentElement!.innerHTML =
                    '<div class="flex flex-col items-center justify-center h-full text-cinza-light"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span class="text-xs mt-1">Foto em breve</span></div>';
                }}
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl mb-4">
              Histórias reais de quem já usa
            </h2>
            <p className="text-cinza font-body text-lg max-w-xl">
              Não são elogios genéricos. São professoras com nome, situação e
              números reais. Cada uma delas já esteve onde você está agora.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {depoimentos.map((dep, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Estrelas */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <Quote size={20} className="text-vermelho/20 mb-3" />

              <p className="text-cinza font-body leading-relaxed mb-4 flex-1">
                "{dep.texto}"
              </p>

              {dep.destaque && (
                <span className="inline-block bg-verde-light text-verde text-xs font-body font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                  {dep.destaque}
                </span>
              )}

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-bege flex items-center justify-center text-azul font-display font-bold text-sm">
                  {dep.nome.charAt(0)}
                </div>
                <div>
                  <p className="font-body font-semibold text-azul text-sm">
                    {dep.nome}
                  </p>
                  <p className="font-body text-cinza-light text-xs">
                    {dep.cargo}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
