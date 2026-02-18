import { Star, Clock, Quote } from 'lucide-react'

const depoimentos = [
  {
    nome: 'Cibele S.',
    cargo: 'Professora - Iniciante em AEE',
    texto: 'Era meu primeiro ano no AEE e não sabia nem por onde começar. A Fábrica Mágica me guiou nos documentos que eu precisava entregar. Me salvou com 15 relatórios que pareciam impossíveis!',
    destaque: 'Começou do zero com sucesso',
  },
  {
    nome: 'Raimunda N.',
    cargo: 'Diretora Escolar',
    texto: 'Melhor investimento que fiz para minha escola. Consigo orientar as professoras e garantir que todos os documentos de inclusão estejam em dia. Mudou a rotina de toda a equipe!',
    destaque: 'Escola inteira transformada',
  },
  {
    nome: 'Neyla M.',
    cargo: 'Professora de AEE',
    texto: 'Fui trabalhar no AEE e tinha muitos relatórios para fazer. A Fábrica Mágica foi minha salvação, consegui em pouco tempo fazer os relatórios. Não vejo minha vida sem a Fábrica Mágica!',
    destaque: 'De 2-5h para menos de 30min',
  },
  {
    nome: 'Maeli F.',
    cargo: 'Professora de Sala de Recursos',
    texto: 'Tenho 2 salas de recursos e a cada trimestre são 40 relatórios. Antes eu gastava mais de 10 horas. Hoje, menos de 30 minutos. Superou minhas expectativas!',
    destaque: 'De +10h para menos de 30min',
  },
  {
    nome: 'Elizete R.',
    cargo: 'Professora',
    texto: 'Eu teria que realizar 40 relatórios e a Fábrica Mágica me salvou. Agora ganhei tempo e até viajo! Já indico para você que não quer mais perder tempo planejando.',
    destaque: 'A Fábrica Mágica me salvou',
  },
  {
    nome: 'Margaret D.',
    cargo: 'Professora de AEE',
    texto: 'Para entregar relatórios da turma de 25 alunos, era o mês todo fazendo e refazendo. Precisei entregar 12 relatórios da sala do AEE e mais 3 da sala regular e a Fábrica Mágica me salvou!',
    destaque: 'De +10h para 30min-1h',
  },
  {
    nome: 'Ivone Q.',
    cargo: 'Coordenadora Pedagógica',
    texto: 'Como coordenadora, precisava orientar 12 professoras sobre os PDIs e PEIs. A Fábrica Mágica padronizou toda a documentação da escola. Agora consigo acompanhar a equipe com qualidade!',
    destaque: 'Toda equipe organizada',
  },
  {
    nome: 'Rosiane C.',
    cargo: 'Professora de Inclusão',
    texto: 'Quando a mãe pediu um relatório no final da tarde para o outro dia, uma consulta marcada com neurologista. Se não fosse a Fábrica Mágica eu não teria conseguido. Superou minhas expectativas!',
    destaque: 'De 2-5h para 30min-1h',
  },
]

export function FMDepoimentos() {
  return (
    <section className="bg-gradient-to-b from-white to-teal-50 text-gray-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
            O Que Professoras, Coordenadoras e Diretoras Estão Dizendo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de profissionais que transformaram sua rotina com a Fábrica Mágica - muitas começando do zero.
          </p>
        </div>

        {/* Cards de depoimentos - Grid de 4 principais */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {depoimentos.slice(0, 4).map((dep, i) => (
            <div 
              key={i} 
              className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border-2 border-teal-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-teal-100 px-4 py-2 rounded-bl-2xl">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              
              <Quote className="w-8 h-8 text-teal-200 mb-3" />
              
              <p className="text-base md:text-lg text-gray-700 mb-4 italic leading-relaxed">
                "{dep.texto}"
              </p>
              
              <div className="inline-flex items-center gap-2 bg-btn-primary/20 text-btn-primary px-3 py-1.5 rounded-full font-bold text-sm mb-4">
                <Clock className="w-4 h-4" />
                {dep.destaque}
              </div>
              
              <div className="border-t border-gray-100 pt-3">
                <p className="font-bold text-gray-900">{dep.nome}</p>
                <p className="text-gray-500 text-sm">{dep.cargo}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Grid secundário com mais depoimentos */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {depoimentos.slice(4, 8).map((dep, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl p-5 shadow-lg border border-teal-100"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-sm text-gray-700 mb-3 italic line-clamp-4">
                "{dep.texto}"
              </p>
              
              <div className="text-xs bg-btn-primary/20 text-btn-primary px-2 py-1 rounded-full font-bold inline-block mb-3">
                {dep.destaque}
              </div>
              
              <div className="border-t border-gray-100 pt-2">
                <p className="font-bold text-gray-900 text-sm">{dep.nome}</p>
                <p className="text-gray-500 text-xs">{dep.cargo}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Destaque de números - Teal para confiança + Gold para valor */}
        <div className="bg-gradient-to-r from-teal-700 to-teal-800 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Mais de 3.342 professoras já transformaram sua rotina
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">98%</div>
              <p className="text-teal-100">recomendam para colegas</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">10h+</div>
              <p className="text-teal-100">economizadas por semana</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">11.827</div>
              <p className="text-teal-100">documentos já gerados</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">66%</div>
              <p className="text-teal-100">começaram sem experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
