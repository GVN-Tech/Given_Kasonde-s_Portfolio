"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)

      const sections = ["hero", "about", "skills", "projects", "contact"]
      const sectionElements = sections.map((id) => ({
        id,
        element: document.getElementById(id),
        offset: document.getElementById(id)?.offsetTop || 0,
      }))

      const currentSection = sectionElements.find((section, index) => {
        const nextSection = sectionElements[index + 1]
        const sectionTop = section.offset - 100
        const sectionBottom = nextSection ? nextSection.offset - 100 : document.body.scrollHeight

        return scrollY >= sectionTop && scrollY < sectionBottom
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId === "home" ? "hero" : sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-700/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="font-serif font-bold text-2xl text-white cursor-pointer group transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection("home")}
          >
            Swift{" "}
            <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent group-hover:from-red-400 group-hover:to-purple-400 transition-all duration-300">
              GvN
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 group ${
                  activeSection === (item.id === "home" ? "hero" : item.id)
                    ? "text-white bg-slate-800/50"
                    : "text-gray-300 hover:text-white hover:bg-slate-800/30"
                }`}
              >
                {item.name}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 transition-all duration-300 ${
                    activeSection === (item.id === "home" ? "hero" : item.id) ? "w-6" : "w-0 group-hover:w-4"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:flex bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 font-medium"
            >
              Let's Connect
            </Button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <div
                  className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                />
                <div
                  className={`w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                />
                <div
                  className={`w-5 h-0.5 bg-white mt-1 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 border border-slate-700/50">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-6 py-3 transition-all duration-200 ${
                  activeSection === (item.id === "home" ? "hero" : item.id)
                    ? "text-white bg-slate-800/50 border-l-4 border-red-500"
                    : "text-gray-300 hover:text-white hover:bg-slate-800/30"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </button>
            ))}
            <div className="px-6 py-3">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white py-2 rounded-full transition-all duration-300"
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
