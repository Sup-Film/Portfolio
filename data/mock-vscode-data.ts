// File: data/mock-vscode-data.ts
// ข้อมูลเนื้อหาไฟล์สำหรับ VS Code Mockup

export const fileContents: Record<string, string> = {
  "about.md": `# About Me
## Supakorn Dongkew
Hi, I’m Supakorn — a Computer Engineering graduate from Dhurakij Pundit University with a passion for software development and programming.
I enjoy exploring cutting-edge technologies and continuously refining my coding skills to evolve as a developer.
I love working on innovative projects where I can contribute technical expertise and creative ideas, and I’m always excited to collaborate with others to build impactful solutions.

### Technical Skills
- Frontend: HTML, CSS, JavaScript, TypeScript, React, Next.js, Bootstrap 5, Tailwind, Flutter
- Backend: Node.js, Express.js, Ruby on Rails, PHP, Laravel, Go, Python, Ruby, C#, Java
- Database: SQL, MongoDB, SQL Server, PostgreSQL, Firebase, Prisma
- Other: Solidity, Git, GitHub, GitLab, Docker, Figma`,
  "projects.js": `# My Projects

## Senior Project - WebApplication Flashcard

**Description:**  
A web application for creating and managing flashcards for studying. It allows users to create, edit, and delete flashcards, as well as organize them into decks. The application also includes a quiz feature that tests users on their knowledge of the flashcards. The webapp uses algorithms to randomize the order of flashcards and provide a spaced repetition learning experience.

**Technologies:**  
- HTML, CSS, JavaScript
- Node.js, Express.js
- MongoDB

export default projects;`,

  "contact.txt": `Email: sup.dongkew@gmail.com
GitHub: https://github.com/Sup-Film
Location: Thailand`,
  "skills.json": `# Skills

### Frontend
HTML, CSS, JavaScript, React, Next.js, Bootstrap 5, Tailwind, Flutter

### Backend
Node.js, Express.js, Ruby on Rails, PHP, Laravel, Go, Python, Ruby, C#, Java

### Database
SQL, MongoDB, SQL Server, PostgreSQL, Firebase, Prisma

### Other
TypeScript, Solidity, Git, GitHub, GitLab, Docker, Figma`
};

export const fileTree = [
  { type: "folder", name: "portfolio", level: 0 },
  { type: "file", name: "about.md", parent: "portfolio", level: 1 },
  { type: "file", name: "projects.js", parent: "portfolio", level: 1 },
  { type: "file", name: "contact.txt", parent: "portfolio", level: 1 },
  { type: "file", name: "skills.json", parent: "portfolio", level: 1 },
];
