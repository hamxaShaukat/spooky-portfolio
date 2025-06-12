"use client"

import { useState, useEffect } from "react"
import SimplifiedHero from "@/components/simplified-hero"
import EnhancedAbout from "@/components/enhanced-about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import EnhancedSpookyBackground from "@/components/enhanced-spooky-background"
import SimplifiedBackgroundMusic from "@/components/simplified-background-music"
import LoadingScreen from "@/components/loading-screen"
import { Section, SectionTitle } from "@/components/section-transitions"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen bg-black text-gray-200">
      <LoadingScreen />
      <EnhancedSpookyBackground />
      <SimplifiedBackgroundMusic />

      <div className="relative z-10">
        <SimplifiedHero />

        <Section id="about" className="bg-black">
          <SectionTitle className="text-purple-400">
            About The <span className="text-green-400">Developer</span>
          </SectionTitle>
          <EnhancedAbout />
        </Section>

        <Section id="skills" className="bg-black/95">
          <SectionTitle className="text-green-400">
            Technical <span className="text-purple-400">Powers</span>
          </SectionTitle>
          <Skills />
        </Section>

        <Section id="projects" className="bg-black">
          <SectionTitle className="text-purple-400">
            Haunted <span className="text-green-400">Projects</span>
          </SectionTitle>
          <Projects />
        </Section>

        <Section id="contact" className="bg-black/95">
          <SectionTitle className="text-green-400">
            Summon <span className="text-purple-400">Me</span>
          </SectionTitle>
          <Contact />
        </Section>

        <Footer />
      </div>
    </main>
  )
}
