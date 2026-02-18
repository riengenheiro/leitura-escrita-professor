import { useState, useEffect, useRef } from 'react'
import { ShoppingBag } from 'lucide-react'

const COMPRAS = [
  { nome: 'Ana Paula Mendes', cidade: 'São Paulo' },
  { nome: 'Carla Regina Santos', cidade: 'Rio de Janeiro' },
  { nome: 'Fernanda Oliveira', cidade: 'Belo Horizonte' },
  { nome: 'Juliana Costa', cidade: 'Curitiba' },
  { nome: 'Mariana Souza', cidade: 'Porto Alegre' },
  { nome: 'Patrícia Lima', cidade: 'Brasília' },
  { nome: 'Renata Ferreira', cidade: 'Salvador' },
  { nome: 'Sandra Alves', cidade: 'Fortaleza' },
  { nome: 'Tatiana Rodrigues', cidade: 'Recife' },
  { nome: 'Vanessa Pereira', cidade: 'Goiânia' },
  { nome: 'Adriana Martins', cidade: 'Campinas' },
  { nome: 'Beatriz Carvalho', cidade: 'Florianópolis' },
  { nome: 'Cristina Nascimento', cidade: 'Vitória' },
  { nome: 'Daniela Rocha', cidade: 'Manaus' },
  { nome: 'Eliane Barbosa', cidade: 'Belém' },
  { nome: 'Gabriela Teixeira', cidade: 'Guarulhos' },
  { nome: 'Helena Dias', cidade: 'São Luís' },
  { nome: 'Isabela Pinto', cidade: 'Maceió' },
  { nome: 'Luciana Gomes', cidade: 'Natal' },
  { nome: 'Mônica Ribeiro', cidade: 'João Pessoa' },
  { nome: 'Nádia Correia', cidade: 'Teresina' },
  { nome: 'Olívia Castro', cidade: 'Cuiabá' },
  { nome: 'Paula Cardoso', cidade: 'Campo Grande' },
  { nome: 'Rafaela Lopes', cidade: 'Aracaju' },
  { nome: 'Simone Araújo', cidade: 'Palmas' },
  { nome: 'Thaís Moreira', cidade: 'Boa Vista' },
  { nome: 'Úrsula Freitas', cidade: 'Macapá' },
  { nome: 'Vera Andrade', cidade: 'Rio Branco' },
  { nome: 'Wanessa Campos', cidade: 'Porto Velho' },
  { nome: 'Yasmin Batista', cidade: 'Santos' },
]

const VISIBLE_MS_MIN = 2500
const VISIBLE_MS_MAX = 4500
const HIDDEN_MS_MIN = 1500
const HIDDEN_MS_MAX = 3500

const TEXTOS_COMPRA = [
  'acabou de comprar',
  'comprou agora',
  'acabou de assinar',
  'comprou há pouco',
]

function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomItemExcluding<T>(arr: T[], excludeIndex: number): { item: T; index: number } {
  const indices = arr.map((_, i) => i).filter((i) => i !== excludeIndex)
  const index = indices[Math.floor(Math.random() * indices.length)]
  return { item: arr[index], index }
}

function randomTextoCompra(): string {
  return TEXTOS_COMPRA[Math.floor(Math.random() * TEXTOS_COMPRA.length)]
}

export function FMSocialProof() {
  const [item, setItem] = useState(() => {
    const idx = Math.floor(Math.random() * COMPRAS.length)
    return { ...COMPRAS[idx], index: idx, textoCompra: randomTextoCompra() }
  })
  const [visible, setVisible] = useState(true)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    const run = (lastIndex: number) => {
      const { item: next, index } = randomItemExcluding(COMPRAS, lastIndex)
      setVisible(true)
      setItem({ ...next, index, textoCompra: randomTextoCompra() })
      const visibleMs = randomBetween(VISIBLE_MS_MIN, VISIBLE_MS_MAX)
      timeoutRef.current = setTimeout(() => {
        setVisible(false)
        const hiddenMs = randomBetween(HIDDEN_MS_MIN, HIDDEN_MS_MAX)
        timeoutRef.current = setTimeout(() => run(index), hiddenMs)
      }, visibleMs)
    }

    const visibleMs = randomBetween(VISIBLE_MS_MIN, VISIBLE_MS_MAX)
    timeoutRef.current = setTimeout(() => {
      setVisible(false)
      const hiddenMs = randomBetween(HIDDEN_MS_MIN, HIDDEN_MS_MAX)
      timeoutRef.current = setTimeout(() => run(item.index), hiddenMs)
    }, visibleMs)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div
      className="fixed bottom-6 left-6 z-40 max-w-[calc(100vw-3rem)] transition-all duration-300 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      aria-live="polite"
    >
      <div
        className="flex items-center gap-3 bg-white rounded-xl shadow-xl py-3 px-4 pr-5"
        style={{
          border: '2px solid rgba(28, 140, 77, 0.35)',
          boxShadow: '0 8px 24px rgba(28, 140, 77, 0.15), 0 2px 8px rgba(0,0,0,0.06)',
        }}
      >
        <div
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white"
          style={{ background: 'linear-gradient(135deg, #1C8C4D, #167d44)' }}
        >
          <ShoppingBag className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">{item.nome}</span>
            <span className="text-gray-500">, {item.cidade}</span>
          </p>
          <p className="text-xs font-semibold mt-0.5" style={{ color: '#1C8C4D' }}>
            {item.textoCompra}
          </p>
        </div>
      </div>
    </div>
  )
}
