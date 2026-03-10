import {
  Lock,
  Users,
  MessageCircle,
  Eye,
  ShieldCheck,
} from 'lucide-react';

const elementos = [
  {
    icon: <Users size={28} />,
    titulo: 'Números reais, não promessas vagas',
    descricao:
      '5.325 professoras já usam e renovam o acesso. Esse número é específico porque é verdadeiro.',
  },
  {
    icon: <MessageCircle size={28} />,
    titulo: 'A linguagem é sua, não de marketing',
    descricao:
      '"Amiga", "salvou", "deixa a vida mais leve", "divisor de águas" — são as palavras que professoras reais usam para descrever a Fábrica.',
  },
  {
    icon: <Eye size={28} />,
    titulo: 'Transparência total',
    descricao:
      'A Fábrica não escreve sozinha. Você responde perguntas sobre seu aluno e ela transforma o que você já sabe em um documento profissional.',
  },
  {
    icon: <ShieldCheck size={28} />,
    titulo: 'Sem urgência falsa',
    descricao:
      'Sem contagem regressiva inventada. A urgência real já existe na sua vida: o prazo do relatório, o início do ano letivo, a reunião de pais.',
  },
  {
    icon: <Lock size={28} />,
    titulo: 'Seus dados protegidos',
    descricao:
      'As informações dos seus alunos ficam seguras. Nada é compartilhado, vendido ou exposto. Privacidade é levado a sério.',
  },
];

export function RFMConfianca() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl mb-4">
            Por que você pode confiar
          </h2>
          <p className="text-cinza font-body text-lg max-w-2xl mx-auto">
            A confiança não se pede — se constrói. Cada detalhe deste site
            existe para remover uma dúvida que você pode ter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {elementos.map((el, i) => (
            <div
              key={i}
              className="bg-offwhite rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-verde/20 transition-colors"
            >
              <div className="text-verde mb-4">{el.icon}</div>
              <h3 className="font-display text-lg text-azul mb-2">
                {el.titulo}
              </h3>
              <p className="text-cinza font-body text-[0.95rem] leading-relaxed">
                {el.descricao}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
