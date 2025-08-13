"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subject = `Portfolio Contact: ${formData.name}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    const mailtoLink = `mailto:techgvn51@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`

    // Open email client
    window.location.href = mailtoLink

    // Simulate form submission feedback
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/GVN-Tech/GVN-Tech", icon: "🔗", color: "from-gray-600 to-gray-800" },
    { name: "LinkedIn", url: "https://www.Linkedin.com/in/given-kasonde-477587376", icon: "💼", color: "from-blue-600 to-blue-800" },
    { name: "Twitter", url: "https://x.com/SwiftGvN", icon: "🐦", color: "from-sky-500 to-sky-700" },
    { name: "Email", url: "mailto:techgvn51@gmail.com", icon: "📧", color: "from-red-500 to-red-700" },
  ]

  return (
    <section ref={sectionRef} id="contact" className="relative bg-transparent py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/20 to-slate-900/40" />
      <div className="top-1/4 left-1/3 absolute bg-red-500/5 blur-3xl rounded-full w-96 h-96 animate-pulse-slow" />
      <div
        className="right-1/3 bottom-1/4 absolute bg-purple-500/5 blur-3xl rounded-full w-96 h-96 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-20 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="mb-6 font-serif font-bold text-white text-5xl md:text-6xl">
              Let's{" "}
              <span className="bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 text-transparent">Connect</span>
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-gray-300 text-xl leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something extraordinary
              together.
            </p>
            <div className="bg-gradient-to-r from-red-500 to-purple-500 mx-auto rounded-full w-32 h-1" />
          </div>
        </div>

        <div className="gap-16 grid lg:grid-cols-2 mb-20">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "animate-slide-in-bottom" : "opacity-0"}`}
          >
            <Card className="bg-slate-800/50 shadow-2xl hover:shadow-red-500/10 backdrop-blur-sm border-slate-700/50 transition-all duration-500">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 font-serif text-white text-3xl">
                  <span className="text-2xl">💬</span>
                  Get In Touch
                </CardTitle>
                <p className="text-gray-400">Fill out the form below and I'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                        focusedField === "name" ? "text-red-400" : "text-gray-300"
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="bg-slate-700/50 backdrop-blur-sm px-4 py-3 border border-slate-600/50 focus:border-red-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 w-full text-white transition-all duration-300 placeholder-gray-400"
                      placeholder="Your full name"
                      required
                    />
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 transition-all duration-300 ${
                        focusedField === "name" ? "w-full" : "w-0"
                      }`}
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                        focusedField === "email" ? "text-red-400" : "text-gray-300"
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="bg-slate-700/50 backdrop-blur-sm px-4 py-3 border border-slate-600/50 focus:border-red-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 w-full text-white transition-all duration-300 placeholder-gray-400"
                      placeholder="your.email@example.com"
                      required
                    />
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 transition-all duration-300 ${
                        focusedField === "email" ? "w-full" : "w-0"
                      }`}
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                        focusedField === "message" ? "text-red-400" : "text-gray-300"
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className="bg-slate-700/50 backdrop-blur-sm px-4 py-3 border border-slate-600/50 focus:border-red-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 w-full text-white transition-all duration-300 resize-none placeholder-gray-400"
                      placeholder="Tell me about your project..."
                      required
                    />
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 transition-all duration-300 ${
                        focusedField === "message" ? "w-full" : "w-0"
                      }`}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 text-lg font-medium rounded-lg transition-all duration-300 relative overflow-hidden ${
                      submitStatus === "success"
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600"
                    } ${isSubmitting ? "animate-pulse" : "hover:scale-105"} shadow-lg hover:shadow-red-500/25`}
                  >
                    {isSubmitting ? (
                      <span className="flex justify-center items-center gap-2">
                        <div className="border-2 border-white/30 border-t-white rounded-full w-5 h-5 animate-spin" />
                        Opening Email...
                      </span>
                    ) : submitStatus === "success" ? (
                      <span className="flex justify-center items-center gap-2">
                        <span className="text-xl">✓</span>
                        Email Opened!
                      </span>
                    ) : (
                      <span className="flex justify-center items-center gap-2">
                        <span className="text-xl">🚀</span>
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 delay-400 ${isVisible ? "animate-slide-in-bottom" : "opacity-0"}`}
            >
              <Card className="bg-slate-800/50 shadow-2xl backdrop-blur-sm border-slate-700/50">
                <CardContent className="p-8">
                  <h3 className="flex items-center gap-3 mb-6 font-serif font-bold text-white text-2xl">
                    <span className="text-2xl">⚡</span>
                    Quick Info
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-slate-700/30 p-4 rounded-lg">
                      <span className="text-2xl">🌍</span>
                      <div>
                        <p className="font-medium text-white">Location</p>
                        <p className="text-gray-400">Available Worldwide (Remote)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-700/30 p-4 rounded-lg">
                      <span className="text-2xl">⏱️</span>
                      <div>
                        <p className="font-medium text-white">Response Time</p>
                        <p className="text-gray-400">Within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-700/30 p-4 rounded-lg">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <p className="font-medium text-white">Availability</p>
                        <p className="font-medium text-green-400">Open to new projects</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div
              className={`transition-all duration-1000 delay-600 ${isVisible ? "animate-slide-in-bottom" : "opacity-0"}`}
            >
              <Card className="bg-slate-800/50 shadow-2xl backdrop-blur-sm border-slate-700/50">
                <CardContent className="p-8">
                  <h3 className="flex items-center gap-3 mb-6 font-serif font-bold text-white text-2xl">
                    <span className="text-2xl">🤝</span>
                    Let's Build Together
                  </h3>
                  <p className="mb-6 text-gray-300 leading-relaxed">
                    Whether you need a stunning website, a web application, or want to collaborate on an exciting
                    project, I'm here to help bring your vision to life with clean, modern code and creative solutions.
                  </p>

                  <div className="gap-3 grid grid-cols-2">
                    {socialLinks.map((link, index) => (
                      <a
                        key={link.name}
                        href={link.url}
                        className={`flex items-center gap-3 p-3 bg-gradient-to-r ${link.color} rounded-lg text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-lg`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="text-lg">{link.icon}</span>
                        <span className="text-sm">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`text-center transition-all duration-1000 delay-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="bg-slate-800/30 backdrop-blur-sm p-8 border border-slate-700/30 rounded-2xl">
            <p className="mb-4 text-gray-400">
              © 2024 Swift GvN (Given Kaasonde). Crafted with passion, code, and endless curiosity.
            </p>
            <div className="flex justify-center items-center gap-2 text-gray-500 text-sm">
              <span>Built with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>using TypeScript & Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
