import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Sarah M.",
    company: "Tech Startup",
    text: "ROI um 200% gesteigert"
  },
  {
    name: "Michael K.", 
    company: "Marketing Agentur",
    text: "Spart uns 10 Stunden pro Woche"
  },
  {
    name: "Lisa R.",
    company: "E-Commerce",
    text: "Beste LinkedIn Ads Tool"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative">
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
            Kundenstimmen
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30"
            >
              <div className="text-center">
                <p className="text-slate-300 mb-4 text-lg">
                  "{testimonial.text}"
                </p>
                <div className="text-white font-semibold">
                  {testimonial.name}
                </div>
                <div className="text-slate-400 text-sm">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}