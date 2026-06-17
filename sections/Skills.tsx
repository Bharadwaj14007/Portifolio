"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  Database, 
  Settings, 
  Cpu, 
  Layers, 
  Globe, 
  Sliders,
  Sparkles
} from "lucide-react";
import { skillsData, Skill } from "@/data/skills";

// Helper to match skill categories to design parameters
const categoryMeta = {
  frontend: {
    title: "Frontend Development",
    description: "Building fast, dynamic, responsive, and typed user interfaces.",
    icon: Code2,
    gradient: "from-cyan-500/20 to-blue-500/10",
    glowColor: "rgba(6, 182, 212, 0.15)",
    span: "md:col-span-2",
  },
  backend: {
    title: "Backend Engineering",
    description: "Developing robust API routing, middleware, and logic paths.",
    icon: Terminal,
    gradient: "from-purple-500/20 to-indigo-500/10",
    glowColor: "rgba(168, 85, 247, 0.15)",
    span: "md:col-span-1",
  },
  database: {
    title: "Databases & Storage",
    description: "Designing structured tables, documents, and efficient query lookups.",
    icon: Database,
    gradient: "from-blue-500/20 to-teal-500/10",
    glowColor: "rgba(59, 130, 246, 0.15)",
    span: "md:col-span-1",
  },
  tools: {
    title: "Developer Workspaces",
    description: "Managing deployments, versions, scripts, and sandbox testing environments.",
    icon: Settings,
    gradient: "from-pink-500/20 to-purple-500/10",
    glowColor: "rgba(236, 72, 153, 0.15)",
    span: "md:col-span-2",
  },
};

// Generic mapping for skill badges to make visual styling consistent
const getSkillIcon = (name: string) => {
  switch (name) {
    case "React": return Globe;
    case "Next.js": return Layers;
    case "Tailwind CSS": return Sliders;
    case "TypeScript": return Cpu;
    default: return Sparkles;
  }
};

export default function Skills() {
  // Group skills by category
  const categories = {
    frontend: skillsData.filter((s) => s.category === "frontend"),
    backend: skillsData.filter((s) => s.category === "backend"),
    database: skillsData.filter((s) => s.category === "database"),
    tools: skillsData.filter((s) => s.category === "tools"),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="relative min-h-screen py-24 flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 md:px-12 space-y-16">
        {/* Section Title */}
        <div className="text-center space-y-2">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold"
          >
            Technical Stack
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight"
          >
            Interactive{" "}
            <span className="text-reveal bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 font-extrabold">
              Bento Grid
            </span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {Object.entries(categories).map(([key, skills]) => {
            const meta = categoryMeta[key as keyof typeof categories];
            const Icon = meta.icon;

            return (
              <motion.div
                key={key}
                variants={cardVariants}
                className={`group relative p-8 rounded-3xl glass border border-card-border overflow-hidden flex flex-col justify-between transition-all duration-500 ${meta.span}`}
                whileHover={{ 
                  y: -5, 
                  scale: 1.01,
                  boxShadow: `0 20px 40px -15px ${meta.glowColor}`
                }}
              >
                {/* Backdrop ambient blur filter */}
                <div 
                  className={`absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gradient-to-br ${meta.gradient} blur-2xl group-hover:scale-125 transition-transform duration-500`}
                />

                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 dark:bg-white/5 border border-card-border flex items-center justify-center">
                      <Icon className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-wide">{meta.title}</h3>
                      <p className="text-xs text-foreground/50 leading-relaxed font-sans">{meta.description}</p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {skills.map((skill: Skill) => {
                      const SkillIcon = getSkillIcon(skill.name);
                      return (
                        <div
                          key={skill.name}
                          className="p-3.5 rounded-2xl bg-foreground/[0.02] border border-card-border/60 hover:border-cyan-400/30 transition-all duration-300 group/skill"
                        >
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <SkillIcon className="w-4 h-4 text-cyan-400/80 group-hover/skill:scale-110 transition-transform" />
                              <span className="text-xs font-semibold font-mono tracking-wide">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-foreground/50 font-bold">
                              {skill.level}%
                            </span>
                          </div>
                          
                          {/* Progress bar */}
                          <div className="w-full h-1 bg-slate-800/40 dark:bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
