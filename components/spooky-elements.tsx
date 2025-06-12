"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Floating Vulture Component
export function FloatingVulture({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute text-6xl opacity-20 pointer-events-none"
      initial={{ x: -100, y: 0 }}
      animate={{
        x: [0, 100, 200, 300, 400, 500],
        y: [0, -20, 10, -30, 5, -10],
      }}
      transition={{
        duration: 20,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      🦅
    </motion.div>
  )
}

// Floating Skull Component
export function FloatingSkull({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute text-4xl opacity-30 pointer-events-none ${className}`}
      animate={{
        y: [-10, 10, -10],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      💀
    </motion.div>
  )
}

// Skeleton Hand Component
export function SkeletonHand({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute text-3xl opacity-25 pointer-events-none ${className}`}
      animate={{
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      🦴
    </motion.div>
  )
}

// Bone Decoration Component
export function BoneDecoration({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute opacity-20 pointer-events-none ${className}`}
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 30,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    >
      <div className="text-2xl">🦴</div>
    </motion.div>
  )
}

// Spooky Eyes Component
export function SpookyEyes() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(true)
      setTimeout(() => setIsVisible(false), 2000)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed top-20 right-10 z-30 pointer-events-none"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl">👀</div>
    </motion.div>
  )
}

// Graveyard Component
export function Graveyard({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute bottom-0 opacity-15 pointer-events-none ${className}`}>
      <div className="flex items-end space-x-4">
        <motion.div
          className="text-6xl"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          🪦
        </motion.div>
        <motion.div
          className="text-5xl"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
        >
          🪦
        </motion.div>
        <motion.div
          className="text-4xl"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        >
          🪦
        </motion.div>
      </div>
    </div>
  )
}
