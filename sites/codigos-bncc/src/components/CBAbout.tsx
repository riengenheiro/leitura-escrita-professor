import { OptimizedImage } from './OptimizedImage'

export function CBAbout() {
  return (
    <section className="bg-gray-100 text-black py-10 md:py-12">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl p-6 shadow-lg">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg flex-shrink-0 border-4 border-green-500">
            <OptimizedImage
              src="/images/codigos-bncc/03-especialista.png"
              alt="Dra. Guaciara Fornaciari - Doutora Escola"
              className="w-full h-full object-cover object-top"
              width={128}
              height={128}
            />
          </div>
          <div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <strong className="text-black">Guaciara Fornaciari</strong> — Fonoaudióloga, professora e especialista em inclusão com <strong>19 anos de experiência</strong>. Já ajudou mais de <strong className="text-green-600">2.000 professoras</strong> a simplificar a documentação escolar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
