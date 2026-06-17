"use client";

import { motion } from "framer-motion";
import { ExternalLink, Bot, CalendarRange, Cpu, MessageSquare, CheckCircle } from "lucide-react";
import { projectsData, Project } from "@/data/projects";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
import { useTilt } from "@/hooks/useTilt";

// Component representing the custom interactive visual mockup for each project card
function ProjectVisualMockup({ id }: { id: string }) {
  switch (id) {
    case "ai-study-assistant":
      return (
        <div className="relative w-full h-44 rounded-2xl bg-slate-900/60 dark:bg-black/40 border border-card-border overflow-hidden flex flex-col p-4 font-mono text-[10px] space-y-2 select-none">
          {/* Chat header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <div className="flex items-center gap-1.5 text-cyan-400">
              <Bot className="w-3.5 h-3.5" />
              <span className="font-bold">Study Bot v1.2</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          </div>
          {/* Mock messages */}
          <div className="flex-1 space-y-2 overflow-hidden text-left">
            <div className="bg-white/5 p-2 rounded-xl border border-white/5 text-foreground/80">
              Prompt: Summarize the second chapter of Thermodynamics.
            </div>
            <div className="bg-cyan-500/10 p-2 rounded-xl border border-cyan-500/20 text-cyan-400">
              Analysis complete. Core takeaway: Carnot Cycles define the efficiency bounds of engine cycles.
            </div>
          </div>
          {/* Action indicator */}
          <div className="flex justify-between items-center text-[8px] text-foreground/50 border-t border-white/5 pt-2">
            <span>LLM Temperature: 0.2</span>
            <span className="text-cyan-400">Ctrl + Enter to prompt</span>
          </div>
        </div>
      );

    case "leave-management":
      return (
        <div className="relative w-full h-44 rounded-2xl bg-slate-900/60 dark:bg-black/40 border border-card-border overflow-hidden flex flex-col p-4 font-sans text-[10px] space-y-3 select-none">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between">
            <span className="font-mono font-bold text-foreground/80 flex items-center gap-1">
              <CalendarRange className="w-3.5 h-3.5 text-purple-400" />
              <span>Leave Dashboard</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[8px] font-mono font-bold">
              SYSTEM ONLINE
            </span>
          </div>
          {/* Circular tracking meters & stats */}
          <div className="grid grid-cols-2 gap-3 flex-1 items-center">
            <div className="space-y-1 text-left">
              <div className="text-[8px] text-foreground/50 uppercase tracking-wide">Approved Quota</div>
              <div className="text-xl font-mono font-bold text-purple-400">18 / 24 Days</div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="w-[75%] h-full bg-purple-500 rounded-full" />
              </div>
            </div>
            <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 space-y-1 text-left">
              <div className="text-[8px] text-foreground/50 uppercase tracking-wide">Pending Request</div>
              <div className="font-semibold text-foreground/80">Annual Sick Leave</div>
              <div className="text-[8px] text-amber-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span>Awaiting HOD approval</span>
              </div>
            </div>
          </div>
        </div>
      );

    case "smart-sensor-dustbin":
      return (
        <div className="relative w-full h-44 rounded-2xl bg-slate-900/60 dark:bg-black/40 border border-card-border overflow-hidden flex flex-col p-4 font-mono text-[10px] space-y-3 select-none">
          {/* IoT Telemetry Title */}
          <div className="flex items-center justify-between">
            <span className="font-bold text-foreground/80 flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>NodeMCU-048</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px] font-bold">
              CONNECTED
            </span>
          </div>
          {/* Stats metrics */}
          <div className="flex-1 flex justify-around items-center">
            <div className="text-center">
              <div className="text-2xl font-black text-emerald-400">76%</div>
              <div className="text-[8px] text-foreground/50 uppercase tracking-wider mt-1">Fill Level</div>
            </div>
            <div className="h-10 w-[1px] bg-white/5" />
            <div className="text-center">
              <div className="text-2xl font-black text-cyan-400">12 cm</div>
              <div className="text-[8px] text-foreground/50 uppercase tracking-wider mt-1">Sensor Range</div>
            </div>
          </div>
          {/* WebSockets telemetry stream log */}
          <div className="text-[8px] text-foreground/40 text-left truncate border-t border-white/5 pt-1.5">
            [16:24:09] WS_MSG: Ultrasonic distance threshold triggered. Lid opened.
          </div>
        </div>
      );

    case "realtime-chat":
      return (
        <div className="relative w-full h-44 rounded-2xl bg-slate-900/60 dark:bg-black/40 border border-card-border overflow-hidden flex flex-col p-4 font-sans text-[10px] space-y-3 select-none">
          {/* Chat interface heading */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="font-mono font-bold text-foreground/80 flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Direct: @Alex</span>
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900" />
          </div>
          {/* Mock message logs */}
          <div className="flex-1 flex flex-col justify-end space-y-2">
            <div className="bg-white/5 max-w-[80%] self-start p-2 rounded-2xl rounded-tl-none border border-white/5 text-left text-foreground/80">
              Did you set up the WebSocket channel?
            </div>
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 max-w-[80%] self-end p-2 rounded-2xl rounded-tr-none text-white text-left font-medium">
              Yes, testing real-time events right now!
            </div>
            <div className="text-[8px] text-foreground/40 text-left font-mono italic">
              Alex is typing...
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

// Sub-component ProjectCard that utilizes 3D tilt calculations
function ProjectCard({ project }: { project: Project }) {
  const { ref, tiltStyle, glowStyle, handleMouseMove, handleMouseLeave } = useTilt(6);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className="group relative rounded-3xl glass border border-card-border p-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-shadow duration-500 hover:shadow-cyan-500/5 select-none h-[430px]"
    >
      {/* Dynamic glow tracking layer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(150px circle at ${glowStyle.left} ${glowStyle.top}, rgba(6, 182, 212, 0.18), transparent 70%)`,
        }}
      />

      <div className="space-y-4">
        {/* Project Visual mockup */}
        <ProjectVisualMockup id={project.id} />

        {/* Project Header Info */}
        <div className="space-y-2 text-left">
          <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-cyan-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xs text-foreground/60 leading-relaxed font-sans line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-card-border/60">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[9px] font-bold font-mono tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/5 text-foreground/60"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[9px] font-bold font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-cyan-400">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Action Button Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-card-border hover:bg-foreground/5 hover:text-cyan-400 text-xs font-semibold font-mono tracking-wide transition-all duration-300"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold font-mono tracking-wide transition-all duration-300 shadow-md shadow-cyan-500/10"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-24 flex items-center justify-center">
      <div className="w-full max-w-5xl px-6 md:px-12 space-y-16">
        {/* Section Title */}
        <div className="text-center space-y-2">
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold"
          >
            Portfolio
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight"
          >
            Premium Showcase{" "}
            <span className="text-reveal bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 font-extrabold">
              Projects
            </span>
          </motion.h2>
        </div>

        {/* Project grid display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
