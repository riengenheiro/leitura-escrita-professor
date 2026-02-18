import { ALHero } from './components/ALHero'
import { ALIntro } from './components/ALIntro'
import { ALProblema } from './components/ALProblema'
import { ALMotivos } from './components/ALMotivos'
import { ALVaiLevar } from './components/ALVaiLevar'
import { ALResumindo } from './components/ALResumindo'
import { ALPricing } from './components/ALPricing'
import { ALGuarantee } from './components/ALGuarantee'
import { ALFAQ } from './components/ALFAQ'
import { ALAbout } from './components/ALAbout'
import { ALFinalCTA } from './components/ALFinalCTA'
import { ALFooter } from './components/ALFooter'

export default function App() {
  return (
    <main className="min-h-screen w-full bg-white text-black font-sans antialiased">
      <ALHero />
      <ALIntro />
      <ALProblema />
      <ALMotivos />
      <ALVaiLevar />
      <ALResumindo />
      <ALPricing />
      <ALGuarantee />
      <ALFAQ />
      <ALAbout />
      <ALFinalCTA />
      <ALFooter />
    </main>
  )
}
