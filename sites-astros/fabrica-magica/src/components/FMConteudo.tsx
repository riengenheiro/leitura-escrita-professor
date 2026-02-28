import { Check, FileText, Users, Baby, BookOpen, ClipboardList, BarChart, Briefcase, School, Heart, Sparkles } from 'lucide-react'

export function FMConteudo() {
  const documentos = [
    { icon: FileText, nome: 'PDI - Plano de Desenvolvimento Individual' },
    { icon: ClipboardList, nome: 'PEI - Plano Educacional Individualizado' },
    { icon: BarChart, nome: 'PAEE - Plano de Atendimento Educacional Especializado' },
    { icon: BookOpen, nome: 'Relatórios Descritivos e Circunstanciados' },
    { icon: FileText, nome: 'Planejamentos de Aula (alinhados à BNCC)' },
    { icon: ClipboardList, nome: 'Avaliações e Pareceres Descritivos' },
    { icon: BarChart, nome: 'Adaptações Curriculares Individualizadas' },
    { icon: BookOpen, nome: 'Relatórios para Médicos e Especialistas' },
  ]

  const paraQuem = [
    { icon: Users, texto: 'Professoras de Educação Infantil' },
    { icon: BookOpen, texto: 'Professoras de Ensino Fundamental (I e II)' },
    { icon: Baby, texto: 'Professoras de Sala de Recursos / AEE' },
    { icon: Briefcase, texto: 'Coordenadoras Pedagógicas (orientar equipes)' },
    { icon: School, texto: 'Diretoras Escolares (padronizar documentação)' },
    { icon: ClipboardList, texto: 'Psicopedagogas e Neuropsicopedagogas' },
    { icon: Heart, texto: 'Professoras de Apoio e Inclusão (TEA, TDAH, DI)' },
    { icon: FileText, texto: 'Profissionais que atendem em consultório' },
    { icon: Heart, texto: 'E ESPECIALMENTE para quem está começando do zero' },
  ]

  return (
    <section
      className="text-gray-900 py-16 md:py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F2F2F2 0%, #ffffff 40%, rgba(28, 140, 77, 0.06) 100%)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: '#1D8FF2' }} />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full opacity-15 blur-3xl" style={{ background: '#1C8C4D' }} />
        <div className="absolute top-1/2 left-1/3 w-56 h-56 rounded-full opacity-15 blur-3xl" style={{ background: '#F2C849' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 text-white shadow-md"
            style={{ background: 'linear-gradient(135deg, #1C8C4D, #167d44)' }}
          >
            ✨ A solução que você esperava
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
            O Que a Fábrica Mágica Faz Por Você
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Uma ferramenta completa que gera documentos profissionais em minutos
          </p>
        </div>

        {/* Documentos que gera */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#1D8FF2' }}>
            📄 Documentos que você pode criar:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documentos.map((doc, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border-2 shadow-sm" style={{ borderColor: 'rgba(29, 143, 242, 0.3)' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white" style={{ background: 'linear-gradient(135deg, #1D8FF2, #1a7ed9)' }}>
                  <doc.icon className="w-5 h-5" />
                </div>
                <span className="font-medium text-gray-800">{doc.nome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feito para quem está começando do zero */}
        <div
          className="mb-16 rounded-3xl p-8 md:p-10 border-2 shadow-lg"
          style={{ background: 'linear-gradient(135deg, rgba(28, 140, 77, 0.08) 0%, rgba(242, 200, 73, 0.06) 100%)', borderColor: '#1C8C4D' }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6" style={{ color: '#1C8C4D' }}>
            📚 Feito Para Quem Está Começando do Zero
          </h3>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
            Se você nunca fez um PDI/PEI na vida, esta ferramenta foi criada para <strong style={{ color: '#1C8C4D' }}>VOCÊ</strong>.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            A Fábrica Mágica foi desenvolvida para professoras que:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {['Não sabem por onde começar', 'Têm medo de usar termos errados', 'Nunca aprenderam isso na faculdade ou pós', 'Precisam improvisar e ficam inseguras', 'Não têm ninguém para orientar'].map((txt, i) => (
              <div key={i} className="flex items-start gap-2 text-gray-700">
                <span className="font-bold" style={{ color: '#F28705' }}>❌</span>
                <span>{txt}</span>
              </div>
            ))}
          </div>
          <p className="text-lg font-bold text-gray-800 mb-4">Como funciona para iniciantes:</p>
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border-2 shadow-sm" style={{ borderColor: 'rgba(28, 140, 77, 0.3)' }}>
              <Check className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#1C8C4D' }} />
              <div>
                <p className="font-semibold text-gray-900">Perguntas simples te guiam em cada etapa</p>
                <p className="text-gray-600 text-sm">Você não precisa saber o que escrever. A ferramenta PERGUNTA e você responde.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border-2 shadow-sm" style={{ borderColor: 'rgba(28, 140, 77, 0.3)' }}>
              <Check className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#1C8C4D' }} />
              <div>
                <p className="font-semibold text-gray-900">Você aprende observando o documento criado</p>
                <p className="text-gray-600 text-sm">Cada PDI gerado te mostra como deve ser a estrutura, os termos, o formato.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border-2 shadow-sm" style={{ borderColor: 'rgba(28, 140, 77, 0.3)' }}>
              <Check className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#1C8C4D' }} />
              <div>
                <p className="font-semibold text-gray-900">Termos técnicos corretos automaticamente</p>
                <p className="text-gray-600 text-sm">Não precisa decorar nomenclaturas. A ferramenta usa os termos certos pra você.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border-2 shadow-sm" style={{ borderColor: 'rgba(28, 140, 77, 0.3)' }}>
              <Check className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#1C8C4D' }} />
              <div>
                <p className="font-semibold text-gray-900">Alinhado à BNCC sem você precisar estudar tudo</p>
                <p className="text-gray-600 text-sm">O alinhamento com a Base Nacional vem pronto. Sem complicação.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border-2 shadow-sm" style={{ borderColor: 'rgba(28, 140, 77, 0.3)' }}>
              <Check className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#1C8C4D' }} />
              <div>
                <p className="font-semibold text-gray-900">Documentos profissionais mesmo sem experiência</p>
                <p className="text-gray-600 text-sm">Coordenação, direção, família — todos vão ver um trabalho impecável.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border-2 shadow-sm" style={{ borderColor: 'rgba(28, 140, 77, 0.3)' }}>
              <Check className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#1C8C4D' }} />
              <div>
                <p className="font-semibold text-gray-900">Você ganha confiança a cada documento</p>
                <p className="text-gray-600 text-sm">Na 1ª vez você aprende. Na 5ª, você já está segura. Na 10ª, você domina.</p>
              </div>
            </div>
          </div>
          <p className="text-lg font-bold text-center" style={{ color: '#1C8C4D' }}>
            Não é só uma ferramenta. É sua professora particular de documentação escolar.
          </p>
        </div>

        {/* Para quem funciona */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#1D8FF2' }}>
            👩‍🏫 Funciona para:
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paraQuem.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border-2 shadow-sm" style={{ borderColor: 'rgba(242, 200, 73, 0.5)' }}>
                <Check className="w-6 h-6 flex-shrink-0" style={{ color: '#1C8C4D' }} />
                <span className="font-medium text-gray-800">{item.texto}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Onde NÃO funciona */}
        <div className="rounded-3xl p-8 text-center border-2" style={{ background: '#F2F2F2', borderColor: 'rgba(242, 135, 5, 0.3)' }}>
          <h3 className="text-xl font-bold mb-4 text-gray-700">
            Onde a Fábrica Mágica NÃO funciona?
          </h3>
          <div className="space-y-2 text-gray-600">
            <p>❌ Pra quem não quer agir</p>
            <p>❌ Pra quem prefere continuar reclamando do sistema</p>
            <p>❌ Pra quem não está disposta a fazer diferente</p>
          </div>
          <p className="mt-6 text-lg font-medium text-gray-800">
            Se você é assim... este site não é pra você.
          </p>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#oferta"
            className="inline-flex items-center gap-2 px-8 py-4 text-white text-lg font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-lg"
            style={{ background: 'linear-gradient(135deg, #1C8C4D 0%, #167d44 100%)', boxShadow: '0 4px 20px rgba(28, 140, 77, 0.4)' }}
          >
            <Sparkles className="w-5 h-5" style={{ color: '#F2C849' }} />
            Ver planos e preços
          </a>
        </div>
      </div>
    </section>
  )
}
