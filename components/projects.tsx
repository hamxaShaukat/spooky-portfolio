"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { FloatingSkull, SkeletonHand, Graveyard } from "./spooky-elements";

const projects = [
  {
    id: 1,
    title: "Haunted House Marketplace",
    description:
      "A real estate platform for haunted properties built with Next.js and Supabase.",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    github: "https://github.com/username/haunted-house-marketplace",
    tags: ["Next.js", "Supabase", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Ghost Chat",
    description:
      "Real-time messaging application with spectral effects using WebSockets and React.",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    github: "https://github.com/username/ghost-chat",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "Nightmare Tracker",
    description:
      "A task management application with a spooky twist, featuring drag-and-drop functionality.",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    github: "https://github.com/username/nightmare-tracker",
    tags: ["React", "Redux", "Node.js", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Cursed E-Commerce",
    description:
      "Full-featured e-commerce platform selling cursed items with payment integration.",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    github: "https://github.com/username/cursed-ecommerce",
    tags: ["Next.js", "Prisma", "Stripe", "TypeScript"],
  },
  {
    id: 5,
    title: "Phantom Dashboard",
    description:
      "Admin dashboard with haunting visualizations and analytics for supernatural data.",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    github: "https://github.com/username/phantom-dashboard",
    tags: ["React", "D3.js", "Firebase", "Tailwind CSS"],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const MotionButton = motion(Button);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/bats.png')] bg-no-repeat bg-right opacity-10"></div>

      {/* Spooky Elements */}
      <FloatingSkull className="top-20 left-10" />
      <FloatingSkull className="bottom-40 right-20" />
      <SkeletonHand className="top-1/2 left-5" />
      <SkeletonHand className="bottom-20 right-10" />
      <Graveyard className="left-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
        

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card className="bg-gray-900/70 border-purple-900/50 overflow-hidden h-full flex flex-col relative">
                  {/* Floating skull on hover */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div
                        className="absolute -top-2 -right-2 text-2xl z-20"
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        💀
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    className="relative aspect-video cursor-pointer"
                    onClick={() => setActiveProject(project.id)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition-colors">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center"
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 0 20px rgba(220, 38, 38, 0.8)",
                        }}
                      >
                        <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                      </motion.div>
                    </div>
                    <img
                      src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <CardContent className="p-6 flex flex-col flex-grow">
                    <motion.h3
                      className="text-xl font-bold mb-2 text-purple-300"
                      whileHover={{ color: "#a855f7" }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-gray-400 mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <motion.span
                          key={index}
                          className="text-xs px-2 py-1 rounded-full bg-purple-900/40 text-purple-300"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(88, 28, 135, 0.6)",
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <MotionButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-green-700 text-green-400 hover:bg-green-900/30 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] p-0 m-0 bg-transparent shadow-none border-none"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </MotionButton>
                      <MotionButton
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveProject(project.id)}
                        className="border-purple-700 text-purple-400 hover:bg-purple-900/30 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] p-0 m-0 bg-transparent shadow-none border-none"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </MotionButton>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-4xl bg-gray-900 rounded-lg overflow-hidden border border-purple-500/50 shadow-[0_0_50px_rgba(147,51,234,0.5)]"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
            >
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${
                    projects.find((p) => p.id === activeProject)?.videoId
                  }`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 flex justify-end">
                <Button
                  variant="outline"
                  onClick={() => setActiveProject(null)}
                  className="border-red-700 text-red-400 hover:bg-red-900/30"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
