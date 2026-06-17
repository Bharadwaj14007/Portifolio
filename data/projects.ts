export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  color: string; // The primary gradient accent for this project
}

export const projectsData: Project[] = [
  {
    id: "ai-study-assistant",
    title: "AI Study Assistant",
    description: "An intelligent learning companion leveraging LLMs to generate study notes, quiz users, summarize reading materials, and optimize retention schedules.",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "AI APIs"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: "leave-management",
    title: "Autonomous Leave Management System",
    description: "A smart employee self-service portal designed to automate leave requests, check resource availability, and handle routing approvals via custom logic trees.",
    tech: ["Next.js", "React", "Tailwind CSS", "Express.js", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "smart-sensor-dustbin",
    title: "Smart Sensor Dustbin (IoT)",
    description: "An IoT hardware integration project featuring auto-lid opening via ultrasonic sensors, live fill-level reporting, and cloud-synchronized alerts.",
    tech: ["C++", "Arduino Studio", "Node.js", "React", "WebSockets"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat Application",
    description: "A high-performance socket communication interface featuring direct messaging, group rooms, online status indicators, and typing states.",
    tech: ["React", "Express.js", "Socket.io", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "from-amber-400 to-orange-500",
  },
];
