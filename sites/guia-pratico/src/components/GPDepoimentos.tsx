export function GPDepoimentos() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white text-black py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          SE FALTA MAIS ALGO A DIZER, DEIXO PRAS PESSOAS QUE JÁ ADQUIRIRAM MEUS MATERIAIS:
        </h2>
        <p className="text-xl text-center text-gray-600 mb-14">
          Bom, se você já se convenceu, siga o exemplo de <strong className="text-red-600">MAIS de 4.000 pessoas</strong> que adquiriram meus materiais e tiveram seus estudos facilitados!
        </p>
        
        {/* Placeholder para depoimentos - adicione imagens de depoimentos reais */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center mb-6">
              <p className="text-gray-500 text-center px-4">
                [Imagem de depoimento 1]<br/>
                Adicione prints de depoimentos reais aqui
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center mb-6">
              <p className="text-gray-500 text-center px-4">
                [Imagem de depoimento 2]<br/>
                Adicione prints de depoimentos reais aqui
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
