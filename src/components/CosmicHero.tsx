import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, Zap, Eye, Target, BarChart3, Users, DollarSign } from 'lucide-react'
import { Button } from './ui/button'

export function CosmicHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating Cosmic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Geometric Floating Elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-32 left-16 w-24 h-24 rounded-full border border-amber-400/20 golden-glow"
        >
          <div className="absolute inset-3 rounded-full border border-amber-400/30"></div>
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 flex items-center justify-center text-amber-400/60"
          >
            <BarChart3 className="h-6 w-6" />
          </motion.div>
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            x: [0, 15, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-24 w-20 h-20 rounded-full border border-amber-400/25 golden-glow flex items-center justify-center"
        >
          <Users className="h-8 w-8 text-amber-400/60" />
        </motion.div>

        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-32 w-16 h-16 rounded-full border border-amber-400/30 golden-glow flex items-center justify-center"
        >
          <DollarSign className="h-6 w-6 text-amber-400/60" />
        </motion.div>

        {/* Floating Sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6
            }}
            className="absolute text-amber-400/50"
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + (i % 3) * 30}%`
            }}
          >
            <Sparkles className="h-3 w-3" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-3 glass-card rounded-full px-8 py-4 golden-glow"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-5 w-5 text-amber-400" />
            </motion.div>
            <span className="font-futuristic text-amber-300 font-semibold tracking-wider text-sm">
              PREMIUM LINKEDIN ADS OPTIMIZATION
            </span>
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="h-5 w-5 text-amber-400" />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-futuristic font-bold leading-tight"
          >
            <motion.span 
              className="block golden-glow-text text-amber-400"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(245, 158, 11, 0.6)",
                  "0 0 40px rgba(245, 158, 11, 0.8)",
                  "0 0 20px rgba(245, 158, 11, 0.6)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              LEVIOSO
            </motion.span>
            <span className="block text-transparent bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 bg-clip-text text-5xl md:text-7xl lg:text-8xl font-light">
              Cosmic LinkedIn Ads
            </span>
            <motion.span 
              className="block golden-glow-text text-amber-300 text-4xl md:text-6xl lg:text-7xl font-light"
              animate={{ 
                textShadow: [
                  "0 0 15px rgba(245, 158, 11, 0.5)",
                  "0 0 30px rgba(245, 158, 11, 0.7)",
                  "0 0 15px rgba(245, 158, 11, 0.5)"
                ]
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              Optimization ✨
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            A <span className="text-amber-400 font-medium">premium dashboard</span> that transforms LinkedIn campaign optimization with 
            <span className="text-amber-300 font-medium"> AI-powered insights</span> and 
            <span className="text-amber-200 font-medium"> cosmic-level analytics</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="btn-cosmic font-futuristic font-bold px-12 py-6 text-lg rounded-2xl text-slate-900 relative overflow-hidden group"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="mr-3"
                >
                  <Target className="h-6 w-6" />
                </motion.div>
                LAUNCH COSMIC DEMO
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline"
                size="lg"
                className="glass-card border-amber-400/50 text-amber-300 hover:text-amber-200 font-futuristic font-semibold px-12 py-6 text-lg rounded-2xl transition-all duration-300 golden-glow"
              >
                <Eye className="mr-3 h-5 w-5" />
                EXPLORE FEATURES
              </Button>
            </motion.div>
          </motion.div>

          {/* Premium Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-16"
          >
            {[
              { value: "347%", label: "ROI Increase", color: "amber", icon: TrendingUp },
              { value: "89K+", label: "Campaigns Optimized", color: "amber", icon: Target },
              { value: "24/7", label: "Cosmic Monitoring", color: "amber", icon: Eye }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                className="text-center relative"
              >
                <div className="glass-card-hover rounded-2xl p-8 golden-glow relative overflow-hidden">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-amber-400/10 rounded-2xl"
                  />
                  <stat.icon className="h-10 w-10 text-amber-400 mx-auto mb-4" />
                  <div className="text-5xl md:text-6xl font-futuristic font-bold text-amber-400 golden-glow-text">
                    {stat.value}
                  </div>
                  <div className="text-slate-300 mt-3 font-medium tracking-wide text-lg">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Premium Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-32 relative"
        >
          <div className="relative mx-auto max-w-6xl">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateY: [0, 2, 0]
              }}
              transition={{ 
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="glass-card rounded-3xl p-8 shadow-2xl golden-glow-strong relative overflow-hidden"
            >
              {/* Cosmic Border Animation */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-3xl border border-amber-400/20"
              />
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full golden-glow"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full golden-glow"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full golden-glow"></div>
                  </div>
                  <div className="text-sm text-slate-400 font-futuristic tracking-wider">LEVIOSO COSMIC DASHBOARD</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { title: "Cosmic Performance", value: "+347%", subtitle: "CTR Enhancement", color: "amber" },
                    { title: "Cost Optimization", value: "-73%", subtitle: "CPC Reduction", color: "amber" },
                    { title: "Lead Generation", value: "+289%", subtitle: "Quality Leads", color: "amber" }
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6 + index * 0.2, duration: 0.6 }}
                      className="metric-card rounded-xl p-6 relative overflow-hidden"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.02, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.7
                        }}
                        className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent rounded-xl"
                      />
                      <div className="text-amber-400 font-futuristic font-semibold text-sm tracking-wider relative z-10">
                        {metric.title}
                      </div>
                      <div className="text-4xl font-futuristic font-bold text-amber-300 mt-4 golden-glow-text relative z-10">
                        {metric.value}
                      </div>
                      <div className="text-sm text-slate-400 mt-2 relative z-10">{metric.subtitle}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}