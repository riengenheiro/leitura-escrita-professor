import { FileText } from 'lucide-react'

const topicos = [
  {
    title: 'Linguagem Oral e Escrita:',
    items: [
      'Crianças infantilizadas e com dificuldade no processamento auditivo central',
      'Dificuldades em fazer associações, memorizar fatos, conteúdos, eventos, filmes, histórias, nomes, números, datas, e na compreensão da noção de tempo',
      'Problemas na consciência fonológica, como não reconhecer o som inicial das palavras',
      'Dificuldades em entender rimas, piadas e linguagem figurada',
      'Problemas em Matemática, História, Geografia, e Ciências, e dificuldades para expressar-se oralmente e por escrito',
      'Desafios em analisar situações, concluir tarefas, e fazer relações com o conhecimento existente',
    ],
  },
  {
    title: 'Problemas Físicos e de Saúde:',
    items: [
      'Dificuldades causadas pela respiração oral, como desatenção, distração, sono, irritação, impaciência, agitação, cansaço, e baixo rendimento escolar',
      'Problemas relacionados às funções estomatognáticas, como dificuldades na mastigação, sucção, e deglutição',
    ],
  },
  {
    title: 'Transtornos Emocionais e de Comportamento:',
    items: [
      'Transtornos como fobia social, mutismo seletivo, anorexia, bulimia, TDAH (Transtorno de Déficit de Atenção e Hiperatividade), TOD (Transtorno Opositivo Desafiador), transtorno bipolar, TOC (Transtorno Obsessivo Compulsivo), e depressão infantil',
      'Dificuldades ligadas a bullying, incluindo formas físicas, psicológicas, morais, verbais e sociais',
    ],
  },
]

export function GPConteudo() {
  return (
    <section className="bg-white text-black py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6">
          Antes que eu fale quanto você vai investir, CONHEÇA O CONTEÚDO:
        </h2>
        <p className="text-xl text-center text-gray-600 mb-14">
          Um guia completo para identificar e compreender as dificuldades escolares
        </p>
        
        <div className="space-y-10">
          {topicos.map((topico, i) => (
            <div key={i} className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 md:p-10 shadow-lg border-2 border-red-100">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-700 flex items-center gap-3">
                <FileText className="w-8 h-8" />
                {topico.title}
              </h3>
              <ul className="space-y-4">
                {topico.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-red-600 mt-2"></span>
                    <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-yellow-50 rounded-2xl p-8 md:p-10 border-2 border-yellow-400 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-800">
            E ainda vai GANHAR como BÔNUS:
          </h3>
          <div className="inline-flex items-center gap-3 bg-white rounded-xl px-8 py-5 shadow-lg">
            <FileText className="w-8 h-8 text-red-600" />
            <span className="text-xl md:text-2xl font-bold text-gray-800">
              Ebook de Sondagem Escolar
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
