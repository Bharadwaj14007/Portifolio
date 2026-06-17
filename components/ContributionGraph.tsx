"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GitPullRequest, GitMerge, Award } from "lucide-react";

// Mock data generator for contribution squares
const generateMockContributions = () => {
  const contributions = [];
  const levels = [0, 1, 2, 3, 4]; // Color levels: 0 (none) to 4 (max)
  
  // Create ~15 weeks of mock data (15 * 7 = 105 squares) for compact screen display
  for (let i = 0; i < 105; i++) {
    // Randomize contribution level but weight towards light greens/greens
    const rand = Math.random();
    let level = 0;
    if (rand > 0.85) level = 4;
    else if (rand > 0.7) level = 3;
    else if (rand > 0.4) level = 2;
    else if (rand > 0.2) level = 1;
    
    contributions.push({
      id: i,
      level,
      count: level * Math.floor(Math.random() * 3 + 1),
      date: new Date(Date.now() - (105 - i) * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    });
  }
  return contributions;
};

export default function ContributionGraph() {
  const [data] = useState(generateMockContributions);
  const [hoveredDay, setHoveredDay] = useState<{ count: number; date: string } | null>(null);

  return (
    <div className="w-full rounded-2xl glass p-6 border border-card-border shadow-xl space-y-4">
      {/* Top Header Card */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-card-border">
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-foreground/80 font-mono flex items-center gap-1.5">
            <GitPullRequest className="w-4 h-4 text-cyan-400" />
            <span>Open Source Contributions</span>
          </h4>
          <p className="text-xs text-foreground/60">
            Mock activity tracker displaying repository check-ins and review cycles
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 bg-cyan-400/5 border border-cyan-400/20 px-3 py-1.5 rounded-full shrink-0">
          <Award className="w-3.5 h-3.5" />
          <span>784 Commits this year</span>
        </div>
      </div>

      {/* Grid calendar */}
      <div className="relative">
        {/* Tooltip Overlay */}
        {hoveredDay && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-[10px] text-slate-100 font-mono z-20 shadow-lg pointer-events-none whitespace-nowrap">
            {hoveredDay.count === 0 ? "No contributions" : `${hoveredDay.count} commits`} on {hoveredDay.date}
          </div>
        )}

        <div className="grid grid-flow-col grid-rows-7 gap-1.5 justify-start overflow-x-auto pb-2 scrollbar-thin">
          {data.map((day) => {
            // Map levels to color variables
            let bgClass = "bg-slate-800/40 dark:bg-white/5"; // level 0
            if (day.level === 1) bgClass = "bg-cyan-500/20 dark:bg-cyan-500/10";
            if (day.level === 2) bgClass = "bg-cyan-500/45 dark:bg-cyan-400/30";
            if (day.level === 3) bgClass = "bg-cyan-500/70 dark:bg-cyan-400/60";
            if (day.level === 4) bgClass = "bg-cyan-400 dark:bg-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.3)]";

            return (
              <motion.div
                key={day.id}
                onMouseEnter={() => setHoveredDay({ count: day.count, date: day.date })}
                onMouseLeave={() => setHoveredDay(null)}
                className={`w-3 h-3 rounded-[3px] transition-colors duration-150 cursor-pointer ${bgClass} hover:ring-1 hover:ring-cyan-300`}
                whileHover={{ scale: 1.2 }}
              />
            );
          })}
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-[10px] text-foreground/50 font-mono pt-1">
        <span>Less activity</span>
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-[2px] bg-slate-800/40 dark:bg-white/5" />
          <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-500/20 dark:bg-cyan-500/10" />
          <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-500/45 dark:bg-cyan-400/30" />
          <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-500/70 dark:bg-cyan-400/60" />
          <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-400" />
        </div>
        <span>More activity</span>
      </div>
    </div>
  );
}
