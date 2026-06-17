export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
  level: number; // Percentage proficiency
  icon: string; // Icon identifier
}

export const skillsData: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: 92, icon: "React" },
  { name: "Next.js", category: "frontend", level: 90, icon: "Nextjs" },
  { name: "Tailwind CSS", category: "frontend", level: 95, icon: "Tailwind" },
  { name: "TypeScript", category: "frontend", level: 88, icon: "Typescript" },
  { name: "JavaScript", category: "frontend", level: 93, icon: "Javascript" },
  
  // Backend
  { name: "Node.js", category: "backend", level: 85, icon: "Nodejs" },
  { name: "Express.js", category: "backend", level: 87, icon: "Express" },
  
  // Database
  { name: "MongoDB", category: "database", level: 82, icon: "Mongodb" },
  { name: "PostgreSQL", category: "database", level: 80, icon: "Postgresql" },
  
  // Tools
  { name: "Git", category: "tools", level: 90, icon: "Git" },
  { name: "GitHub", category: "tools", level: 92, icon: "Github" },
  { name: "VS Code", category: "tools", level: 94, icon: "Vscode" },
  { name: "Postman", category: "tools", level: 85, icon: "Postman" }
];
