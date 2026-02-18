import { CheckCircle, Clock, FileCheck, BookOpen, Target, Heart } from 'lucide-react'

const VIP_LINK = 'https://doutoraescola.com.br/vip'

export function RRBenefits() {
  const benefits = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Alinhado à BNCC',
      description: 'Roteiro 100% alinhado às normas da Base Nacional Comum Curricular. Tenha a segurança de estar seguindo as diretrizes oficiais.',
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: 'Roteiro Passo a Passo',
      description: 'Sequência prática que te ajuda a organizar seu pensamento. Você saberá exatamente o que escrever e em qual ordem.',
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: 'Economize Tempo',
      description: 'Ganhe horas preciosas do seu final de semana. Chega de passar horas procurando o que escrever nos relatórios!',
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Facilite sua Escrita',
      description: 'Com os pontos importantes que precisam aparecer no relatório, você organiza suas ideias e escreve com mais facilidade.',
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: 'Pontos Indispensáveis',
      description: 'Todos os pontos importantes que, indiscutivelmente, precisam aparecer no seu relatório estão incluídos no roteiro.',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Material Confiável',
      description: 'Ter um material em que você pode confiar não tem preço! É exatamente disso que você precisa para fazer relatórios com segurança.',
    },
  ]

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            O Que Você Vai Receber <span className="text-green-600">GRATUITAMENTE</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Um roteiro completo que vai transformar a forma como você elabora seus relatórios escolares
          </p>
        </div>

        {/* Grid de benefícios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200"
            >
              <div className="text-blue-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Central */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <p className="text-2xl md:text-3xl font-bold mb-6">
            🎁 Tudo Isso é <span className="text-yellow-300 text-4xl">100% GRATUITO</span>
          </p>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Clique no botão abaixo e entre no nosso grupo VIP para receber o ebook:
          </p>
          <a
            href={VIP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-6 bg-green-500 hover:bg-green-400 text-white text-xl md:text-2xl font-extrabold rounded-2xl transition-all transform hover:scale-105 shadow-2xl uppercase"
          >
            ENTRAR NO GRUPO VIP AGORA
          </a>
          <p className="text-sm mt-4 opacity-80">
            Acesso imediato • Sem custo algum • Material exclusivo
          </p>
        </div>
      </div>
    </section>
  )
}
