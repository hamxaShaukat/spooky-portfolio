"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Hide controls after 5 seconds of no interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowControls(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const togglePlay = async () => {
    if (!audioRef.current) return

    try {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
        setHasInteracted(true)
      }
    } catch (error) {
      console.log("Audio play failed:", error)
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return

    audioRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const handleMouseMove = () => {
    setShowControls(true)
    const timer = setTimeout(() => {
      setShowControls(false)
    }, 3000)

    return () => clearTimeout(timer)
  }

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        {/* Using a placeholder URL - replace with actual spooky music file */}
        <source src="/spooky-music.mp3" type="audio/mpeg" />
        <source src="/spooky-music.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Controls */}
      <div onMouseMove={handleMouseMove}>
        <AnimatePresence>
          {showControls && (
            <motion.div
              className="fixed bottom-6 right-6 z-50 flex gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={togglePlay}
                  className="bg-black/80 border-purple-500/50 text-purple-300 hover:bg-purple-900/30 hover:border-purple-400 backdrop-blur-sm"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleMute}
                  className="bg-black/80 border-purple-500/50 text-purple-300 hover:bg-purple-900/30 hover:border-purple-400 backdrop-blur-sm"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Initial Play Prompt */}
        {!hasInteracted && (
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <motion.div
              className="bg-black/90 border border-purple-500/50 rounded-lg p-6 backdrop-blur-sm"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(147, 51, 234, 0.3)",
                  "0 0 40px rgba(147, 51, 234, 0.6)",
                  "0 0 20px rgba(147, 51, 234, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <h3 className="text-lg font-creepster text-purple-300 mb-4">🎵 Enhance Your Experience</h3>
              <p className="text-gray-400 mb-4">Play spooky background music for the full haunted experience</p>
              <Button
                onClick={togglePlay}
                className="bg-gradient-to-r from-purple-700 to-green-700 hover:from-purple-600 hover:to-green-600"
              >
                <Play className="mr-2 h-4 w-4" /> Play Haunting Music
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  )
}
