"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { FloatingSkull, SkeletonHand, BoneDecoration } from "./spooky-elements"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-black/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/ghost.png')] bg-no-repeat bg-left-top opacity-10"></div>

      {/* Spooky Elements */}
      <FloatingSkull className="top-10 right-10" />
      <FloatingSkull className="bottom-20 left-10" />
      <SkeletonHand className="top-1/3 left-5" />
      <SkeletonHand className="bottom-1/3 right-5" />
      <BoneDecoration className="top-20 left-1/4" />
      <BoneDecoration className="bottom-10 right-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
         

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-300">Get in Touch</h3>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mr-4 bg-purple-900/30 p-3 rounded-full"
                    whileHover={{
                      backgroundColor: "rgba(88, 28, 135, 0.5)",
                      boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
                    }}
                  >
                    <Mail className="h-6 w-6 text-purple-400" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-300">Email</h4>
                    <p className="text-gray-400">hamzashaukat714@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mr-4 bg-purple-900/30 p-3 rounded-full"
                    whileHover={{
                      backgroundColor: "rgba(88, 28, 135, 0.5)",
                      boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
                    }}
                  >
                    <Phone className="h-6 w-6 text-purple-400" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-300">Phone</h4>
                    <p className="text-gray-400">+92 (327) 4562696 </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="mr-4 bg-purple-900/30 p-3 rounded-full"
                    whileHover={{
                      backgroundColor: "rgba(88, 28, 135, 0.5)",
                      boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
                    }}
                  >
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-300">Location</h4>
                    <p className="text-gray-400">Lahore, Pakistan</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-purple-900/50 focus:border-purple-500 text-gray-300 focus:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-purple-900/50 focus:border-purple-500 text-gray-300 focus:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-900/50 border-purple-900/50 focus:border-purple-500 text-gray-300 min-h-[150px] focus:shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-700 to-green-700 hover:from-purple-600 hover:to-green-600 text-white hover:shadow-[0_0_25px_rgba(147,51,234,0.5)]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Summoning...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </motion.div>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="p-3 bg-green-900/30 border border-green-500 text-green-400 rounded-md text-center shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                  >
                    Your message has been sent successfully! 👻
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
