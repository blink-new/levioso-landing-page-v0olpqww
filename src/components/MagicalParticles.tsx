import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  color: string
}

export function MagicalParticles() {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create initial particles
    const createParticle = (id: number): Particle => ({
      id,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.5 + 0.2,
      color: ['hsl(var(--accent))', 'hsl(var(--accent-lavender))', 'hsl(var(--accent-mist))'][Math.floor(Math.random() * 3)]
    })

    // Initialize particles
    for (let i = 0; i < 30; i++) {
      particlesRef.current.push(createParticle(i))
    }

    // Animation loop
    const animate = () => {
      particlesRef.current.forEach(particle => {
        particle.y -= particle.speed
        particle.opacity = Math.sin(Date.now() * 0.001 + particle.id) * 0.3 + 0.4

        // Reset particle when it goes off screen
        if (particle.y < -10) {
          particle.y = window.innerHeight + 10
          particle.x = Math.random() * window.innerWidth
        }
      })

      // Update DOM elements
      const particles = container.querySelectorAll('.magical-particle')
      particles.forEach((element, index) => {
        const particle = particlesRef.current[index]
        if (particle && element instanceof HTMLElement) {
          element.style.transform = `translate(${particle.x}px, ${particle.y}px)`
          element.style.opacity = particle.opacity.toString()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {particlesRef.current.map((particle) => (
        <div
          key={particle.id}
          className="magical-particle absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}
    </div>
  )
}

// Floating sparkles component for specific areas
export function FloatingSparkles({ count = 5, area = 'hero' }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            scale: 0,
            opacity: 0
          }}
          animate={{
            y: [null, '-20px', '20px'],
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-1 h-1 bg-accent rounded-full"
            style={{
              boxShadow: '0 0 6px hsl(var(--accent))',
              filter: 'blur(0.5px)'
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}