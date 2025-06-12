"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon } from "lucide-react"
import { FloatingVulture, FloatingSkull, SpookyEyes } from "./spooky-elements"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      containerRef.current.style.setProperty("--mouse-x", `${x * 20}px`)
      containerRef.current.style.setProperty("--mouse-y", `${y * 20}px`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundPosition: "calc(50% + var(--mouse-x, 0)) calc(50% + var(--mouse-y, 0))",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0"></div>

      {/* Floating Vultures */}
      <FloatingVulture delay={0} />
      <FloatingVulture delay={5} />
      <FloatingVulture delay={10} />

      {/* Floating Skulls */}
      <FloatingSkull className="top-20 left-10" />
      <FloatingSkull className="top-32 right-20" />
      <FloatingSkull className="bottom-40 left-1/4" />

      {/* Spooky Eyes */}
      <SpookyEyes />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center px-4"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-creepster text-purple-300 mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 20px rgba(147, 51, 234, 0.8)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.span
            className="block"
            animate={{
              textShadow: [
                "0 0 10px rgba(147, 51, 234, 0.5)",
                "0 0 20px rgba(147, 51, 234, 0.8)",
                "0 0 10px rgba(147, 51, 234, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Haunted
          </motion.span>
          <motion.span
            className="block text-green-400 mt-2"
            animate={{
              textShadow: [
                "0 0 10px rgba(34, 197, 94, 0.5)",
                "0 0 20px rgba(34, 197, 94, 0.8)",
                "0 0 10px rgba(34, 197, 94, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          >
            Developer
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Creating terrifyingly good web experiences with code that will raise your spirits.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-500 text-purple-300 hover:bg-purple-950 hover:text-purple-200 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all duration-300"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enter If You Dare <ArrowDownIcon className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 w-full flex justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ArrowDownIcon className="h-6 w-6 text-purple-400" />
      </motion.div>
    </section>
  )
}
