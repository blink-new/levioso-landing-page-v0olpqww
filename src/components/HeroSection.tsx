import { motion } from 'framer-motion'
import { Button } from './ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold leading-tight text-white"
          >
            Levioso
          </motion.h1>

          {/* Sub-Headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto"
          >
            LinkedIn Ads Optimization mit KI
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pt-8"
          >
            <Button 
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-4 text-lg rounded-lg"
            >
              Demo starten
            </Button>
          </motion.div>

          {/* Screenshot Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 relative"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="aspect-video bg-slate-700/30 rounded-xl flex items-center justify-center">
                <div className="text-slate-500 text-center">
                  <div className="text-lg font-medium mb-2">Dashboard Screenshot</div>
                  <div className="text-sm">Hier kommt das Levioso Dashboard</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}