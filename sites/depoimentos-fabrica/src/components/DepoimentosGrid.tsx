import { useState } from 'react'
import { depoimentos } from '../data/depoimentos'
import { DepoimentoCard } from './DepoimentoCard'

export function DepoimentosGrid() {
  const [mostrarTodos, setMostrarTodos] = useState(false)
  
  // Filtrar depoimentos válidos (com conteúdo significativo)
  const depoimentosValidos = depoimentos.filter(d => 
    d.situacao_salvou && d.situacao_salvou.length > 2 ||
    d.maior_dor && d.maior_dor.length > 2 ||
    d.recomendacao && d.recomendacao.length > 2
  )

  const depoimentosExibir = mostrarTodos 
    ? depoimentosValidos 
    : depoimentosValidos.slice(0, 12)

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Histórias de Transformação
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubra como a Fábrica Mágica está mudando a rotina de professoras em todo o Brasil
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {depoimentosExibir.map((depoimento, index) => (
            <DepoimentoCard key={`${depoimento.email}-${index}`} depoimento={depoimento} />
          ))}
        </div>

        {/* Botão Ver Mais */}
        {!mostrarTodos && depoimentosValidos.length > 12 && (
          <div className="text-center">
            <button
              onClick={() => setMostrarTodos(true)}
              className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg"
            >
              Ver Todos os {depoimentosValidos.length} Depoimentos
            </button>
          </div>
        )}

        {/* Estatísticas */}
        <div className="mt-16 bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8">
            Resultados Comprovados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                {depoimentosValidos.length}
              </div>
              <div className="text-gray-600 font-medium">Professoras Satisfeitas</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                10h+
              </div>
              <div className="text-gray-600 font-medium">Economizadas por Mês</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-600 font-medium">Recomendariam</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
