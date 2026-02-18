import { Users, Star, Heart } from 'lucide-react'

export function SocialProof() {
  return (
    <section className="mt-10 mb-6">
      {/* Estatísticas */}
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
          <div className="flex justify-center mb-2">
            <Users className="w-5 h-5 text-emerald-500" />
          </div>
          <p className="text-2xl font-bold text-slate-800">15k+</p>
          <p className="text-slate-500 text-xs">Professoras</p>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
          <div className="flex justify-center mb-2">
            <Star className="w-5 h-5 text-amber-500" />
          </div>
          <p className="text-2xl font-bold text-slate-800">4.9</p>
          <p className="text-slate-500 text-xs">Avaliação</p>
        </div>
        
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
          <div className="flex justify-center mb-2">
            <Heart className="w-5 h-5 text-rose-500" />
          </div>
          <p className="text-2xl font-bold text-slate-800">50k+</p>
          <p className="text-slate-500 text-xs">Documentos</p>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-sm">
              MR
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-amber-500 fill-amber-500" />
              ))}
            </div>
            <p className="text-slate-700 text-sm italic leading-relaxed">
              "A Fábrica Mágica revolucionou minha rotina! Faço em 3 minutos o que antes levava horas."
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Maria R. - Professora há 12 anos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
