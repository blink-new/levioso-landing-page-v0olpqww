import { useEffect, useRef } from 'react'

export function CosmicStarfield() {
  const starfieldRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const starfield = starfieldRef.current
    if (!starfield) return

    // Create stars
    const createStars = () => {
      const starCount = 150
      const stars: HTMLElement[] = []

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div')
        const size = Math.random()
        
        // Determine star size class
        let sizeClass = 'small'
        if (size > 0.8) sizeClass = 'large'
        else if (size > 0.6) sizeClass = 'medium'
        
        star.className = `star ${sizeClass}`
        
        // Random position
        star.style.left = Math.random() * 100 + '%'
        star.style.top = Math.random() * 100 + '%'
        
        // Random animation delay
        star.style.animationDelay = Math.random() * 4 + 's'
        
        // Random animation duration
        star.style.animationDuration = (3 + Math.random() * 3) + 's'
        
        starfield.appendChild(star)
        stars.push(star)
      }

      return stars
    }

    // Create floating cosmic elements
    const createCosmicElements = () => {
      const elementCount = 8
      const elements: HTMLElement[] = []

      for (let i = 0; i < elementCount; i++) {
        const element = document.createElement('div')
        element.className = 'absolute rounded-full opacity-20'
        
        // Random size and color
        const size = 20 + Math.random() * 40
        element.style.width = size + 'px'
        element.style.height = size + 'px'
        element.style.background = `radial-gradient(circle, rgba(245, 158, 11, ${0.1 + Math.random() * 0.2}) 0%, transparent 70%)`
        
        // Random position
        element.style.left = Math.random() * 100 + '%'
        element.style.top = Math.random() * 100 + '%'
        
        // Floating animation
        element.style.animation = `float ${8 + Math.random() * 4}s ease-in-out infinite`
        element.style.animationDelay = Math.random() * 8 + 's'
        
        starfield.appendChild(element)
        elements.push(element)
      }

      return elements
    }

    const stars = createStars()
    const cosmicElements = createCosmicElements()

    // Cleanup function
    return () => {
      stars.forEach(star => {
        if (star.parentNode) {
          star.parentNode.removeChild(star)
        }
      })
      cosmicElements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element)
        }
      })
    }
  }, [])

  return (
    <div 
      ref={starfieldRef}
      className="starfield"
      aria-hidden="true"
    />
  )
}