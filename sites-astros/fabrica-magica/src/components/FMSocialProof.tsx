import { useState, useEffect, useRef } from 'react';
import { ShoppingBag } from 'lucide-react';

const COMPRAS = [
  { nome: 'Ana Paula Mendes', cidade: 'São Paulo' }, { nome: 'Carla Regina Santos', cidade: 'Rio de Janeiro' },
  { nome: 'Fernanda Oliveira', cidade: 'Belo Horizonte' }, { nome: 'Juliana Costa', cidade: 'Curitiba' },
  { nome: 'Mariana Souza', cidade: 'Porto Alegre' }, { nome: 'Patrícia Lima', cidade: 'Brasília' },
  { nome: 'Renata Ferreira', cidade: 'Salvador' }, { nome: 'Sandra Alves', cidade: 'Fortaleza' },
  { nome: 'Tatiana Rodrigues', cidade: 'Recife' }, { nome: 'Vanessa Pereira', cidade: 'Goiânia' },
  { nome: 'Adriana Martins', cidade: 'Campinas' }, { nome: 'Beatriz Carvalho', cidade: 'Florianópolis' },
  { nome: 'Cristina Nascimento', cidade: 'Vitória' }, { nome: 'Daniela Rocha', cidade: 'Manaus' },
  { nome: 'Eliane Barbosa', cidade: 'Belém' }, { nome: 'Gabriela Teixeira', cidade: 'Guarulhos' },
  { nome: 'Helena Dias', cidade: 'São Luís' }, { nome: 'Isabela Pinto', cidade: 'Maceió' },
  { nome: 'Luciana Gomes', cidade: 'Natal' }, { nome: 'Mônica Ribeiro', cidade: 'João Pessoa' },
  { nome: 'Nádia Correia', cidade: 'Teresina' }, { nome: 'Olívia Castro', cidade: 'Cuiabá' },
  { nome: 'Paula Cardoso', cidade: 'Campo Grande' }, { nome: 'Rafaela Lopes', cidade: 'Aracaju' },
  { nome: 'Simone Araújo', cidade: 'Palmas' }, { nome: 'Thaís Moreira', cidade: 'Boa Vista' },
  { nome: 'Úrsula Freitas', cidade: 'Macapá' }, { nome: 'Vera Andrade', cidade: 'Rio Branco' },
  { nome: 'Wanessa Campos', cidade: 'Porto Velho' }, { nome: 'Yasmin Batista', cidade: 'Santos' },
];
const TEXTOS = ['acabou de comprar', 'comprou agora', 'acabou de assinar', 'comprou há pouco'];
const rnd = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
function otherItem<T>(arr: T[], excludeIndex: number): { item: T; index: number } {
  const indices = arr.map((_, i) => i).filter(i => i !== excludeIndex);
  const index = indices[Math.floor(Math.random() * indices.length)] ?? 0;
  return { item: arr[index], index };
}

export function FMSocialProof() {
  const [item, setItem] = useState(() => ({ ...COMPRAS[Math.floor(Math.random() * COMPRAS.length)], index: 0, texto: TEXTOS[Math.floor(Math.random() * TEXTOS.length)] }));
  const [visible, setVisible] = useState(true);
  const ref = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const run = (lastIdx: number) => {
      const { item: next, index: idx } = otherItem(COMPRAS, lastIdx);
      setVisible(true);
      setItem({ ...next, index: idx, texto: TEXTOS[Math.floor(Math.random() * TEXTOS.length)] });
      ref.current = setTimeout(() => {
        setVisible(false);
        ref.current = setTimeout(() => run(idx), rnd(1500, 3500));
      }, rnd(2500, 4500));
    };
    ref.current = setTimeout(() => { setVisible(false); ref.current = setTimeout(() => run(item.index), rnd(1500, 3500)); }, rnd(2500, 4500));
    return () => { if (ref.current) clearTimeout(ref.current); };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-[calc(100vw-3rem)] transition-all duration-300 ease-out" style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(12px)', pointerEvents: visible ? 'auto' : 'none' }} aria-live="polite">
      <div className="flex items-center gap-3 bg-white rounded-xl shadow-xl py-3 px-4 pr-5" style={{ border: '2px solid rgba(28, 140, 77, 0.35)', boxShadow: '0 8px 24px rgba(28, 140, 77, 0.15)' }}>
        <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ background: 'linear-gradient(135deg, #1C8C4D, #167d44)' }}>
          <ShoppingBag className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-gray-700"><span className="font-semibold text-gray-900">{item.nome}</span><span className="text-gray-500">, {item.cidade}</span></p>
          <p className="text-xs font-semibold mt-0.5" style={{ color: '#1C8C4D' }}>{item.texto}</p>
        </div>
      </div>
    </div>
  );
}
