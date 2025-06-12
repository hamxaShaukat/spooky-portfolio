"use client"

import { motion } from "framer-motion"
import type React from "react"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`relative py-20 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Section transition effect - top */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-10" />
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-green-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      {/* Section transition effect - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10" />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-purple-600"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.section>
  )
}

export function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.h2
      className={`text-4xl font-creepster text-center mb-16 ${className}`}
      initial={{ opacity: 0.8, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        textShadow: "0 0 20px rgba(147, 51, 234, 0.8)",
      }}
    >
      {children}
    </motion.h2>
  )
}
