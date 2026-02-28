import { DEHero } from './components/DEHero'
import { DEProblema } from './components/DEProblema'
import { DEDiferente } from './components/DEDiferente'
import { DETestimonials } from './components/DETestimonials'
import { DEPricing } from './components/DEPricing'
import { DEGuarantee } from './components/DEGuarantee'
import { DEFAQ } from './components/DEFAQ'
import { DEAbout } from './components/DEAbout'
import { DEFinalCTA } from './components/DEFinalCTA'
import { DEFooter } from './components/DEFooter'
import { DEUrgencyBar } from './components/DEUrgencyBar'
import { DEExitIntent } from './components/DEExitIntent'
import { DEWhatsAppButton } from './components/DEWhatsAppButton'
export default function App() {
  return (
    <main className="min-h-screen w-full bg-white text-black font-sans antialiased">
      <DEUrgencyBar />
      <DEExitIntent />
      <DEWhatsAppButton />
      <DEHero />
      <DEProblema />
      <DEDiferente />
      <DETestimonials />
      <DEPricing />
      <DEGuarantee />
      <DEFAQ />
      <DEAbout />
      <DEFinalCTA />
      <DEFooter />
    </main>
  )
}
