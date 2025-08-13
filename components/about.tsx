import Image from "next/image";

export function About() {
  return (
    <section id="about" className="relative bg-transparent py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80" />
      <div className="top-1/3 left-1/4 absolute bg-red-500/5 blur-3xl rounded-full w-96 h-96 animate-pulse-slow" />
      <div
        className="right-1/4 bottom-1/3 absolute bg-purple-500/5 blur-3xl rounded-full w-96 h-96 animate-pulse-slow"
        style={{ animationDelay: "3s" }}
      />

      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="mb-6 font-serif font-bold text-white text-5xl md:text-6xl">
            About{" "}
            <span className="bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 text-transparent">Swift GvN</span>
          </h2>
          <div className="bg-gradient-to-r from-red-500 to-purple-500 mx-auto rounded-full w-32 h-1"></div>
        </div>

        <div className="items-center gap-16 grid lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-300 text-xl leading-relaxed">
                Hello! I'm <span className="font-bold text-white">Given Kasonde</span>, {" "}
                <span className="bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 font-bold text-transparent">
                  Swift GvN
                </span>
                . I'm a passionate <span className="font-semibold text-green-400">self-taught frontend developer</span>{" "}
                who believes in the power of code to transform ideas into reality.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                My journey began with curiosity and evolved into expertise. I've mastered{" "}
                <span className="font-semibold text-yellow-400">JavaScript</span>,{" "}
                <span className="font-semibold text-orange-400">HTML</span>,{" "}
                <span className="font-semibold text-blue-400">CSS</span>, and{" "}
                <span className="font-semibold text-cyan-400">Tailwind CSS</span>, crafting responsive and engaging user
                experiences that users love to interact with.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                This very portfolio showcases my growing expertise, built with{" "}
                <span className="font-semibold text-blue-300">TypeScript</span> and{" "}
                <span className="font-semibold text-white">Next.js</span> , a testament to my commitment to modern web
                development practices.
              </p>

              <div className="bg-gradient-to-r from-purple-900/30 to-red-900/30 backdrop-blur-sm p-6 border border-purple-500/20 rounded-2xl">
                <p className="text-white text-lg leading-relaxed">
                  <span className="mr-2 text-2xl">🚀</span>
                  Currently, I'm{" "}
                  <span className="font-bold text-red-400">hungry for the full power of fullstack engineering</span>.
                  I'm diving deep into Python, Node.js, and database technologies, determined to master the complete
                  development stack and build end-to-end solutions that make a real impact.
                </p>
              </div>
            </div>

            <div className="gap-4 grid grid-cols-2">
              <div className="bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm p-4 border border-slate-700/50 rounded-xl transition-colors duration-300">
                <div className="mb-2 text-2xl">💡</div>
                <h4 className="mb-1 font-semibold text-white">Clean Code</h4>
                <p className="text-gray-400 text-sm">Writing maintainable, scalable solutions</p>
              </div>
              <div className="bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm p-4 border border-slate-700/50 rounded-xl transition-colors duration-300">
                <div className="mb-2 text-2xl">🎨</div>
                <h4 className="mb-1 font-semibold text-white">User-Centric</h4>
                <p className="text-gray-400 text-sm">Designing with empathy and purpose</p>
              </div>
              <div className="bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm p-4 border border-slate-700/50 rounded-xl transition-colors duration-300">
                <div className="mb-2 text-2xl">📚</div>
                <h4 className="mb-1 font-semibold text-white">Continuous Learning</h4>
                <p className="text-gray-400 text-sm">Always evolving with technology</p>
              </div>
              <div className="bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm p-4 border border-slate-700/50 rounded-xl transition-colors duration-300">
                <div className="mb-2 text-2xl">⚡</div>
                <h4 className="mb-1 font-semibold text-white">Performance</h4>
                <p className="text-gray-400 text-sm">Optimized for speed and efficiency</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="group relative">
              <div className="flex justify-center items-center bg-gradient-to-br from-red-500/20 to-purple-500/20 backdrop-blur-sm mx-auto border border-white/10 rounded-full w-96 h-96 group-hover:scale-105 transition-transform duration-500">
                <div className="relative flex justify-center items-center bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-full w-80 h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 group-hover:from-red-500/20 to-purple-500/10 group-hover:to-purple-500/20 transition-colors duration-500" />
                  <div className="z-10 relative rounded-full w-full h-full overflow-hidden">
                    <Image
                      src="/Given_Kasonde.jpg"
                      alt="Swift GvN-Given_Kasonde"
                      className="rounded-full w-full h-full object-cover"
                      width={320}
                      height={320}
                      priority
                      onLoad={() => {
                        const fallback = document.querySelector('.about-fallback') as HTMLDivElement | null;
                        if (fallback) fallback.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-br from-slate-800 to-slate-700 rounded-full about-fallback">
                      <div className="text-center">
                        <div className="bg-clip-text bg-gradient-to-r from-red-500 to-purple-500 mb-3 font-serif font-bold text-transparent text-7xl">
                          SG
                        </div>
                        <div className="font-medium text-gray-400 text-base">Swift GvN</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 animate-spin" style={{ animationDuration: "35s" }}>
                <div className="top-8 left-1/2 absolute flex justify-center items-center bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full w-12 h-12 -translate-x-1/2 transform">
                  <span className="text-yellow-400">⚡</span>
                </div>
              </div>

              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "40s", animationDirection: "reverse" }}
              >
                <div className="bottom-8 left-1/2 absolute flex justify-center items-center bg-blue-400/20 backdrop-blur-sm border border-blue-400/30 rounded-full w-12 h-12 -translate-x-1/2 transform">
                  <span className="text-blue-400">🎨</span>
                </div>
              </div>

              <div className="absolute inset-0 animate-spin" style={{ animationDuration: "45s" }}>
                <div className="top-1/2 right-8 absolute flex justify-center items-center bg-green-400/20 backdrop-blur-sm border border-green-400/30 rounded-full w-12 h-12 -translate-y-1/2 transform">
                  <span className="text-green-400">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
