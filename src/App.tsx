import { CosmicStarfield } from './components/CosmicStarfield'
import { CosmicNav } from './components/CosmicNav'
import { HeroSection } from './components/HeroSection'
import { HowItWorksSection } from './components/HowItWorksSection'
import { FeaturesSection } from './components/FeaturesSection'
import { PricingSection } from './components/PricingSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen text-white relative overflow-x-hidden bg-slate-900">
      {/* Background */}
      <CosmicStarfield />
      
      {/* Navigation */}
      <CosmicNav />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App