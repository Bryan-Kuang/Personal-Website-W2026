export interface Project {
  id: number;
  title: string;
  category: "software" | "embedded";
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "RelicHub – E-commerce Admin Platform",
    category: "software",
    description: "Full-stack admin dashboard for managing products with performance and localization support. Built a production-ready admin dashboard that allows authenticated users to manage product listings, supporting real-world workflows such as browsing, filtering, and editing records. Enabled English and Chinese localization across pages using next-intl.",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Prisma", "PostgreSQL", "NextAuth.js"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "PlanForge – AI-driven Project Planning",
    category: "software",
    description: "Cross-platform desktop application that converts user goals into structured, trackable project plans using GPT. Designed a clear data model with Prisma to persist projects locally in SQLite, enabling a fully offline-first experience. Implemented Kanban and Gantt views with drag-and-drop interactions.",
    technologies: ["Electron 28", "React 18", "TypeScript", "SQLite", "OpenAI API", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "Autonomous Sumo Robot – RoboWars 2025",
    category: "embedded",
    description: "Designed and built a competitive autonomous robot. Led mechanical chassis design in Fusion 360 and programmed autonomous behaviors in C/C++, including edge detection, opponent tracking, and push strategies. Integrated IR sensors, ultrasonic sensors, and an IMU for real-time obstacle detection.",
    technologies: ["C/C++", "Arduino", "Fusion 360", "Sensors", "IMU"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com",
    featured: true
  },
  {
    id: 4,
    title: "Advanced C System Programming",
    category: "software",
    description: "Developed Linux-based concurrent systems using POSIX APIs. Designed a multi-threaded image processor using pthreads and shared memory, achieving a 3.2× performance speedup. Built a process-based TSP solver using fork/exec and pipe-based IPC.",
    technologies: ["C", "POSIX API", "Pthreads", "IPC", "GDB", "Valgrind"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com",
    featured: true
  },
  {
    id: 5,
    title: "STM32 Microcontroller Projects",
    category: "embedded",
    description: "Developed embedded systems demonstrating proficiency in STM32 microcontrollers. Built a UART/DMA-based LED controller using FreeRTOS task scheduling. Created an I2C-based environmental sensor dashboard and a PWM-controlled smart box with OLED interface.",
    technologies: ["STM32", "C", "FreeRTOS", "UART/DMA", "I2C", "OLED"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com",
    featured: true
  },
  {
    id: 6,
    title: "ASIC Design Project (SKY130)",
    category: "embedded",
    description: "Designed, verified, and taped out a digital hardware module using an open-source ASIC toolchain. Implemented custom Verilog RTL design, executed complete ASIC flow including synthesis, place-and-route using OpenLane, and automated verification through CI pipelines.",
    technologies: ["Verilog", "OpenLane", "Sky130", "ASIC Design", "CI/CD"],
    image: "https://images.unsplash.com/photo-1555664424-778a69022365?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com",
    featured: true
  }
];
