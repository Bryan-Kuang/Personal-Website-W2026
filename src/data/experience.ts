export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  type: "software" | "embedded" | "both";
  description: string;
  technologies: string[];
}

export const experience: Experience[] = [
  {
    id: 1,
    company: "Electrium Mobility (Student Design Team)",
    role: "Web Development Lead",
    duration: "Sep 2025 – Dec 2025",
    type: "software",
    description: "Led the web development subteam, coordinating delivery for internal platforms and Discord bots. Developed and maintained the team’s public website and merchandise storefront with full end-to-end ownership. Supported cloud deployment and mentored new members.",
    technologies: ["Web Development", "Team Leadership", "Cloud Deployment", "Mentorship"]
  },
  {
    id: 2,
    company: "ByteDance (TikTok International)",
    role: "Privacy Technical Review Engineer",
    duration: "Jan 2025 – Apr 2025",
    type: "both",
    description: "Conducted privacy-focused functional reproduction testing for new TikTok features. Analyzed network traffic (API requests, payloads) to assess data access and privacy risks. Authored technical review reports and developed Python automation scripts to improve testing efficiency.",
    technologies: ["Privacy Engineering", "Network Analysis", "Python", "Technical Reporting", "Compliance"]
  },
  {
    id: 3,
    company: "Xi’an Kuaike Network Information Partnership Technology",
    role: "Software Development Co-op",
    duration: "May 2024 – Aug 2024",
    type: "software",
    description: "Architected and executed a Next.js prototype with full-stack features, including authentication and API simulation. Developed 12 reusable components within a Vite-based monorepository, adopted by 2 other internal projects. Implemented cookie-based session management supporting 3 distinct user permission levels.",
    technologies: ["Next.js", "Vite", "Monorepo", "React", "Authentication"]
  }
];
