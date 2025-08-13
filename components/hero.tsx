"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent pt-16 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)`,
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500/40 rounded-full animate-pulse-slow" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/40 rounded-full animate-bounce-slow" />
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-purple-500/30 rounded-full animate-float-slow" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10 w-full">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="relative mb-6">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2 tracking-tight leading-tight">
              Swift{" "}
              <span className="gradient-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
                GvN
              </span>
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 rounded-lg blur-xl opacity-30 animate-pulse" />
          </div>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-medium tracking-wide">
            Given Kasonde
          </p>

          <div className="h-auto mb-8">
            <p className="animate-type-writer text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed w-full px-2 sm:px-4 md:px-6 break-words whitespace-normal text-center">
              <span className="block sm:inline">Frontend Developer</span>
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline">Fullstack Enthusiast</span>
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline">TypeScript Specialist</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
            <Button
              onClick={scrollToProjects}
              className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/25 relative overflow-hidden w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <Button
              variant="outline"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="group border-2 border-gray-300/50 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/50 px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <span className="group-hover:animate-pulse">About Me</span>
            </Button>
          </div>

          <div className="animate-bounce-slow">
            <div
              className="relative mx-auto w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 hover:scale-110 transition-transform duration-300 cursor-pointer group"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-red-500 to-purple-500 rounded-full group-hover:animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/30 to-purple-500/30 animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
