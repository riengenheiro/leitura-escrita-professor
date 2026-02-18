import { Hero } from '../components/Hero'
import { Problem } from '../components/Problem'
import { Discovery } from '../components/Discovery'
import { Nutrients } from '../components/Nutrients'
import { Solution } from '../components/Solution'
import { Testimonials } from '../components/Testimonials'
import { Modules } from '../components/Modules'
import { Bonuses } from '../components/Bonuses'
import { Guarantee } from '../components/Guarantee'
import { Pricing } from '../components/Pricing'
import { FAQ } from '../components/FAQ'
import { FinalCTA } from '../components/FinalCTA'
import { Footer } from '../components/Footer'
import { UrgencyBar } from '../components/UrgencyBar'

export function LandingPage() {
  return (
    <main className="min-h-screen bg-dark-900">
      <UrgencyBar />
      <Hero />
      <Problem />
      <Discovery />
      <Nutrients />
      <Solution />
      <Testimonials />
      <Modules />
      <Bonuses />
      <Guarantee />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
