export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  date: string;
  description: string[];
  type: "work" | "education" | "achievement" | "volunteer";
}

export const experienceData: ExperienceItem[] = [
  {
    id: "github-club",
    role: "Core Committee Member",
    organization: "GitHub Student Club",
    date: "2024 - Present",
    description: [
      "Organized university hackathons and open-source bootcamps reaching 200+ developers.",
      "Conducted workshops on Git, GitHub workflows, and modern web application development.",
      "Mentored junior developers entering the club, advising them on project building and open source contributions."
    ],
    type: "work"
  },
  {
    id: "hackathons",
    role: "Active Participant & Winner",
    organization: "State & National Level Hackathons",
    date: "2023 - Present",
    description: [
      "Won 1st Place at TechStorm Hackathon for building an autonomous crisis management utility.",
      "Collaborated in rapid 24-hour and 48-hour sprints to design, prototype, and present working full-stack applications.",
      "Developed deep hands-on expertise in rapid prototyping, system architecture designs, and public pitches."
    ],
    type: "achievement"
  },
  {
    id: "nss-volunteer",
    role: "National Service Scheme (NSS) Volunteer",
    organization: "Government Social Service Body",
    date: "2022 - 2024",
    description: [
      "Led digital literacy campaigns in rural sectors, educating 50+ residents on basic web navigation.",
      "Organized blood donation camps and environmental cleanliness drives across municipal regions.",
      "Developed strong leadership, public speaking, and community-coordination competencies."
    ],
    type: "volunteer"
  },
  {
    id: "certifications",
    role: "Certified Developer",
    organization: "AWS, freeCodeCamp, Coursera",
    date: "2022 - 2023",
    description: [
      "Completed AWS Cloud Practitioner certification, mapping out secure multi-tier hosting architectures.",
      "Certified in FreeCodeCamp Responsive Web Design & Advanced JavaScript Algorithms.",
      "Earned specialized certifications in Advanced Data Structures, Algorithms, and System Design concepts."
    ],
    type: "achievement"
  }
];
