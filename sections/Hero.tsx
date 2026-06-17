"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Brain, Sparkles, Globe } from "lucide-react";
import MouseGlow from "@/components/MouseGlow";

const typingWords = [
  "Building Scalable Architectures",
  "Crafting Premium User Interfaces",
  "Integrating Intelligent AI Models",
  "Optimizing Database Operations",
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = typingWords[currentWordIndex];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && currentText === fullWord) {
      // Pause before starting deletion
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? fullWord.substring(0, currentText.length - 1)
            : fullWord.substring(0, currentText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[25%] left-[20%] w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[80px] animate-pulse duration-[8s]" />
        <div className="absolute bottom-[20%] right-[15%] w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-[100px] animate-pulse duration-[12s]" />
        <div className="absolute top-[10%] right-[30%] w-[250px] h-[250px] rounded-full bg-blue-500/10 blur-[70px] animate-pulse duration-[6s]" />
      </div>

      <MouseGlow className="w-full max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 py-12">
        {/* Left Column: Intro Text */}
        <div className="lg:col-span-7 text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Welcome to My Portfolio</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight text-foreground leading-[1.1]"
            >
              Hi, I&apos;m a{" "}
              <span className="block text-reveal bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 font-extrabold">
                Full Stack Developer
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-2xl font-medium text-foreground/70 font-mono h-12 flex items-center"
            >
              <span>{currentText}</span>
              <span className="w-1.5 h-6 bg-cyan-400 ml-1.5 animate-bounce shrink-0" />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-foreground/60 max-w-xl leading-relaxed font-sans"
            >
              I build advanced digital systems merging slick frontend interfaces with high-throughput backend services and custom algorithms.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300 hover:scale-[1.03]"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass hover:bg-foreground/5 text-foreground font-semibold transition-all duration-300 border border-card-border hover:scale-[1.03]"
            >
              <span>Contact Me</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Rotating Center Logo & Floating badges */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[400px]">
          {/* Animated Center Piece */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            className="relative w-72 h-72 rounded-full flex items-center justify-center border border-card-border glass shadow-2xl glass-glow"
          >
            {/* Pulsing glow ring */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/25 animate-ping duration-[3s] pointer-events-none" />

            {/* Rotating SVG Wireframe Orbit */}
            <svg
              className="absolute w-[90%] h-[90%] opacity-40 animate-spin"
              style={{ animationDuration: "35s" }}
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#grad)"
                strokeWidth="0.8"
                strokeDasharray="4 8"
              />
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="url(#grad2)"
                strokeWidth="0.6"
                strokeDasharray="8 4"
              />
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Developer Shield Icon */}
            <div className="relative w-40 h-40 rounded-full bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-purple-500/10 flex items-center justify-center border border-white/5">
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                <Code className="w-16 h-16 text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Badges */}
          {/* Badge 1: React */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.1 }}
            className="absolute top-10 left-10 py-2 px-3 rounded-2xl glass border border-card-border flex items-center gap-1.5 shadow-md"
          >
            <Globe className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-semibold font-mono">React</span>
          </motion.div>

          {/* Badge 2: Next.js */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.3 }}
            className="absolute top-8 right-6 py-2 px-3 rounded-2xl glass border border-card-border flex items-center gap-1.5 shadow-md"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-semibold font-mono">Next.js</span>
          </motion.div>

          {/* Badge 3: TypeScript */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-12 left-4 py-2 px-3 rounded-2xl glass border border-card-border flex items-center gap-1.5 shadow-md"
          >
            <Brain className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-semibold font-mono">TypeScript</span>
          </motion.div>

          {/* Badge 4: Node.js */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.7 }}
            className="absolute bottom-8 right-8 py-2 px-3 rounded-2xl glass border border-card-border flex items-center gap-1.5 shadow-md"
          >
            <Database className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold font-mono">Node.js</span>
          </motion.div>
        </div>
      </MouseGlow>
    </section>
  );
}
