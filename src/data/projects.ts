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
    title: "Smart Home Automation System",
    category: "embedded",
    description: "IoT-based home automation system using ESP32 and MQTT protocol for real-time control of appliances.",
    technologies: ["C++", "ESP32", "MQTT", "React Native"],
    image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "software",
    description: "Full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    id: 3,
    title: "Autonomous Robot Controller",
    category: "embedded",
    description: "PID control system for a 4-wheel drive autonomous robot with obstacle avoidance.",
    technologies: ["Python", "Raspberry Pi", "ROS", "OpenCV"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com",
    featured: true
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "software",
    description: "Modern, responsive portfolio website built with React and Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  }
];
