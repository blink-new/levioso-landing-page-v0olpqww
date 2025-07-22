import { motion } from 'framer-motion'

const features = [
  {
    title: "KI-Optimierung",
    description: "Automatische Verbesserung deiner LinkedIn Ads"
  },
  {
    title: "Performance Analytics",
    description: "Klare Einblicke in deine Kampagnen-Performance"
  },
  {
    title: "ROI Tracking",
    description: "Verfolge deinen Return on Investment in Echtzeit"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative">
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
            Features
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Screenshot Placeholder */}
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30 mb-6">
                <div className="aspect-square bg-slate-700/20 rounded-lg flex items-center justify-center">
                  <div className="text-slate-500 text-sm">
                    Feature Screenshot
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}