// File: data/mock-vscode-data.ts
// ข้อมูลเนื้อหาไฟล์สำหรับ VS Code Mockup

export const fileContents: Record<string, string> = {
  "about.md": `# About Me
## Supakorn Dongkew
Full-stack developer passionate about building beautiful and functional web applications

### Technical Skills
- Frontend: React, Next.js, TypeScript
- Backend: Node.js, Express
- Database: MongoDB, PostgreSQL
- Other: Git, Docker, CI/CD`,

  "projects.js": `// My Projects
const projects = [
  {
    name: "Portfolio Website",
    description: "Personal portfolio with interactive terminal and VS Code UI",
    technologies: ["Next.js", "React", "TailwindCSS"],
    link: "https://example.com"
  },
  {
    name: "E-commerce Platform",
    description: "Full-featured online store with payment integration",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://example.com/store"
  },
  {
    name: "Task Manager",
    description: "Collaborative task management application",
    technologies: ["React", "Express", "PostgreSQL", "Socket.io"],
    link: "https://example.com/tasks"
  }
];

export default projects;`,

  "contact.txt": `Email: supakorn@example.com
GitHub: github.com/supakornd
LinkedIn: linkedin.com/in/supakornd
Twitter: @supakornd
Location: Thailand`,

  "skills.json": `{
  "frontend": {
    "languages": ["JavaScript", "TypeScript", "HTML", "CSS"],
    "frameworks": ["React", "Next.js", "Vue.js"],
    "libraries": ["Redux", "TailwindCSS", "Styled Components"]
  },
  "backend": {
    "languages": ["Node.js", "Python"],
    "frameworks": ["Express", "NestJS", "FastAPI"],
    "databases": ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
  },
  "devops": {
    "tools": ["Git", "Docker", "GitHub Actions", "AWS", "Vercel"]
  }
}`
};

export const fileTree = [
  { type: "folder", name: "portfolio", level: 0 },
  { type: "file", name: "about.md", parent: "portfolio", level: 1 },
  { type: "file", name: "projects.js", parent: "portfolio", level: 1 },
  { type: "file", name: "contact.txt", parent: "portfolio", level: 1 },
  { type: "file", name: "skills.json", parent: "portfolio", level: 1 },
];
