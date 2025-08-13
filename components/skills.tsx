"use client"

import { useEffect, useState, useRef } from "react"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const currentSkills = [
    {
      name: "JavaScript",
      level: 65,
      color: "from-yellow-400 to-yellow-600",
      icon: "⚡",
      description: "ES6+, DOM manipulation, async programming",
    },
    {
      name: "HTML",
      level: 95,
      color: "from-orange-400 to-orange-600",
      icon: "🏗️",
      description: "Semantic markup, accessibility, SEO",
    },
    {
      name: "CSS",
      level: 65,
      color: "from-blue-400 to-blue-600",
      icon: "🎨",
      description: "Flexbox, Grid, animations, responsive design",
    },
    {
      name: "Tailwind CSS",
      level: 90,
      color: "from-cyan-400 to-cyan-600",
      icon: "💨",
      description: "Utility-first, custom components, optimization",
    },
    {
      name: "TypeScript",
      level: 50,
      color: "from-blue-500 to-blue-700",
      icon: "🔷",
      description: "Type safety, interfaces, generics",
    },
  ]

  const learningSkills = [
    {
      name: "Next.js",
      level: 45,
      color: "from-orange-600 to-orange-800",
      icon: "⚛️",
      description: "App Router, SSR, API routes",
    },
    {
      name: "Python",
      level: 40,
      color: "from-green-400 to-green-600",
      icon: "🐍",
      description: "Backend development, data structures",
    },
    {
      name: "Node.js",
      level: 35,
      color: "from-green-500 to-green-700",
      icon: "🟢",
      description: "Server-side JavaScript, APIs",
    },
    {
      name: "Database Design",
      level: 10,
      color: "from-purple-400 to-purple-600",
      icon: "🗄️",
      description: "SQL, NoSQL, data modeling",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const SkillCard = ({
    skill,
    index,
    isDark = false,
  }: { skill: (typeof currentSkills)[0]; index: number; isDark?: boolean }) => {
    return (
      <div
        className={`group relative p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
          isDark
            ? "bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50"
            : "bg-white/10 border border-white/20 hover:bg-white/20"
        }`}
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          opacity: isVisible ? 1 : 0,
          transition: `all 0.4s ease-out ${index * 50}ms`,
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{skill.icon}</span>
            <div>
              <span className="block font-semibold text-white text-lg">{skill.name}</span>
              <span className="text-gray-400 text-sm">{skill.description}</span>
            </div>
          </div>
          <span className="font-mono font-bold text-white/70 text-sm">{skill.level}%</span>
        </div>

        <div className="relative">
          <div className="bg-white/10 rounded-full w-full h-2">
            <div
              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-700 ease-out`}
              style={{
                width: isVisible ? `${skill.level}%` : "0%",
              }}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <section ref={sectionRef} id="skills" className="relative bg-transparent py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50" />

      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="mb-6 font-serif font-bold text-white text-4xl md:text-5xl">
              Skills &{" "}
              <span className="bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 text-transparent">
                Expertise
              </span>
            </h2>
            <p className="mx-auto max-w-3xl text-gray-300 text-xl leading-relaxed">
              From frontend mastery to fullstack ambitions - constantly evolving and learning
            </p>
          </div>
        </div>

        <div className="gap-12 grid lg:grid-cols-2 mb-16">
          {/* Current Skills */}
          <div className="space-y-6">
            <div className="mb-8 text-center">
              <h3 className="mb-4 font-serif font-bold text-white text-2xl">
                Current <span className="text-green-400">Arsenal</span>
              </h3>
              <p className="text-gray-400">Technologies I've mastered through self-directed learning</p>
            </div>

            <div className="space-y-4">
              {currentSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Learning Skills */}
          <div className="space-y-6">
            <div className="mb-8 text-center">
              <h3 className="mb-4 font-serif font-bold text-white text-2xl">
                Fullstack <span className="text-purple-400">Journey</span>
              </h3>
              <p className="text-gray-400">Expanding into backend and fullstack development</p>
            </div>

            <div className="space-y-4">
              {learningSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index + currentSkills.length} isDark />
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-900/30 to-red-900/30 mt-8 p-6 border border-purple-500/20 rounded-xl">
              <div className="text-center">
                <div className="mb-3 text-3xl">🚀</div>
                <p className="mb-2 font-medium text-white text-lg">Self-Taught & Ambitious</p>
                <p className="text-gray-300 italic">"Hungry for fullstack mastery and ready to build the future"</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`text-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h4 className="mb-6 font-bold text-white text-xl">This Portfolio Built With</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {["TypeScript", "Next.js", "Tailwind CSS", "CSS Animations"].map((tech) => (
              <div
                key={tech}
                className="bg-slate-800 px-4 py-2 border border-slate-600 rounded-full font-medium text-white hover:scale-105 transition-transform duration-200"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
