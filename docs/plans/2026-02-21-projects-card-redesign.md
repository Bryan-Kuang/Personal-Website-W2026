# Projects Card Redesign & GitHub Repo Expansion

**Date:** 2026-02-21
**Status:** Approved

## Summary

Redesign the Projects section cards to remove image dependencies and replace them with a gradient header. Expand the project list from 6 to 12 entries using all GitHub repositories created after 2024.

## Card Redesign (Method A)

Replace the `h-48` image area with a fixed-height (`h-32`) gradient header containing:
- A large category icon (lucide-react) on the left
- Category badge in the top-right corner (existing style)
- Color scheme by category:
  - **software**: `from-blue-500 to-indigo-600` + `<Code2>` icon
  - **embedded**: `from-green-500 to-emerald-600` + `<Cpu>` icon

Remove from `Projects.tsx`:
- `imageErrors` state
- `handleImageError` function
- `PLACEHOLDER_IMAGE` constant

Remove from `projects.ts`:
- `image` field on the `Project` interface and all entries

## Project List (12 total)

### Software Projects

| Title | Technologies | GitHub |
|-------|-------------|--------|
| LuminaLink | Python, Computer Vision, AI, TTS | Bryan-Kuang/LuminaLink |
| AiSchedule | TypeScript, React, AI, Calendar API | Bryan-Kuang/AiSchedule |
| PlanForge – AI-driven Project Planning | Electron 28, React 18, TypeScript, SQLite, OpenAI API, Tailwind CSS | Bryan-Kuang/PlanForge |
| FM-Hachimi Discord Music Bot | JavaScript, Discord.js, YouTube API | Bryan-Kuang/FM-Hachimi |
| Resume-Job-Comparer | Python, ML, NLP, scikit-learn | Bryan-Kuang/Resume-Job-Comparer |
| RelicHub – E-commerce Admin Platform | Next.js 15, React 19, TypeScript, Prisma, PostgreSQL, NextAuth.js | Bryan-Kuang/Bryan-Kuang (existing) |
| Advanced C System Programming | C, POSIX API, Pthreads, IPC, GDB, Valgrind | no GitHub |
| Cereblex (Frontend Contributor) | React, TypeScript, AI | Bryan-Kuang/Cereblex |
| OneShot (Frontend Contributor) | JavaScript, React, AI, Video Editing | Bryan-Kuang/OneShot |

### Embedded Projects

| Title | Technologies | GitHub |
|-------|-------------|--------|
| ECE298A-sky130 MAC Module | Verilog, OpenLane, Sky130, ASIC Design, CI/CD | Bryan-Kuang/ECE298A-sky130 |
| Autonomous Sumo Robot – RoboWars 2025 | C/C++, Arduino, Fusion 360, Sensors, IMU | Bryan-Kuang (existing) |
| STM32 Microcontroller Projects | STM32, C, FreeRTOS, UART/DMA, I2C, OLED | Bryan-Kuang (existing) |

## Files to Modify

1. `src/data/projects.ts` — replace all 6 entries with 12, remove `image` field
2. `src/components/sections/Projects.tsx` — remove image state/handlers, update card rendering
3. `src/components/ui/Card.tsx` — no changes needed (gradient header goes in Projects.tsx)
