"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "text">("default");
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for the outer ring lag
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device supports hover states (desktop/mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsMobile(!mediaQuery.matches);
    
    if (!mediaQuery.matches) return;

    // Enable custom cursor styles
    document.documentElement.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isPointer = 
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest("button") || 
        target.closest("a") || 
        target.closest("[data-cursor='pointer']");

      const isText = 
        target.tagName === "INPUT" || 
        target.tagName === "TEXTAREA" || 
        target.closest("input") || 
        target.closest("textarea") ||
        target.closest("[data-cursor='text']");

      if (isPointer) {
        setCursorType("pointer");
        setHovered(true);
      } else if (isText) {
        setCursorType("text");
        setHovered(true);
      } else {
        setCursorType("default");
        setHovered(false);
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isMobile) return null;
  if (!isVisible) return null;

  let ringSize = 24;
  let dotSize = 8;

  if (hovered) {
    if (cursorType === "pointer") {
      ringSize = 48;
      dotSize = 0; // Hide inner dot when expanding over buttons
    } else if (cursorType === "text") {
      ringSize = 10;
      dotSize = 2;
    }
  }

  if (clicked) {
    ringSize = Math.max(8, ringSize * 0.7);
  }

  return (
    <>
      {/* Outer lagging ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 border mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          width: ringSize,
          height: ringSize,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: "var(--cursor-ring)",
          backgroundColor: cursorType === "pointer" ? "var(--cursor-ring)" : "transparent",
        }}
        animate={{
          scale: clicked ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 bg-cyan-400 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          width: dotSize,
          height: dotSize,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "var(--cursor-dot)",
        }}
      />
    </>
  );
}
