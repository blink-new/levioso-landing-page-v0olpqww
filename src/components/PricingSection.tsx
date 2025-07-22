import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    price: "49",
    features: [
      "Bis zu 5 Kampagnen",
      "Basis Analytics",
      "Email Support"
    ]
  },
  {
    name: "Pro",
    price: "99", 
    features: [
      "Unbegrenzte Kampagnen",
      "Erweiterte Analytics",
      "Priority Support",
      "KI-Optimierung"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "199",
    features: [
      "Alles aus Pro",
      "White Label",
      "API Zugang",
      "Dedicated Support"
    ]
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative">
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
            Preise
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular 
                  ? 'border-amber-600/50 ring-1 ring-amber-600/20' 
                  : 'border-slate-700/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Beliebt
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-white mb-2">
                  €{plan.price}
                </div>
                <div className="text-slate-400 text-sm">
                  pro Monat
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-slate-300">
                    <Check className="h-4 w-4 text-amber-600 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                Plan wählen
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}