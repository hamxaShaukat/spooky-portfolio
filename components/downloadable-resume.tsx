"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, FileText, CheckCircle } from "lucide-react"

export default function DownloadableResume() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [isDownloaded, setIsDownloaded] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)

    // Simulate download process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Create a downloadable PDF (in real implementation, this would be your actual resume)
    const link = document.createElement("a")
    link.href = "/resume.pdf" // Replace with actual resume file path
    link.download = "Haunted_Developer_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setIsDownloading(false)
    setIsDownloaded(true)

    // Reset downloaded state after 3 seconds
    setTimeout(() => setIsDownloaded(false), 3000)
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.div className="relative" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={handleDownload}
          disabled={isDownloading}
          className="bg-gradient-to-r from-purple-700 to-green-700 hover:from-purple-600 hover:to-green-600 text-white px-8 py-3 text-lg font-semibold shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.8)] transition-all duration-300"
        >
          <AnimatePresence mode="wait">
            {isDownloading ? (
              <motion.div
                key="downloading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="mr-2"
                >
                  💀
                </motion.div>
                Summoning Resume...
              </motion.div>
            ) : isDownloaded ? (
              <motion.div
                key="downloaded"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center"
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Downloaded!
              </motion.div>
            ) : (
              <motion.div
                key="download"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </motion.div>
            )}
          </AnimatePresence>
        </Button>

        {/* Floating skulls animation during download */}
        <AnimatePresence>
          {isDownloading && (
            <>
              <motion.div
                className="absolute -top-8 -left-8 text-2xl"
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5 }}
              >
                💀
              </motion.div>
              <motion.div
                className="absolute -top-8 -right-8 text-2xl"
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: -360 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                💀
              </motion.div>
              <motion.div
                className="absolute -bottom-8 -left-8 text-2xl"
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                💀
              </motion.div>
              <motion.div
                className="absolute -bottom-8 -right-8 text-2xl"
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: -360 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                💀
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Resume preview card */}
      <motion.div
        className="bg-gray-900/70 border border-purple-900/50 rounded-lg p-4 max-w-sm backdrop-blur-sm"
        whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(147, 51, 234, 0.3)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center mb-3">
          <FileText className="h-6 w-6 text-purple-400 mr-3" />
          <div>
            <h4 className="text-lg font-semibold text-purple-300">Haunted Developer Resume</h4>
            <p className="text-sm text-gray-400">PDF • 2.3 MB</p>
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex justify-between">
            <span>Experience:</span>
            <span className="text-green-400">1 Year</span>
          </div>
          <div className="flex justify-between">
            <span>Specialization:</span>
            <span className="text-purple-400">Full-Stack</span>
          </div>
          <div className="flex justify-between">
            <span>Projects:</span>
            <span className="text-green-400">5-8 Completed</span>
          </div>
        </div>

        <motion.div
          className="mt-4 p-2 bg-purple-900/30 rounded text-xs text-center text-purple-300"
          animate={{
            boxShadow: [
              "0 0 5px rgba(147, 51, 234, 0.3)",
              "0 0 15px rgba(147, 51, 234, 0.6)",
              "0 0 5px rgba(147, 51, 234, 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          ✨ Enchanted with spooky design skills
        </motion.div>
      </motion.div>
    </div>
  )
}
