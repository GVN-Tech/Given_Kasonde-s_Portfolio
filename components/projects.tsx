"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("all")
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      title: "Glassmorphism Personal Dashboard",
      description:
        "Modern personal dashboard featuring glassmorphism design principles with frosted glass effects, backdrop blur, and elegant transparency. Built with advanced CSS techniques and smooth animations.",
      technologies: ["TypeScript", "CSS3", "TailwindCSS", "Glassmorphism"],
      image: "/personal_dashboard.png",
      demoUrl: "https://my-personal-dashboard-ruddy.vercel.app",
      codeUrl: "https://github.com/GVN-Tech/My_Personal_Dashboard",
      category: "frontend",
      featured: true,
      status: "Live",
    },
    {
      title: "Animated Weather App",
      description:
        "Interactive weather application with beautiful animations, real-time data visualization, and dynamic backgrounds that change based on weather conditions. Features smooth transitions and micro-interactions.",
      technologies: ["JavaScript", "CSS3", "Weather API", "Animations"],
      image: "/Weather_app.png",
      demoUrl: "animated-weather-app-chi.vercel.app",
      codeUrl: "https://github.com/GVN-Tech/Animated_Weather_app.git",
      category: "frontend",
      featured: true,
      status: "Live",
    },
    {
      title: "Event Countdown",
      description:
        "Clean, Event countdown showcasing the power of subtle animations and typography. Features smooth page transitions, elegant hover effects, and optimized performance.",
      technologies: ["Javascript", "HTML5", "CSS", "Animations"],
      image: "/event_countdown.png",
      demoUrl: "beautiful-event-counter.vercel.app",
      codeUrl: "https://github.com/GVN-Tech/Beautiful_Event_Counter.git",
      category: "frontend",
      featured: false,
      status: "Completed",
    },
    {
      title: "Travel Exploration App",
      description:
        "Travel Exploration app is one app I am developing to aid traveling enthusiasts discover places around the globe. It is built to showcase beauty, top-tier animations and layout.",
      technologies: ["Next.js", "TailwindCSS", "Typescript"],
      image: "/swift_travel.png",
      demoUrl: "swift-travel-exploration.vercel.app",
      codeUrl: "https://github.com/GVN-Tech/Swift_Travel_Exploration",
      category: "frontend",
      featured: false,
      status: "Not yet Completed",
    },
  ]

  const categories = ["all", "frontend", "fullstack"]
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
    return (
      <Card
        className={`group relative overflow-hidden transition-all duration-300 hover:scale-105 bg-slate-800/50 border-slate-700/50 ${
          project.featured ? "ring-2 ring-red-500/30" : ""
        }`}
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          opacity: isVisible ? 1 : 0,
          transition: `all 0.5s ease-out ${index * 100}ms`,
        }}
      >
        {/* Featured badge */}
        {project.featured && (
          <div className="top-4 left-4 z-20 absolute bg-gradient-to-r from-red-500 to-purple-500 px-3 py-1 rounded-full font-bold text-white text-xs">
            FEATURED
          </div>
        )}

        {/* Status badge */}
        <div className="top-4 right-4 z-20 absolute">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              project.status === "Live"
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : project.status === "In Progress"
                ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Project image with hover overlay */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

          {/* Hover action buttons */}
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-3">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Button
                  size="sm"
                  className="bg-red-500 hover:bg-red-600 text-white cursor-pointer"
                >
                  Live Demo
                </Button>
              </a>
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-transparent hover:bg-white/10 border-white/50 text-white cursor-pointer"
                >
                  View Code
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Project details */}
        <CardHeader className="pb-4">
          <CardTitle className="font-serif text-white group-hover:text-red-400 text-xl transition-colors duration-300">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-300 leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>

        {/* Technologies */}
        <CardContent className="pt-0">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-slate-700 px-3 py-1 border border-slate-600/50 rounded-full font-medium text-gray-200 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <section ref={sectionRef} id="projects" className="relative bg-transparent py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-slate-800/20 to-slate-900/30" />

      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section title */}
        <div className="mb-12 text-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="mb-6 font-serif font-bold text-white text-4xl md:text-5xl">
              Featured{" "}
              <span className="bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 text-transparent">
                Projects
              </span>
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-gray-300 text-xl leading-relaxed">
              A showcase of my journey from frontend mastery to fullstack development
            </p>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 bg-slate-800/50 p-2 border border-slate-700/50 rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  filter === category
                    ? "bg-gradient-to-r from-red-500 to-purple-500 text-white"
                    : "text-gray-300 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="gap-8 grid md:grid-cols-2 mb-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${filter}`} project={project} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <div
          className={`text-center transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-slate-800/50 p-8 border border-slate-600/50 rounded-xl">
            <h3 className="mb-4 font-bold text-white text-2xl">Ready to Build Something Amazing?</h3>
            <p className="mx-auto mb-6 max-w-2xl text-gray-300">
              I'm always excited to work on new projects and collaborate with fellow developers and designers.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 hover:from-red-600 to-purple-500 hover:to-purple-600 px-8 py-3 rounded-full font-medium text-white transition-all duration-300 cursor-pointer"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
