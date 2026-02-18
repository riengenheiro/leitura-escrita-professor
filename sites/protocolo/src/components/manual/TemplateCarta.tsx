import { useState } from 'react'
import { FileText, Copy, Check } from 'lucide-react'

interface TemplateCartaProps {
  content: string[]
  viewMode: 'interactive' | 'text' | 'print'
}

export function TemplateCarta({ content, viewMode }: TemplateCartaProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const text = content.join('\n')
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (viewMode === 'text' || viewMode === 'print') {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Template: Carta para Médico/Nutricionista</h2>
        <div className="bg-dark-800 rounded-xl p-6">
          <div className="space-y-4 font-mono text-sm whitespace-pre-line">
            {content.map((line, index) => (
              <div key={index} className={line.startsWith('[') ? 'text-energy-400' : 'text-gray-300'}>
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-energy-500 to-energy-600 flex items-center justify-center">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Template: Carta para Médico/Nutricionista</h2>
          <p className="text-sm text-gray-400">Preencha e leve para sua consulta</p>
        </div>
      </div>

      <div className="bg-dark-800 rounded-xl p-6 border border-gray-800 relative">
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors"
          title="Copiar texto"
        >
          {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-gray-400" />}
        </button>

        <div className="space-y-4 font-mono text-sm whitespace-pre-line pr-12">
          {content.map((line, index) => (
            <div key={index} className={line.startsWith('[') ? 'text-energy-400 font-semibold' : 'text-gray-300'}>
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
