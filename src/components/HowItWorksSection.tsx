import { motion } from 'framer-motion'

const steps = [
  {
    title: "Verbinden",
    description: "LinkedIn Ads Account verbinden"
  },
  {
    title: "Analysieren", 
    description: "KI analysiert deine Kampagnen"
  },
  {
    title: "Optimieren",
    description: "Automatische Verbesserungen anwenden"
  }
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            So funktioniert's
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Step Number */}
              <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-6">
                {index + 1}
              </div>

              {/* Screenshot Placeholder */}
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 mb-6">
                <div className="aspect-video bg-slate-700/20 rounded-lg flex items-center justify-center">
                  <div className="text-slate-500 text-sm">
                    Step Screenshot
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}