const motivos = [
  {
    numero: '1',
    titulo: 'Aplicação imediata',
    texto: 'Cada proposta pode ser colocada em prática no mesmo dia. Nada de teoria difícil ou planos complexos: é pegar, adaptar e usar!',
  },
  {
    numero: '2️⃣',
    titulo: 'Foco na BNCC e nos Campos de Experiência',
    texto: 'Todas as atividades foram criadas com base nos direitos de aprendizagem, campos de experiência e objetivos da alfabetização na prática. Você terá segurança pedagógica e respaldo técnico!',
  },
  {
    numero: '3',
    titulo: 'Engajamento real dos alunos',
    texto: 'Ao transformar o conteúdo em brincadeira, você ativa a curiosidade natural da criança e acelera o processo de alfabetização — respeitando o ritmo de cada um.',
  },
]

export function ALMotivos() {
  return (
    <section className="bg-gray-50 text-black py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="space-y-10">
          {motivos.map((m, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 md:p-8 border border-gray-100">
              <p className="text-2xl font-bold text-gray-700 mb-3">{m.numero}</p>
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">{m.titulo}</h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{m.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
