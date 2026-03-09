import { useState } from 'react';
import { FileText, BookOpen, Building2, ArrowRight, Quote, ChevronDown } from 'lucide-react';

const CTA_URL = 'https://fm.doutoraescola.com.br/register.php';

interface Depoimento {
  nome: string;
  cargo: string;
  texto: string;
}

interface Porta {
  id: string;
  icon: React.ReactNode;
  titulo: string;
  subtitulo: string;
  cor: string;
  corBg: string;
  corBorder: string;
  headline: string;
  descricao: string;
  depoimentos: Depoimento[];
  ctaTexto: string;
}

const portas: Porta[] = [
  {
    id: 'relatorio',
    icon: <FileText size={32} />,
    titulo: 'Relatórios me consomem horas',
    subtitulo: 'Tempo, volume, urgência',
    cor: 'text-vermelho',
    corBg: 'bg-red-50',
    corBorder: 'border-vermelho/20',
    headline: 'Você não está perdendo horas fazendo relatório. Você está perdendo o sábado com seu filho.',
    descricao: 'Cada relatório que demora 3 horas é um jantar que não aconteceu, uma noite de sono que foi embora. A Fábrica Mágica transforma essas horas em minutos — para você ter de volta o que realmente importa.',
    depoimentos: [
      {
        nome: 'Rosiane',
        cargo: 'Professora AEE',
        texto: 'Precisava entregar um relatório para o neurologista no dia seguinte. Com a Fábrica, fiz em 20 minutos o que levaria uma noite inteira.',
      },
      {
        nome: 'Maeli',
        cargo: 'Professora — 2 salas de recursos',
        texto: 'São 40 relatórios por bimestre. Antes eu passava fins de semana inteiros. Agora resolvo em uma tarde.',
      },
      {
        nome: 'Margaret',
        cargo: 'Professora — 25 alunos',
        texto: 'Passava o mês todo fazendo e refazendo relatórios de 25 alunos. Hoje termino tudo em dois dias.',
      },
    ],
    ctaTexto: 'Quero parar de perder meus fins de semana',
  },
  {
    id: 'pei',
    icon: <BookOpen size={32} />,
    titulo: 'Não sei as palavras certas para o PEI',
    subtitulo: 'Insegurança técnica, linguagem',
    cor: 'text-verde',
    corBg: 'bg-green-50',
    corBorder: 'border-verde/20',
    headline: 'Existe uma profissional antes e depois da Fábrica Mágica.',
    descricao: 'Você conhece seu aluno. Sabe o que ele precisa. Mas na hora de colocar no papel, as palavras travam. A Fábrica Mágica transforma o que você já sabe em um documento profissional — com a linguagem técnica certa.',
    depoimentos: [
      {
        nome: 'Patricia',
        cargo: 'Professora AEE',
        texto: 'Existe uma profissional antes e depois da Fábrica Mágica. Me deu segurança para escrever documentos que eu sempre tive medo de fazer.',
      },
      {
        nome: 'Neyla',
        cargo: 'Professora',
        texto: 'Não vejo minha vida profissional sem a Fábrica Mágica. Ela me deu as palavras que eu sempre procurei.',
      },
      {
        nome: 'Ana Maria',
        cargo: 'Professora — 40 alunos PDI',
        texto: 'Tinha 40 relatórios PDI para fazer e não sabia por onde começar. A Fábrica me guiou passo a passo.',
      },
    ],
    ctaTexto: 'Quero ter segurança nos meus documentos',
  },
  {
    id: 'organizacao',
    icon: <Building2 size={32} />,
    titulo: 'Trabalho em mais de uma escola e não dou conta',
    subtitulo: 'Sobrecarga, prazos simultâneos',
    cor: 'text-azul',
    corBg: 'bg-blue-50',
    corBorder: 'border-azul/20',
    headline: 'Você não precisa dar conta de tudo sozinha.',
    descricao: 'Duas escolas, três turnos, prazos que se sobrepõem. A Fábrica Mágica centraliza tudo e entrega documentos prontos para cada escola — sem você precisar recomeçar do zero.',
    depoimentos: [
      {
        nome: 'Acrirlene',
        cargo: 'Professora — 2 escolas',
        texto: 'Duas escolas, prazos simultâneos, datas diferentes. A Fábrica me salvou de pirar. Consigo organizar tudo num só lugar.',
      },
      {
        nome: 'Michela',
        cargo: 'Professora',
        texto: 'Perdi todos os documentos e precisei refazer tudo. Com a Fábrica, refiz em um fim de semana o que tinha demorado meses.',
      },
      {
        nome: 'Rosinéa',
        cargo: 'Professora AEE',
        texto: 'Ganhei qualidade de vida. É isso. Simples assim. Tenho tempo para mim e para minha família de novo.',
      },
    ],
    ctaTexto: 'Quero organizar minha vida profissional',
  },
];

