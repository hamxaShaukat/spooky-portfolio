"use client"

import { motion } from "framer-motion"
import { SkeletonHand, BoneDecoration } from "./spooky-elements"
import DownloadableResume from "./downloadable-resume"
import Image from "next/image"

export default function EnhancedAbout() {
 

  return (
    <div className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/cobweb.png')] bg-no-repeat bg-right-top opacity-20"></div>

      {/* Skeleton Hands */}
      <SkeletonHand className="top-10 left-10" />
      <SkeletonHand className="bottom-20 right-20" />
      <SkeletonHand className="top-1/2 left-5" />

      {/* Bone Decorations */}
      <BoneDecoration className="top-20 right-10" />
      <BoneDecoration className="bottom-10 left-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <motion.div
                className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-purple-700 mb-8"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                  boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-black/80 z-10"></div>
                <Image
                width={100}
                height={100}
                  src="/my-img.png"
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

              {/* Resume Download Section */}
              <div className="text-center">
                <DownloadableResume />
              </div>
            </div>

            <div className="md:col-span-2">
              <motion.p
                className="text-lg mb-4 text-gray-300"
                whileHover={{ x: 10, color: "#d1d5db" }}
                transition={{ duration: 0.3 }}
              >
                I am a full-stack developer with a passion for creating immersive web experiences that blend
                cutting-edge technology.
              </motion.p>
              <motion.p
                className="text-lg mb-4 text-gray-300"
                whileHover={{ x: 10, color: "#d1d5db" }}
                transition={{ duration: 0.3 }}
              >
                I have about 1 year of experience in the land of web apps, so I am a specialist in React, Next.js and Node.js
                ecosystems and develop responsive and performant applications.
              </motion.p>
              <motion.p
                className="text-lg mb-6 text-gray-300"
                whileHover={{ x: 10, color: "#d1d5db" }}
                transition={{ duration: 0.3 }}
              >
                My approach combines technical expertise with creative problem-solving, ensuring each project is not
                just functional but memorably enchanting.
              </motion.p>

              {/* Additional info section */}
              <motion.div
                className="bg-gray-900/50 border border-purple-900/30 rounded-lg p-6 mt-6"
                whileHover={{
                  borderColor: "rgba(147, 51, 234, 0.5)",
                  boxShadow: "0 0 20px rgba(147, 51, 234, 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-purple-300 mb-4">🎯 What I Bring to the Table</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">👻</span>
                    <span className="text-gray-300">Full-Stack Development</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-400 mr-2">🦇</span>
                    <span className="text-gray-300">UI/UX Design</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">🕷️</span>
                    <span className="text-gray-300">Performance Optimization</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-400 mr-2">🔮</span>
                    <span className="text-gray-300">Creative Problem Solving</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
