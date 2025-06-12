"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
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

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 bg-black/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/spider.png')] bg-no-repeat bg-left-bottom opacity-10"></div>

      {/* Floating Skulls */}
      <FloatingSkull className="top-10 right-10" />
      <FloatingSkull className="bottom-20 left-10" />

      {/* Bone Decorations */}
      <BoneDecoration className="top-1/4 left-5" />
      <BoneDecoration className="bottom-1/4 right-5" />
      <BoneDecoration className="top-1/2 right-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
        

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={itemVariants}
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
                  {/* Floating skull on hover */}
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
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
