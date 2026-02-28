import { Star } from 'lucide-react'

const depoimentos = [
  {
    nome: 'Cibele S.',
    cargo: 'Professora — 1o ano no AEE',
    texto: 'Era meu primeiro ano no AEE e não sabia nem por onde começar. A Fábrica Mágica me guiou nos documentos que eu precisava entregar. Me salvou com 15 relatórios que pareciam impossíveis!',
    resultado: 'Começou do zero',
  },
  {
    nome: 'Maeli F.',
    cargo: 'Professora de Sala de Recursos',
    texto: 'Tenho 2 salas de recursos e a cada trimestre são 40 relatórios. Antes eu gastava mais de 10 horas. Hoje, menos de 30 minutos.',
    resultado: 'De 10h para 30min',
  },
  {
    nome: 'Raimunda N.',
    cargo: 'Diretora Escolar',
    texto: 'Melhor investimento que fiz para minha escola. Consigo orientar as professoras e garantir que todos os documentos de inclusão estejam em dia.',
    resultado: 'Escola inteira organizada',
  },
  {
    nome: 'Neyla M.',
    cargo: 'Professora de AEE',
    texto: 'Confesso que tinha medo de usar. Mas é tão simples! É só preencher as informações do aluno e pronto. Não vejo minha vida sem a Fábrica Mágica.',
    resultado: 'Superou o medo',
  },
]

export function FMDepoimentos() {
  return (
    <section className="bg-warm-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-texto mb-3">
            O que as professoras dizem
          </h2>
          <p className="text-lg text-texto-muted">
            Histórias reais de quem já usa no dia a dia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {depoimentos.map((dep, i) => (
            <div key={i} className="card-book p-6 hover:shadow-md transition-shadow">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-dourado text-dourado" />
                ))}
              </div>
              <p className="text-texto-muted text-sm leading-relaxed mb-4">
                &ldquo;{dep.texto}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-cream-dark">
                <div>
                  <p className="font-semibold text-texto text-sm">{dep.nome}</p>
                  <p className="text-xs text-texto-light">{dep.cargo}</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-verde-light text-verde">
                  {dep.resultado}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
