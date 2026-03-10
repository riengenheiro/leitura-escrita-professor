import { Check, Star, Crown, ArrowRight, Clock } from 'lucide-react';

const CTA_ANUAL = 'https://fm.doutoraescola.com.br/checkout/?s=UtP0C';
const CTA_PREMIUM = 'https://fm.doutoraescola.com.br/checkout/?s=OZtRH';

interface Plano {
  id: string;
  nome: string;
  badge?: string;
  badgeIcon?: React.ReactNode;
  preco: string;
  precoDetalhe: string;
  precoAncora?: string;
  descricao: string;
  features: string[];
  cta: string;
  ctaUrl: string;
  destaque: boolean;
  tom: string;
}

const planos: Plano[] = [
  {
    id: 'anual',
    nome: 'Plano Anual',
    badge: 'Mais vendido',
    badgeIcon: <Star size={14} />,
    preco: 'R$ 9,90',
    precoDetalhe: '/mês ou R$ 99,90 à vista',
    precoAncora: 'R$ 297',
    descricao:
      '75 créditos para usar o ano todo. Menos de R$ 10 por mês para recuperar seus fins de semana.',
    features: [
      '75 créditos por ano',
      'Relatórios, PEI, PDI e mais',
      'Acesso por 12 meses',
      'Suporte por WhatsApp',
      'Documentos ilimitados por crédito',
    ],
    cta: 'Esse é meu plano',
    ctaUrl: CTA_ANUAL,
    destaque: true,
    tom: 'vermelho',
  },
  {
    id: 'premium',
    nome: 'Premium',
    badge: 'Completo',
    badgeIcon: <Crown size={14} />,
    preco: 'R$ 29,70',
    precoDetalhe: '/mês ou R$ 297,00 à vista',
    precoAncora: 'R$ 397',
    descricao:
      'A ferramenta e a formação. Além da Fábrica, dois cursos completos com certificado.',
    features: [
      '100 créditos por ano',
      'Tudo do Plano Anual',
      'Curso Relatórios Completos (90h)',
      'Curso BNCC e Planejamento (60h)',
      'Certificados inclusos',
      'Parcelamento em até 12x',
    ],
    cta: 'Quero o completo',
    ctaUrl: CTA_PREMIUM,
    destaque: false,
    tom: 'azul',
  },
];

export function RFMPlanos() {
  return (
    <section className="section-padding bg-offwhite" id="planos">
      <div className="container">
        {/* Âncora financeira — transição suave */}
        <div className="text-center mb-6">
          <p className="text-cinza-light font-body text-sm uppercase tracking-wider mb-3">
            Quando você estiver pronta
          </p>
          <h2 className="text-2xl md:text-4xl mb-6">
            Já decidiu? Escolha como quer começar.
          </h2>
        </div>

        {/* Âncora de preço */}
        <div className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl mx-auto mb-12 border border-gray-100 shadow-sm text-center">
          <div className="flex items-center justify-center gap-2 text-cinza-light mb-3">
            <Clock size={16} />
            <span className="font-body text-sm">A conta que ninguém faz</span>
          </div>
          <p className="text-cinza font-body text-base md:text-lg leading-relaxed">
            Uma professora que gasta <strong className="text-vermelho">10h por bimestre</strong> em
            relatórios está perdendo o equivalente a{' '}
            <strong className="text-vermelho">R$ 600 em tempo</strong> — ou simplesmente
            R$ 600 em vida.
          </p>
          <p className="text-azul font-body font-semibold text-lg mt-3">
            O Plano Anual da Fábrica custa R$ 99,90 o ano inteiro.
          </p>
        </div>

        {/* Cards de planos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {planos.map((plano) => (
            <div
              key={plano.id}
              className={`
                relative rounded-3xl p-6 md:p-8 flex flex-col
                ${
                  plano.destaque
                    ? 'bg-white border-2 border-mais-vendido/20 shadow-xl scale-[1.02] md:scale-105 z-10'
                    : 'bg-white border border-gray-200 shadow-sm'
                }
              `}
            >
              {/* Badge */}
              {plano.badge && (
                <div
                  className={`
                    absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-body font-semibold
                    ${plano.badge === 'Mais vendido' ? 'bg-mais-vendido' : 'bg-completo'}
                  `}
                >
                  {plano.badgeIcon}
                  {plano.badge}
                </div>
              )}

              <div className="pt-2">
                <h3 className="font-display text-xl text-azul mb-2">
                  {plano.nome}
                </h3>

                {/* Preço */}
                <div className="mb-4">
                  {plano.precoAncora && (
                    <p className="text-cinza-light font-body text-sm line-through">
                      De {plano.precoAncora}/mês
                    </p>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-3xl md:text-4xl text-azul font-bold">
                      {plano.preco}
                    </span>
                    <span className="text-cinza font-body text-sm">
                      {plano.precoDetalhe}
                    </span>
                  </div>
                </div>

                <p className="text-cinza font-body text-sm leading-relaxed mb-6">
                  {plano.descricao}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plano.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check
                        size={18}
                        className={`flex-shrink-0 mt-0.5 ${
                          plano.destaque ? 'text-mais-vendido' : 'text-completo'
                        }`}
                      />
                      <span className="text-cinza font-body text-sm">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plano.ctaUrl}
                  className={`
                    w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-body font-bold text-base transition-all hover:-translate-y-0.5
                    ${
                      plano.destaque
                        ? 'bg-mais-vendido text-white hover:opacity-90 shadow-md hover:shadow-lg'
                        : 'bg-completo text-white hover:opacity-90 shadow-md hover:shadow-lg'
                    }
                  `}
                >
                  {plano.cta}
                  <ArrowRight size={16} />
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* Garantia de confiança pós-planos */}
        <div className="text-center mt-10">
          <p className="text-cinza font-body text-sm max-w-lg mx-auto">
            Sua próxima sexta-feira pode ser diferente. Quando quiser começar, estamos aqui.
          </p>
        </div>
      </div>
    </section>
  );
}
