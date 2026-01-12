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
    company: "Tech Solutions Inc.",
    role: "Senior Embedded Engineer",
    duration: "2023 - Present",
    type: "embedded",
    description: "Leading the firmware development for next-generation IoT devices. Optimized power consumption by 40% and implemented secure OTA updates.",
    technologies: ["C", "RTOS", "ARM Cortex-M", "Bluetooth LE"]
  },
  {
    id: 2,
    company: "Digital Innovations Corp",
    role: "Full Stack Developer",
    duration: "2021 - 2023",
    type: "software",
    description: "Developed and maintained scalable web applications. Reduced page load times by 50% through code splitting and asset optimization.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"]
  },
  {
    id: 3,
    company: "StartUp Hub",
    role: "Junior Developer",
    duration: "2020 - 2021",
    type: "both",
    description: "Collaborated on both hardware interface software and web dashboard development for industrial monitoring systems.",
    technologies: ["Python", "Django", "Raspberry Pi", "Linux"]
  }
];
