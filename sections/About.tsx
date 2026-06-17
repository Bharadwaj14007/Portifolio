"use client";

import { motion } from "framer-motion";
import { Code2, Server, Brain, Network, Award, Calendar } from "lucide-react";
import ContributionGraph from "@/components/ContributionGraph";

const focusAreas = [
  {
    title: "Web Development",
    description: "Designing semantic layouts, fluid structures, responsive viewports, and custom styling systems.",
    icon: Code2,
    gradient: "from-cyan-500/10 to-blue-500/10",
    borderGlow: "group-hover:border-cyan-500/40",
  },
  {
    title: "Full Stack Development",
    description: "Architecting backend gateways, database models, schema relationships, and API connections.",
    icon: Server,
    gradient: "from-blue-500/10 to-purple-500/10",
    borderGlow: "group-hover:border-blue-500/40",
  },
  {
    title: "Data Structures & Algos",
    description: "Optimizing complexity parameters, execution runtime latency, memory indexes, and solving logical problems.",
    icon: Brain,
    gradient: "from-purple-500/10 to-pink-500/10",
    borderGlow: "group-hover:border-purple-500/40",
  },
  {
    title: "AI Integration",
    description: "Leveraging large language models, prompt chains, vector embeddings, and autonomous agent loops.",
    icon: Network,
    gradient: "from-pink-500/10 to-rose-500/10",
    borderGlow: "group-hover:border-pink-500/40",
  },
  {
    title: "Hackathons",
    description: "Rapid prototyping, wireframing IoT solutions, hardware integrations, and pitching live projects.",
    icon: Award,
    gradient: "from-rose-500/10 to-cyan-500/10",
    borderGlow: "group-hover:border-rose-500/40",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="relative min-h-screen py-24 flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 md:px-12 space-y-16">
        {/* Section Title */}
        <div className="text-center space-y-2">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold"
          >
            About Me
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight"
          >
            Engineering with{" "}
            <span className="text-reveal bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 font-extrabold">
              Intent
            </span>
          </motion.h2>
        </div>

        {/* Bio + Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-foreground/75 text-base md:text-lg leading-relaxed font-sans"
          >
            <p>
              I am a dedicated developer focused on constructing high-quality software solutions. My design aesthetic focuses on clean layouts, smooth micro-interactions, and premium typography inspired by modern SaaS architecture.
            </p>
            <p>
              I specialize in bridging advanced backend schemas with modern React frameworks like Next.js. I have a passion for participating in coding hackathons, building IoT integrations, and applying smart AI models to real-world tasks.
            </p>
            
            {/* Quick stats indicator */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass p-4 rounded-2xl border border-card-border">
                <div className="text-2xl font-bold font-mono text-cyan-400">12+</div>
                <div className="text-xs text-foreground/60 font-semibold uppercase tracking-wider">Projects Completed</div>
              </div>
              <div className="glass p-4 rounded-2xl border border-card-border">
                <div className="text-2xl font-bold font-mono text-purple-400">5+</div>
                <div className="text-xs text-foreground/60 font-semibold uppercase tracking-wider">Hackathons Attended</div>
              </div>
            </div>
          </motion.div>

          {/* Focus Area Bento cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  variants={itemVariants}
                  className={`group relative p-6 rounded-3xl glass border border-card-border hover:bg-gradient-to-br ${area.gradient} transition-all duration-500 overflow-hidden ${
                    idx === 0 ? "sm:col-span-2" : ""
                  }`}
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  {/* Subtle Background Icon Glow */}
                  <Icon className="absolute -right-4 -bottom-4 w-24 h-24 text-foreground/5 opacity-5 group-hover:scale-110 transition-transform duration-500" />
                  
                  <div className="relative z-10 space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h4 className="text-base font-bold tracking-wide">{area.title}</h4>
                    <p className="text-xs text-foreground/60 leading-relaxed font-sans">{area.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Contribution Graph Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8"
        >
          <ContributionGraph />
        </motion.div>
      </div>
    </section>
  );
}
