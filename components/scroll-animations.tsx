"use client"

import type React from "react"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

// Scroll Progress Indicator
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-green-500 transform-origin-left z-50"
      style={{ scaleX }}
    />
  )
}

// Parallax Section Wrapper
export function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
}: {
  children: React.ReactNode
  className?: string
  speed?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  )
}

// Scroll-triggered Reveal Animation
export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.2"],
  })

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 100, opacity: 0 }
      case "down":
        return { y: -100, opacity: 0 }
      case "left":
        return { x: 100, opacity: 0 }
      case "right":
        return { x: -100, opacity: 0 }
      default:
        return { y: 100, opacity: 0 }
    }
  }

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [100, 0])
  const x = useTransform(scrollYProgress, [0, 1], [direction === "left" ? 100 : direction === "right" ? -100 : 0, 0])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity,
        y: direction === "up" || direction === "down" ? y : 0,
        x: direction === "left" || direction === "right" ? x : 0,
      }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

// Floating Elements on Scroll
export function ScrollFloatingElements() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <>
      <motion.div
        className="fixed top-20 left-10 text-4xl opacity-20 pointer-events-none z-20"
        style={{ y: y1, rotate }}
      >
        💀
      </motion.div>
      <motion.div className="fixed top-40 right-20 text-3xl opacity-15 pointer-events-none z-20" style={{ y: y2 }}>
        🦴
      </motion.div>
      <motion.div
        className="fixed bottom-40 left-1/4 text-5xl opacity-10 pointer-events-none z-20"
        style={{ y: y3, rotate }}
      >
        🪦
      </motion.div>
    </>
  )
}
