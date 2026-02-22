export interface Project {
  id: number;
  title: string;
  category: "software" | "embedded";
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  contributor?: boolean; // true if you were a contributor, not the main author
}

export const projects: Project[] = [
  {
    id: 1,
    title: "LuminaLink",
    category: "software",
    description: "AI-powered tool that identifies movies from video using computer vision and automatically generates subtitles. Planned future support for text-to-speech to help visually impaired users enjoy films.",
    technologies: ["Python", "Computer Vision", "AI", "TTS"],
    github: "https://github.com/Bryan-Kuang/LuminaLink",
    featured: true
  },
  {
    id: 2,
    title: "AiSchedule",
    category: "software",
    description: "AI-driven calendar web app that generates structured schedules from natural language goals and priorities. Users describe their week and the AI produces an actionable, time-blocked plan.",
    technologies: ["TypeScript", "React", "AI", "Calendar API"],
    github: "https://github.com/Bryan-Kuang/AiSchedule",
    featured: true
  },
  {
    id: 3,
    title: "PlanForge – AI-driven Project Planning",
    category: "software",
    description: "Cross-platform desktop application that converts user goals into structured, trackable project plans using GPT. Designed a clear data model with Prisma to persist projects locally in SQLite, enabling a fully offline-first experience. Implemented Kanban and Gantt views with drag-and-drop interactions.",
    technologies: ["Electron 28", "React 18", "TypeScript", "SQLite", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/Bryan-Kuang/PlanForge",
    featured: true
  },
  {
    id: 4,
    title: "FM-Hachimi – Discord Music Bot",
    category: "software",
    description: "Feature-rich Discord music bot supporting URL playback and keyword search. Users can queue songs, control playback, and stream audio directly in voice channels.",
    technologies: ["JavaScript", "Discord.js", "YouTube API", "Node.js"],
    github: "https://github.com/Bryan-Kuang/FM-Hachimi",
    featured: true
  },
  {
    id: 5,
    title: "Resume-Job-Comparer",
    category: "software",
    description: "ML-powered tool that analyzes the semantic match between a resume and a job posting. Uses NLP techniques to score compatibility and highlight skill gaps, helping job seekers optimize their applications.",
    technologies: ["Python", "ML", "NLP", "scikit-learn"],
    github: "https://github.com/Bryan-Kuang/Resume-Job-Comparer",
    featured: true
  },
  {
    id: 6,
    title: "RelicHub – E-commerce Admin Platform",
    category: "software",
    description: "Full-stack admin dashboard for managing products with performance and localization support. Built a production-ready admin dashboard that allows authenticated users to manage product listings, supporting real-world workflows such as browsing, filtering, and editing records. Enabled English and Chinese localization across pages using next-intl.",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Prisma", "PostgreSQL", "NextAuth.js"],
    github: "https://github.com/Bryan-Kuang",
    featured: true
  },
  {
    id: 7,
    title: "Advanced C System Programming",
    category: "software",
    description: "Developed Linux-based concurrent systems using POSIX APIs. Designed a multi-threaded image processor using pthreads and shared memory, achieving a 3.2× performance speedup. Built a process-based TSP solver using fork/exec and pipe-based IPC.",
    technologies: ["C", "POSIX API", "Pthreads", "IPC", "GDB", "Valgrind"],
    featured: true
  },
  {
    id: 8,
    title: "Cereblex",
    category: "software",
    description: "AI-powered learning platform that analyzes course materials and generates personalized study aids for students. Contributed frontend development, building interactive review and comprehension features.",
    technologies: ["React", "TypeScript", "AI"],
    github: "https://github.com/Bryan-Kuang/Cereblex",
    featured: true,
    contributor: true
  },
  {
    id: 9,
    title: "OneShot – AI Video Editor",
    category: "software",
    description: "Web-based video editing platform that uses AI to generate image and video assets on demand. Contributed frontend development, building the asset generation interface and timeline editor.",
    technologies: ["JavaScript", "React", "AI", "Video Editing"],
    github: "https://github.com/Bryan-Kuang/OneShot",
    featured: true,
    contributor: true
  },
  {
    id: 10,
    title: "ECE298A-sky130 MAC Module",
    category: "embedded",
    description: "Designed, verified, and taped out a Multiply-Accumulate (MAC) digital hardware module using an open-source ASIC toolchain. Implemented Verilog RTL, executed full ASIC flow including synthesis and place-and-route with OpenLane on the Sky130 PDK, and automated verification through CI pipelines.",
    technologies: ["Verilog", "OpenLane", "Sky130", "ASIC Design", "CI/CD"],
    github: "https://github.com/Bryan-Kuang/ECE298A-sky130",
    featured: true
  },
  {
    id: 11,
    title: "Autonomous Sumo Robot – RoboWars 2025",
    category: "embedded",
    description: "Designed and built a competitive autonomous robot. Led mechanical chassis design in Fusion 360 and programmed autonomous behaviors in C/C++, including edge detection, opponent tracking, and push strategies. Integrated IR sensors, ultrasonic sensors, and an IMU for real-time obstacle detection.",
    technologies: ["C/C++", "Arduino", "Fusion 360", "Sensors", "IMU"],
    github: "https://github.com/Bryan-Kuang",
    featured: true
  },
  {
    id: 12,
    title: "STM32 Microcontroller Projects",
    category: "embedded",
    description: "Developed embedded systems demonstrating proficiency in STM32 microcontrollers. Built a UART/DMA-based LED controller using FreeRTOS task scheduling. Created an I2C-based environmental sensor dashboard and a PWM-controlled smart box with OLED interface.",
    technologies: ["STM32", "C", "FreeRTOS", "UART/DMA", "I2C", "OLED"],
    github: "https://github.com/Bryan-Kuang",
    featured: true
  }
];
