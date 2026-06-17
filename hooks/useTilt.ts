import { useState, useRef, MouseEvent } from "react";

export function useTilt(maxTilt = 12) {
  const ref = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
  });
  const [glowStyle, setGlowStyle] = useState({
    left: "0px",
    top: "0px",
    opacity: 0,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position inside element
    const y = e.clientY - rect.top;  // Y position inside element

    const width = rect.width;
    const height = rect.height;

    // Normalise mouse position relative to center of element: -0.5 to 0.5
    const normX = (x / width) - 0.5;
    const normY = (y / height) - 0.5;

    // Rotate about X and Y axes
    const rotateX = -normY * maxTilt;
    const rotateY = normX * maxTilt;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
    });

    setGlowStyle({
      left: `${x}px`,
      top: `${y}px`,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
    });

    setGlowStyle((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };

  return { ref, tiltStyle, glowStyle, handleMouseMove, handleMouseLeave };
}
