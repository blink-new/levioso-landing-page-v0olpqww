import { motion } from 'framer-motion'
import { Button } from './ui/button'

export function CosmicNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-white">
            Levioso
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">
              So funktioniert's
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">
              Preise
            </a>
          </div>

          {/* CTA Button */}
          <Button 
            size="sm"
            className="bg-amber-600 hover:bg-amber-700 text-white"
          >
            Demo
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}