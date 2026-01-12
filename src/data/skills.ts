export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillsData {
  software: Skill[];
  embedded: Skill[];
}

export const skills: SkillsData = {
  software: [
    { name: "React / TypeScript", level: 90 },
    { name: "Node.js / Express", level: 85 },
    { name: "Python", level: 90 },
    { name: "AWS / Cloud", level: 75 },
    { name: "Docker / CI/CD", level: 80 },
    { name: "PostgreSQL", level: 85 }
  ],
  embedded: [
    { name: "C / C++", level: 95 },
    { name: "RTOS", level: 85 },
    { name: "ARM Cortex", level: 80 },
    { name: "PCB Design", level: 70 },
    { name: "I2C / SPI / UART", level: 90 },
    { name: "Linux Kernel", level: 65 }
  ]
};
