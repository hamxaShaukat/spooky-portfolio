"use client"

import { useEffect, useRef } from "react"

export default function EnhancedSpookyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Enhanced particles with different types
    const particles: Array<{
      x: number
      y: number
      radius: number
      speed: number
      opacity: number
      type: "fog" | "ember" | "dust"
      color: string
    }> = []

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 8)

      for (let i = 0; i < particleCount; i++) {
        const type = Math.random() < 0.7 ? "fog" : Math.random() < 0.8 ? "ember" : "dust"
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: type === "fog" ? Math.random() * 40 + 10 : Math.random() * 3 + 1,
          speed: type === "fog" ? Math.random() * 0.2 + 0.05 : Math.random() * 0.5 + 0.1,
          opacity: type === "fog" ? Math.random() * 0.3 + 0.1 : Math.random() * 0.8 + 0.2,
          type,
          color: type === "fog" ? "128, 0, 128" : type === "ember" ? "255, 100, 0" : "200, 200, 200",
        })
      }
    }

    createParticles()

    // Lightning effect
    let lightningTimer = 0
    const lightningInterval = 15000 + Math.random() * 10000

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create enhanced gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "rgba(30, 0, 40, 0.6)")
      gradient.addColorStop(0.5, "rgba(20, 0, 30, 0.4)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.8)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Lightning effect
      lightningTimer += 16
      if (lightningTimer > lightningInterval) {
        if (Math.random() < 0.1) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        }
        if (lightningTimer > lightningInterval + 200) {
          lightningTimer = 0
        }
      }

      // Draw and update particles
      particles.forEach((particle) => {
        ctx.beginPath()

        if (particle.type === "fog") {
          const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius)
          gradient.addColorStop(0, `rgba(${particle.color}, ${particle.opacity})`)
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)")
          ctx.fillStyle = gradient
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
          ctx.fill()
        }

        // Move particles
        if (particle.type === "fog") {
          particle.x += Math.sin(Date.now() * 0.001) * particle.speed
          particle.y -= particle.speed
        } else if (particle.type === "ember") {
          particle.x += Math.sin(Date.now() * 0.002) * particle.speed * 0.5
          particle.y -= particle.speed
          particle.opacity *= 0.999
        } else {
          particle.x += (Math.random() - 0.5) * particle.speed
          particle.y -= particle.speed * 0.3
        }

        // Reset particles that move off screen
        if (particle.y + particle.radius < 0) {
          particle.y = canvas.height + particle.radius
          particle.x = Math.random() * canvas.width
          if (particle.type === "ember") {
            particle.opacity = Math.random() * 0.8 + 0.2
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}
