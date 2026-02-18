export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 py-20 px-6 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-4">
          <span className="bg-gradient-to-r from-secondary to-accent text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Depoimentos Reais
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight">
          Veja o que Professoras estão dizendo sobre a{' '}
          <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Fábrica Mágica
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
          Centenas de educadoras já transformaram sua rotina de relatórios. 
          Reduziram horas de trabalho e ganharam mais qualidade de vida.
        </p>
        
        <div className="flex flex-wrap gap-8 justify-center items-center text-center">
          <div className="bg-white rounded-2xl shadow-xl p-6 min-w-[160px]">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              40+
            </div>
            <div className="text-sm text-gray-600 font-medium mt-1">Depoimentos</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 min-w-[160px]">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              10h+
            </div>
            <div className="text-sm text-gray-600 font-medium mt-1">Economizadas</div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-6 min-w-[160px]">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              95%
            </div>
            <div className="text-sm text-gray-600 font-medium mt-1">Satisfação</div>
          </div>
        </div>
      </div>
    </section>
  )
}
