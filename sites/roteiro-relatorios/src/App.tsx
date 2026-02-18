import { RRHero } from './components/RRHero'
import { RRBenefits } from './components/RRBenefits'
import { RRTestimonials } from './components/RRTestimonials'
import { RRAbout } from './components/RRAbout'
import { RRFinalCTA } from './components/RRFinalCTA'
import { RRFooter } from './components/RRFooter'

export default function App() {
  return (
    <main className="min-h-screen w-full bg-white text-black font-sans antialiased">
      <RRHero />
      <RRBenefits />
      <RRTestimonials />
      <RRAbout />
      <RRFinalCTA />
      <RRFooter />
    </main>
  )
}
