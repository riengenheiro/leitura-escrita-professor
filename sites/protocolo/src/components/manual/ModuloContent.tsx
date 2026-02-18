import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

interface ModuloContentProps {
  title: string
  content: string[]
  viewMode: 'interactive' | 'text' | 'print'
}

export function ModuloContent({ title, content, viewMode }: ModuloContentProps) {
  const formatContent = (text: string) => {
    // Detect special formatting
    if (text.startsWith('⚠️') || text.startsWith('💡') || text.startsWith('✅') || text.startsWith('❌')) {
      return { type: 'highlight', text }
    }
    if (text.startsWith('🔗') || text.match(/^https?:\/\//)) {
      return { type: 'link', text }
    }
    if (text.startsWith('[') && text.includes(']') && text.includes('http')) {
      return { type: 'reference', text }
    }
    if (text.startsWith('→')) {
      return { type: 'arrow', text: text.substring(1).trim() }
    }
    if (text.match(/^\d+\./)) {
      return { type: 'numbered', text }
    }
    if (text.startsWith('•')) {
      return { type: 'bullet', text: text.substring(1).trim() }
    }
    if (text === '') {
      return { type: 'spacer', text: '' }
    }
    if (text.startsWith('**') && text.endsWith('**')) {
      return { type: 'bold', text: text.replace(/\*\*/g, '') }
    }
    return { type: 'normal', text }
  }

  const renderLink = (text: string) => {
    // Extract URL from text
    const urlMatch = text.match(/(https?:\/\/[^\s]+)/)
    if (!urlMatch) return <span>{text}</span>
    
    const url = urlMatch[1]
    const beforeUrl = text.substring(0, text.indexOf(url))
    const afterUrl = text.substring(text.indexOf(url) + url.length)
    
    return (
      <span>
        {beforeUrl}
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-energy-400 hover:text-energy-300 underline"
        >
          {url}
        </a>
        {afterUrl}
      </span>
    )
  }

  const renderReference = (text: string) => {
    // Format: [1] Author et al. Title. Journal. Year.
    // → URL
    const parts = text.split('→')
    const reference = parts[0]?.trim()
    const url = parts[1]?.trim()
    
    return (
      <div className="flex flex-col gap-1">
        <span className="text-gray-300">{reference}</span>
        {url && (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-energy-400 hover:text-energy-300 underline text-sm flex items-center gap-1"
          >
            <span>→</span> Acessar estudo
          </a>
        )}
      </div>
    )
  }

  if (viewMode === 'text' || viewMode === 'print') {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="prose prose-invert max-w-none">
          {content.map((line, index) => {
            const formatted = formatContent(line)
            
            if (formatted.type === 'spacer') {
              return <div key={index} className="h-4" />
            }
            
            if (formatted.type === 'highlight') {
              return (
                <div key={index} className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 my-4">
                  <p className="text-sm">{formatted.text}</p>
                </div>
              )
            }
            
            if (formatted.type === 'bold') {
              return (
                <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                  {formatted.text}
                </h3>
              )
            }
            
            if (formatted.type === 'arrow') {
              return (
                <div key={index} className="flex items-start gap-2 text-gray-300">
                  <span className="text-energy-400">→</span>
                  <span>{formatted.text}</span>
                </div>
              )
            }
            
            if (formatted.type === 'bullet') {
              return (
                <div key={index} className="flex items-start gap-2 text-gray-300 ml-4">
                  <span className="text-energy-400">•</span>
                  <span>{formatted.text}</span>
                </div>
              )
            }
            
            if (formatted.type === 'link' || formatted.type === 'reference') {
              return (
                <div key={index} className="my-2">
                  {formatted.type === 'link' ? renderLink(formatted.text) : renderReference(formatted.text)}
                </div>
              )
            }
            
            return (
              <p key={index} className="text-gray-300 leading-relaxed">
                {formatted.text}
              </p>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-energy-500 to-energy-600 flex items-center justify-center">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="space-y-4">
        {content.map((line, index) => {
          const formatted = formatContent(line)
          
          if (formatted.type === 'spacer') {
            return <div key={index} className="h-4" />
          }
          
          if (formatted.type === 'highlight') {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4"
              >
                <p className="text-sm text-gray-200">{formatted.text}</p>
              </motion.div>
            )
          }
          
          if (formatted.type === 'bold') {
            return (
              <motion.h3
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="text-xl font-bold mt-6 mb-3 text-white"
              >
                {formatted.text}
              </motion.h3>
            )
          }
          
          if (formatted.type === 'link') {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="my-2"
              >
                {renderLink(formatted.text)}
              </motion.div>
            )
          }
          
          if (formatted.type === 'reference') {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="my-2 p-3 bg-dark-800 rounded-lg"
              >
                {renderReference(formatted.text)}
              </motion.div>
            )
          }
          
          if (formatted.type === 'arrow') {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-2 text-gray-300"
              >
                <span className="text-energy-400 text-xl">→</span>
                <span>{formatted.text}</span>
              </motion.div>
            )
          }
          
          if (formatted.type === 'bullet') {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 text-gray-300 ml-4"
              >
                <span className="text-energy-400 text-xl mt-1">•</span>
                <span>{formatted.text}</span>
              </motion.div>
            )
          }
          
          return (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="text-gray-300 leading-relaxed"
            >
              {formatted.text}
            </motion.p>
          )
        })}
      </div>
    </div>
  )
}
