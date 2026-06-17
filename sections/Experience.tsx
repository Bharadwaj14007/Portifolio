"use client";

import { motion } from "framer-motion";
import { GitBranch, Trophy, Heart, Award, ArrowUpRight } from "lucide-react";
import { experienceData, ExperienceItem } from "@/data/experience";

// Mapping experience types to icons and badges
const getItemMeta = (type: string) => {
  switch (type) {
    case "work":
      return {
        icon: GitBranch,
        colorClass: "text-purple-400 bg-purple-500/10 border-purple-500/20",
        glow: "shadow-purple-500/5",
      };
    case "achievement":
      return {
        icon: Trophy,
        colorClass: "text-amber-400 bg-amber-500/10 border-amber-500/20",
        glow: "shadow-amber-500/5",
      };
    case "volunteer":
      return {
        icon: Heart,
        colorClass: "text-rose-400 bg-rose-500/10 border-rose-500/20",
        glow: "shadow-rose-500/5",
      };
    default:
      return {
        icon: Award,
        colorClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
        glow: "shadow-cyan-500/5",
      };
  }
};

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen py-24 flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 md:px-12 space-y-16">
        {/* Section Title */}
        <div className="text-center space-y-2">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold"
          >
            Journey & Credentials
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight"
          >
            Experience &{" "}
            <span className="text-reveal bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 font-extrabold">
              Milestones
            </span>
          </motion.h2>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative max-w-3xl mx-auto pl-6 md:pl-0">
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 opacity-20 pointer-events-none" />

          {/* Timeline entries */}
          <div className="space-y-12">
            {experienceData.map((item: ExperienceItem, idx) => {
              const meta = getItemMeta(item.type);
              const Icon = meta.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-stretch md:justify-between ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Glowing Node Marker on central line */}
                  <div className="absolute left-[20px] md:left-1/2 top-6 -translate-x-[11px] md:-translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                      className={`w-[24px] h-[24px] rounded-full border-2 border-slate-900 bg-slate-950 flex items-center justify-center`}
                    >
                      <div className="w-[10px] h-[10px] rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                    </motion.div>
                  </div>

                  {/* Card Block */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`w-full md:w-[45%] text-left p-6 rounded-3xl glass border border-card-border shadow-xl hover:border-cyan-400/20 transition-all duration-300 ${meta.glow}`}
                  >
                    {/* Role / Org Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-card-border/60 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <div className={`p-1.5 rounded-lg border ${meta.colorClass}`}>
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <h4 className="text-base font-bold tracking-tight text-foreground">
                            {item.role}
                          </h4>
                        </div>
                        <span className="text-xs text-foreground/50 font-medium tracking-wide">
                          {item.organization}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-400/5 border border-cyan-400/10 px-2.5 py-1 rounded-full self-start sm:self-center">
                        {item.date}
                      </span>
                    </div>

                    {/* Bullet Achievements */}
                    <ul className="space-y-2.5 text-xs text-foreground/70 font-sans leading-relaxed">
                      {item.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <ArrowUpRight className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Empty spacer for desktop layout symmetry */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
