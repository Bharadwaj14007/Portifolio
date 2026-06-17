"use client";

import { useRef, useState } from "react";

interface MouseGlowProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // Optional custom radial gradient color
}

export default function MouseGlow({
  children,
  className = "",
  glowColor = "rgba(6, 182, 212, 0.12)", // Default cyan theme tint
}: MouseGlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          background: `radial-gradient(500px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 50%)`,
          opacity,
        }}
      />
      {children}
    </div>
  );
}
