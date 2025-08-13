'use client';
import Hero from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="top-1/4 left-1/4 absolute bg-blue-500/10 blur-3xl rounded-full w-96 h-96 animate-pulse"></div>
        <div className="right-1/4 bottom-1/4 absolute bg-purple-500/10 blur-3xl rounded-full w-80 h-80 animate-pulse delay-1000"></div>
        <div className="top-3/4 left-1/2 absolute bg-cyan-500/10 blur-3xl rounded-full w-64 h-64 animate-pulse delay-2000"></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="z-10 relative">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