export function RFMPortas() {
  const [portaSelecionada, setPortaSelecionada] = useState<string | null>(null);
  const portaAtiva = portas.find((p) => p.id === portaSelecionada);

  return (
    <section className="section-padding bg-white" id="portas">
      <div className="container">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl mb-4">
            Qual é o seu maior desafio hoje?
          </h2>
          <p className="text-cinza font-body text-lg max-w-2xl mx-auto mb-3">
            Escolha o que mais pesa para você agora. Vamos mostrar como a Fábrica
            Mágica resolve <em>exatamente</em> isso.
          </p>
          <p className="text-cinza-light font-body text-sm">
            Clique na opção que mais se identifica com você.
          </p>
        </div>

        {/* 3 Portas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {portas.map((porta) => {
            const isActive = portaSelecionada === porta.id;
            return (
              <button
                key={porta.id}
                type="button"
                onClick={() =>
                  setPortaSelecionada(isActive ? null : porta.id)
                }
                className={`
                  group relative text-left p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-azul/40
                  ${
                    isActive
                      ? `${porta.corBg} ${porta.corBorder} shadow-lg scale-[1.02] ring-2 ring-offset-2 ring-azul/20`
                      : 'bg-offwhite border-gray-200/80 hover:border-gray-300 hover:shadow-md hover:-translate-y-1'
                  }
                `}
              >
                <div
                  className={`mb-4 ${isActive ? porta.cor : 'text-cinza-light group-hover:' + porta.cor} transition-colors`}
                >
                  {porta.icon}
                </div>
                <h3
                  className={`font-display text-xl md:text-[1.35rem] mb-2 leading-snug ${isActive ? 'text-azul' : 'text-azul'}`}
                >
                  {porta.titulo}
                </h3>
                <p className="text-cinza-light font-body text-sm mb-6">
                  {porta.subtitulo}
                </p>

                {/* Indicador de clique — elegante e discreto */}
                <span
                  className={`
                    inline-flex items-center gap-1.5 font-body text-sm transition-all duration-300
                    ${isActive ? 'text-azul opacity-90' : 'text-cinza-light group-hover:text-azul group-hover:opacity-100'}
                  `}
                >
                  {isActive ? 'Conteúdo aberto abaixo' : 'Clique para ver mais'}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}
                  />
                </span>

                {isActive && (
                  <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 ${porta.corBg} border-b-2 border-r-2 ${porta.corBorder}`} />
                )}
              </button>
            );
          })}
        </div>

        {/* Conteúdo expandido da porta selecionada */}
        {portaAtiva && (
          <div
            key={portaAtiva.id}
            className={`${portaAtiva.corBg} rounded-3xl p-8 md:p-12 border-2 ${portaAtiva.corBorder} animate-fadeIn`}
          >
            <h3 className="font-display text-2xl md:text-3xl text-azul mb-4 leading-tight">
              {portaAtiva.headline}
            </h3>
            <p className="text-cinza font-body text-lg mb-10 max-w-3xl leading-relaxed">
              {portaAtiva.descricao}
            </p>

            {/* Depoimentos desta porta */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {portaAtiva.depoimentos.map((dep, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <Quote size={20} className="text-vermelho/30 mb-3" />
                  <p className="text-cinza font-body text-[0.95rem] mb-4 leading-relaxed italic">
                    "{dep.texto}"
                  </p>
                  <div className="flex items-center gap-3">
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

            <div className="text-center">
              <a href={CTA_URL} className="btn-primary inline-flex items-center gap-2">
                {portaAtiva.ctaTexto}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}
