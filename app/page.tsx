import CustomCursor from "@/components/CustomCursor";
import ParticlesBg from "@/components/ParticlesBg";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Premium Interactive Elements */}
      <CustomCursor />
      <ParticlesBg />
      <Navbar />

      {/* Main Sections Layout */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-start">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Premium minimal Footer */}
      <footer className="w-full py-8 border-t border-card-border/60 text-center text-xs text-foreground/40 font-mono z-10 relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} PORTFOLIO. Built with Next.js 15 & Framer Motion.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Back to top</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}
