# Projects Card Redesign & Repo Expansion Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove image from project cards, replace with gradient header, and expand project list from 6 to 12 entries using real GitHub repos.

**Architecture:** Two-file change — `projects.ts` gets a new data shape (no `image` field, 12 entries) and `Projects.tsx` gets a redesigned card with gradient header instead of image area. No new components needed.

**Tech Stack:** React, TypeScript, Tailwind CSS, Framer Motion, lucide-react

---

### Task 1: Update `projects.ts` data

**Files:**
- Modify: `src/data/projects.ts`

**Step 1: Replace the file contents**

Replace entire `src/data/projects.ts` with:

```typescript
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
```

**Step 2: Verify TypeScript compiles**

```bash
cd /Users/bryan/.claude-worktrees/Personal-Website-W2026/amazing-wiles
npm run check
```

Expected: no errors

**Step 3: Commit**

```bash
git add src/data/projects.ts
git commit -m "feat: expand projects data to 12 entries, remove image field"
```

---

### Task 2: Redesign `Projects.tsx` — gradient header card

**Files:**
- Modify: `src/components/sections/Projects.tsx`

**Step 1: Replace the file contents**

Replace entire `src/components/sections/Projects.tsx` with:

```tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import { Card } from '../ui/Card';
import { Github, ExternalLink, Code2, Cpu } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'software' | 'embedded'>('all');

  const filteredProjects = projects.filter(
    project => filter === 'all' || project.category === filter
  );

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-8" />

          <div className="flex justify-center gap-4 flex-wrap">
            {(['all', 'software', 'embedded'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col">
                  {/* Gradient Header */}
                  <div className={`relative h-32 flex items-center px-6 ${
                    project.category === 'software'
                      ? 'bg-gradient-to-br from-blue-500 to-indigo-600'
                      : 'bg-gradient-to-br from-green-500 to-emerald-600'
                  }`}>
                    {project.category === 'software'
                      ? <Code2 size={48} className="text-white/30" />
                      : <Cpu size={48} className="text-white/30" />
                    }
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white uppercase tracking-wide">
                      {project.category}
                    </div>
                    {project.contributor && (
                      <div className="absolute bottom-3 left-4 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs font-medium text-white">
                        Frontend Contributor
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <div className="flex-grow relative h-[4.5em] mb-4">
                      <p className="text-gray-600 text-sm absolute inset-0 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                        >
                          <Github size={16} /> Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
```

**Step 2: Verify TypeScript compiles**

```bash
npm run check
```

Expected: no errors

**Step 3: Start dev server and visually verify**

```bash
npm run dev
```

Check:
- Cards show gradient header (blue for software, green for embedded)
- Category icon visible at 30% opacity
- "Frontend Contributor" badge appears on Cereblex and OneShot
- Filter buttons work correctly (all 12 projects load, filter counts: software=9, embedded=3)
- No console errors

**Step 4: Commit**

```bash
git add src/components/sections/Projects.tsx
git commit -m "feat: redesign project cards with gradient header, remove image dependency"
```
