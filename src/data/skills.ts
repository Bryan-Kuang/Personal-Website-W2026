export interface Skill {
  name: string;
}

export interface SkillsData {
  software: Skill[];
  embedded: Skill[];
}

export const skills: SkillsData = {
  software: [
    { name: "React" },
    { name: "TypeScript" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "Python" },
    { name: "PostgreSQL" },
    { name: "Prisma" },
    { name: "Docker" },
    { name: "AWS" },
    { name: "CI/CD" },
    { name: "Electron" },
    { name: "Tailwind CSS" }
  ],
  embedded: [
    { name: "C" },
    { name: "C++" },
    { name: "RTOS (FreeRTOS)" },
    { name: "ARM Cortex-M" },
    { name: "STM32" },
    { name: "Linux System Programming" },
    { name: "Verilog" },
    { name: "ASIC Design" },
    { name: "PCB Design" },
    { name: "I2C / SPI / UART" },
    { name: "POSIX API" },
    { name: "GDB / Valgrind" }
  ]
};
