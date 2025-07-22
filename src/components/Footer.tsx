import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="py-16 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="text-2xl font-bold text-white mb-4">
            Levioso
          </div>
          <p className="text-slate-400 mb-8">
            LinkedIn Ads Optimization mit KI
          </p>
          
          <div className="flex justify-center space-x-8 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Datenschutz
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Kontakt
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}