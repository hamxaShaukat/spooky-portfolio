"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SkeletonHand, BoneDecoration } from "./spooky-elements"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/cobweb.png')] bg-no-repeat bg-right-top opacity-20"></div>

      {/* Skeleton Hands */}
      <SkeletonHand className="top-10 left-10" />
      <SkeletonHand className="bottom-20 right-20" />
      <SkeletonHand className="top-1/2 left-5" />

      {/* Bone Decorations */}
      <BoneDecoration className="top-20 right-10" />
      <BoneDecoration className="bottom-10 left-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            className="text-4xl font-creepster text-center mb-12 text-purple-400"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(147, 51, 234, 0.8)",
            }}
          >
            About The <span className="text-green-400">Developer</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <motion.div
                className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-purple-700"
                initial={{ scale: 0.8, rotate: -5 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0.8, rotate: -5 }}
                transition={{ duration: 0.6 }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                  boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-black/80 z-10"></div>
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Developer"
                  className="w-full h-full object-cover relative z-0"
                />
                {/* Floating skull overlay */}
                <motion.div
                  className="absolute top-2 right-2 text-2xl z-20"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                  💀
                </motion.div>
              </motion.div>
            </div>

            <div className="md:col-span-2">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.p
                  className="text-lg mb-4 text-gray-300"
                  whileHover={{ x: 10, color: "#d1d5db" }}
                  transition={{ duration: 0.3 }}
                >
                  I am a full-stack developer with a passion for creating immersive web experiences that blend
                  cutting-edge technology with haunting design.
                </motion.p>
                <motion.p
                  className="text-lg mb-4 text-gray-300"
                  whileHover={{ x: 10, color: "#d1d5db" }}
                  transition={{ duration: 0.3 }}
                >
                  With over 5 years of experience conjuring web applications, I specialize in React, Next.js, and
                  Node.js ecosystems, crafting responsive and performant applications that will leave you spellbound.
                </motion.p>
                <motion.p
                  className="text-lg text-gray-300"
                  whileHover={{ x: 10, color: "#d1d5db" }}
                  transition={{ duration: 0.3 }}
                >
                  My approach combines technical expertise with creative problem-solving, ensuring each project is not
                  just functional but memorably enchanting.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
