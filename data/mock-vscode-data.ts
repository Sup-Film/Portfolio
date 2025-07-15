// File: data/mock-vscode-data.ts
// ข้อมูลเนื้อหาไฟล์สำหรับ VS Code Mockup

export const fileContents: Record<string, string> = {
  "about.md": `# About Me
## Supakorn Dongkew
As a Computer Engineering graduate from Dhurakij Pundit University, I am a highly motivated software developer deeply committed to continuous skill enhancement and the exploration of cutting-edge technologies. Driven by a strong passion for learning and professional growth, I am eager to contribute technical expertise and innovative ideas to build impactful and scalable solutions through collaborative efforts.

### Technical Skills
- Programming Languages: Go (Golang), JavaScript, Node.js, Ruby
- Front-End Frameworks: React.js, Next.js, HTML, CSS
- Back-End Frameworks: Fiber (Go), Express.js (Node.js), Ruby on Rails (Ruby)
- Databases: MongoDB, PostgreSQL, MySQL, Microsoft SQL Server
- Tools & Technologies: Git, GitHub, Docker, Postman, RESTful APIs, Webhooks, Facebook Graph API, AI Chatbot Development, Prompt Engineering`,

  "skills.json": `# Skills

### Programming Languages
Go (Golang), JavaScript, Node.js, Ruby

### Frontend
React.js, Next.js, HTML, CSS, Tailwind CSS, Bootstrap 5

### Backend
Fiber (Go), Express.js (Node.js), Ruby on Rails (Ruby)

### Database
MongoDB, PostgreSQL, MySQL, Microsoft SQL Server

### Tools & Technologies
Git, GitHub, Docker, Postman, RESTful APIs, Webhooks, Facebook Graph API, AI Chatbot Development, Prompt Engineering`,

  "contact.txt": `Email: sup.dongkew@gmail.com
GitHub: https://github.com/Sup-Film
Location: Nonthaburi 11000 Thailand`,
};

export const fileTree = [
  { type: "folder", name: "portfolio", level: 0 },
  { type: "file", name: "about.md", parent: "portfolio", level: 1 },
  { type: "file", name: "skills.json", parent: "portfolio", level: 1 },
  { type: "file", name: "contact.txt", parent: "portfolio", level: 1 },
];
