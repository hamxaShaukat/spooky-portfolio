import type React from "react"
import "@/app/globals.css"
import { Inter, Creepster } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import SpookyCursor from "@/components/spooky-cursor"
import type { Metadata } from "next"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const creepster = Creepster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-creepster",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${creepster.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <SpookyCursor />
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Spooky Dev Portfolio",
  description: "A full-stack developer portfolio with a spooky theme",
}