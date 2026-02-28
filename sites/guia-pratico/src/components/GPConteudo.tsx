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
    <section className="bg-[var(--color-papel-escuro)] border-y-2 border-[var(--color-borda-livro)] py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-[var(--color-texte-livro)]">
          O que tem no guia
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Conteúdo completo para identificar e compreender as dificuldades escolares
        </p>
        
        <div className="space-y-8">
          {topicos.map((topico, i) => (
            <div key={i} className="bg-white rounded-xl p-6 md:p-8 border-2 border-[var(--color-borda-livro)] shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[var(--color-destaque)] flex items-center gap-2">
                <FileText className="w-6 h-6" />
                {topico.title}
              </h3>
              <ul className="space-y-4">
                {topico.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[var(--color-destaque)] mt-2"></span>
                    <span className="text-lg text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-10 bg-white rounded-xl p-6 border-2 border-[var(--color-borda-livro)]">
          <h3 className="text-xl font-bold mb-4 text-[var(--color-texte-livro)] text-center">
            Bônus incluídos no pacote
          </h3>
          <ul className="space-y-2 text-gray-700 max-w-xl mx-auto">
            <li className="flex items-center gap-2">• Check List Sondagem Escolar — Educação Infantil</li>
            <li className="flex items-center gap-2">• Check List Sondagem Escolar — Ensino Fundamental Inicial e Final</li>
            <li className="flex items-center gap-2">• Aula de Sondagem em Vídeo</li>
            <li className="flex items-center gap-2">• Ebook Sondagem — Imersão em Avaliação Diagnóstica</li>
            <li className="flex items-center gap-2 pt-2 border-t border-[var(--color-borda-livro)]">• Ebook Como Acabar com as Interrupções em Sala + Planejamento em 1 Hora</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
