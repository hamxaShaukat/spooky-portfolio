"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiSupabase,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
  SiRedux,
  SiFramer,
} from "react-icons/si"
import { Database, Zap, Search } from "lucide-react"
import { FloatingSkull, BoneDecoration } from "./spooky-elements"
import { ScrollReveal, ParallaxSection } from "./scroll-animations"

const skills = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "React.js", icon: SiReact, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
  { name: "Prisma ORM", icon: SiPrisma, color: "text-blue-600" },
  { name: "Supabase", icon: SiSupabase, color: "text-green-400" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Redux", icon: SiRedux, color: "text-purple-500" },
  { name: "Zustand", icon: Database, color: "text-yellow-300" },
  { name: "React Query", icon: Search, color: "text-red-400" },
  { name: "Framer Motion", icon: SiFramer, color: "text-purple-400" },
  { name: "GSAP", icon: Zap, color: "text-green-400" },
]

export default function EnhancedSkills() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150])

  return (
    <section id="skills" ref={ref} className="py-20 bg-black/95 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[url('/spider.png')] bg-no-repeat bg-left-bottom opacity-10"
        style={{ y: backgroundY }}
      />

      {/* Floating Skulls with parallax */}
      <ParallaxSection speed={0.4}>
        <FloatingSkull className="top-10 right-10" />
        <FloatingSkull className="bottom-20 left-10" />
      </ParallaxSection>

      {/* Bone Decorations with different scroll speeds */}
      <ParallaxSection speed={0.6}>
        <BoneDecoration className="top-1/4 left-5" />
        <BoneDecoration className="bottom-1/4 right-5" />
        <BoneDecoration className="top-1/2 right-1/4" />
      </ParallaxSection>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal direction="up">
          <motion.h2
            className="text-4xl font-creepster text-center mb-16 text-green-400"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(34, 197, 94, 0.8)",
            }}
          >
            Technical <span className="text-purple-400">Powers</span>
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1} className="flex flex-col items-center">
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    y: -10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 flex items-center justify-center mb-3 bg-gray-900 rounded-lg shadow-[0_0_15px_rgba(124,58,237,0.5)] relative"
                    whileHover={{
                      boxShadow: [
                        "0 0 15px rgba(124,58,237,0.5)",
                        "0 0 25px rgba(124,58,237,0.8)",
                        "0 0 35px rgba(124,58,237,1)",
                      ],
                      backgroundColor: "rgba(55, 48, 163, 0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <skill.icon className={`w-8 h-8 ${skill.color}`} />
                    <motion.div
                      className="absolute -top-2 -right-2 text-xs opacity-0"
                      whileHover={{ opacity: 1, scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.3 }}
                    >
                      💀
                    </motion.div>
                  </motion.div>
                  <span className="text-sm text-gray-400">{skill.name}</span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
