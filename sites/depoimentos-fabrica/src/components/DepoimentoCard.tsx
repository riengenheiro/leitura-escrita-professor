import { Depoimento } from '../data/depoimentos'

interface DepoimentoCardProps {
  depoimento: Depoimento
}

export function DepoimentoCard({ depoimento }: DepoimentoCardProps) {
  // Pegar iniciais do nome
  const getInitials = (name: string) => {
    const parts = name.trim().split(' ')
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
  }

  // Cores do avatar baseadas no nome
  const getAvatarColor = (name: string) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-indigo-500 to-indigo-600',
      'from-cyan-500 to-cyan-600',
      'from-sky-500 to-sky-600',
      'from-blue-600 to-indigo-600',
    ]
    const index = name.charCodeAt(0) % colors.length
    return colors[index]
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6 border border-blue-100">
      {/* Header com Avatar e Nome */}
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${getAvatarColor(depoimento.nome)} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
          {getInitials(depoimento.nome)}
        </div>
        <div>
          <h3 className="font-bold text-lg text-primary">{depoimento.nome}</h3>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <span>{new Date(depoimento.timestamp).toLocaleDateString('pt-BR')}</span>
          </div>
        </div>
      </div>

      {/* Badges de Tempo */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
          Antes: {depoimento.tempo_antes}
        </span>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
          Hoje: {depoimento.tempo_hoje}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="space-y-3">
        {depoimento.maior_dor && depoimento.maior_dor.length > 2 && (
          <div>
            <p className="text-xs font-semibold text-secondary mb-1">💡 Maior Dificuldade:</p>
            <p className="text-sm text-gray-700 italic leading-relaxed">
              "{depoimento.maior_dor}"
            </p>
          </div>
        )}

        {depoimento.situacao_salvou && depoimento.situacao_salvou.length > 2 && (
          <div>
            <p className="text-xs font-semibold text-secondary mb-1">✨ Como a Fábrica Mágica Ajudou:</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              "{depoimento.situacao_salvou}"
            </p>
          </div>
        )}

        {depoimento.recomendacao && depoimento.recomendacao.length > 2 && (
          <div>
            <p className="text-xs font-semibold text-secondary mb-1">💬 Recomendação:</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              "{depoimento.recomendacao}"
            </p>
          </div>
        )}
      </div>

      {/* Badge de Avaliação */}
      <div className="mt-4 pt-4 border-t border-blue-100">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-accent text-white px-4 py-2 rounded-full text-xs font-bold shadow-md">
          <span>⭐</span>
          <span>{depoimento.valeu_investimento}</span>
        </div>
      </div>
    </div>
  )
}
