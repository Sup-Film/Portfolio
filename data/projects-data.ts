// ข้อมูลเนื้อหาโปรเจกต์

export type Project = {
  id: string;
  title: string ;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string; // ทำให้เป็น optional ด้วย ? เพื่อให้ไม่จำเป็นต้องมีทุกโปรเจกต์
  category: "Frontend" | "Backend" | "Full Stack" | "Mobile" | "Other";
  featured: boolean;
  date: string;
};

export const projectsData: Project[] = [
  {
    id: "flashcard-app",
    title: "WebApplication Flashcard",
    description: "A web application for creating and managing flashcards for studying. Includes features for creating, editing, and organizing cards into decks with a quiz feature that incorporates spaced repetition algorithms.",
    technologies: ["react", "nodedotjs", "express", "mongodb"],
    imageUrl: "/projects/flashcard-app.png",
    githubUrl: "https://github.com/Sup-Film/flashcard-app", // เปลี่ยนเป็น URL จริงของคุณ
    demoUrl: "https://flashcard-app.example.com", // เปลี่ยนเป็น URL จริงถ้ามี หรือลบออกถ้าไม่มี
    category: "Full Stack", // ประเภทของโปรเจกต์
    featured: true, // โปรเจกต์เด่น
    date: "2023" // ปีที่ทำโปรเจกต์
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "My personal portfolio website built with Next.js and Tailwind CSS, featuring interactive UI elements and animations.My personal portfolio website built with Next.js and Tailwind CSS, featuring interactive UI elements and animations.My personal portfolio website built with Next.js and Tailwind CSS, featuring interactive UI elements and animations.My personal portfolio website built with Next.js and Tailwind CSS, featuring interactive UI elements and animations.My personal portfolio website built with Next.js and Tailwind CSS, featuring interactive UI elements and animations.",
    technologies: ["nextdotjs", "react", "tailwindcss"],
    imageUrl: "/projects/portfolio.png",
    githubUrl: "https://github.com/Sup-Film/portfolio",
    demoUrl: "https://portfolio-c5hc.onrender.com/",
    category: "Frontend",
    featured: true,
    date: "2024"
  }
]