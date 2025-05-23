'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatedGridPattern } from "../magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { AuroraText } from "../magicui/aurora-text";
import { ShineBorder } from "../magicui/shine-border";
import { IconCloud } from "../magicui/icon-cloud";
import { 
  CodeIcon, 
  MonitorIcon, 
  ServerIcon, 
  DatabaseIcon,
  WrenchIcon
} from "lucide-react"; // Importing icons for each skill category

// slugs ที่สอดคล้องกับทักษะทั้งหมด
const slugs = [
  // Frontend
  "html5",
  "css3",
  "javascript",
  "react",
  "nextdotjs",
  "bootstrap",
  "tailwindcss",
  "flutter",
  // Backend
  "nodedotjs",
  "express",
  "rubyonrails",
  "php",
  "laravel",
  "go",
  "python",
  "ruby",
  "csharp",
  "java",
  // Database
  "mysql", // สำหรับ SQL
  "mongodb",
  "microsoftsqlserver",
  "postgresql",
  "firebase",
  "prisma",
  // Other
  "typescript",
  "solidity",
  "git",
  "github",
  "gitlab",
  "docker",
  "figma",
];

// Custom mouse cursor effect component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);
  
  return (
    <div 
      className="fixed pointer-events-none w-6 h-6 rounded-full border-2 border-blue-400 -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference"
      style={{ left: position.x, top: position.y }}
    />
  );
};

// Skill component with progress bar
const SkillItem = ({ name, level, color }) => (
  <li className="flex flex-col space-y-1">
    <div className="flex justify-between items-center">
      <span>{name}</span>
      <span className="text-xs opacity-70">{level}%</span>
    </div>
    <div className="w-full bg-zinc-700 h-1.5 rounded-full overflow-hidden">
      <div 
        className="h-full rounded-full" 
        style={{ width: `${level}%`, backgroundColor: color }}
      />
    </div>
  </li>
);

const MainEnhanced = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative container max-w-7xl bg-gradient-to-br from-zinc-900 to-zinc-950 mx-auto mt-10 flex flex-col items-center justify-center backdrop-blur-md shadow-lg rounded-lg border border-slate-700/50 font-main font-bold overflow-hidden">
      {/* Custom cursor effect */}
      <CustomCursor />
      
      {/* Background noise texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj4KICA8ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPgogICAgPGZlQmxlbmQgbW9kZT0ic29mdC1saWdodCIvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')]"></div>

      {/* BackGround GridPattern with Parallax Effect */}
      <div className="relative w-full h-full">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.2}
          duration={2}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-0 h-[100%] skew-y-12",
            "pointer-events-none"
          )}
        />
      </div>

      {/* Content */}
      <div className="relative w-full grid grid-cols-3 gap-6 px-5 md:px-10 lg:px-20">
        {/* Section: About Me */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="col-span-3 flex flex-col items-start justify-items-start pt-20 pb-10"
        >
          <h1 className="text-2xl lg:text-5xl text-white font-black tracking-tight leading-tight mb-5">
            <AuroraText colors={["#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"]}>
              About Me
            </AuroraText>
          </h1>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative p-12 rounded-lg bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-sm border border-zinc-700/30 shadow-lg"
          >
            <ShineBorder
              shineColor={["#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"]}
            />
            <p className="text-sm md:text-lg text-white mt-4 max-w-2xl leading-relaxed">
              Hi, I'm <span className="font-semibold text-blue-300">Supakorn</span> — a Computer Engineering graduate from Dhurakij
              Pundit University with a passion for software development and
              programming. I enjoy exploring cutting-edge technologies and
              continuously refining my coding skills to evolve as a developer.
              <br /><br />
              I love working on innovative projects where I can contribute technical expertise 
              and creative ideas, and I'm always excited to collaborate with others to build 
              impactful solutions.
            </p>
          </motion.div>
        </motion.div>
        {/* End Section: About Me */}

        {/* Cloud Icons with Scroll Parallax */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="col-span-3 md:col-span-1 flex flex-col items-start justify-items-start pb-10"
        >
          <div className="sticky top-24 relative flex items-center justify-items-center size-full">
            <IconCloud 
              images={images} 
            />
          </div>
        </motion.div>

        {/* Section: Skills Section */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="col-span-3 md:col-span-2 flex flex-col items-start justify-items-start pb-10"
        >
          <h1 className="text-2xl lg:text-5xl text-white font-black tracking-tight leading-tight mb-5">
            <AuroraText colors={["#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"]}>
              Skills
            </AuroraText>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-min gap-4">
            {/* Programming Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
              }}
              className="relative p-6 rounded-lg bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-sm border border-zinc-700/30 shadow-lg transition-all duration-300"
            >
              <ShineBorder
                shineColor={["#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"]}
              />
              <h3 className="text-xl text-purple-400 font-bold mb-4 flex items-center gap-2">
                <CodeIcon className="h-5 w-5" /> Programming
              </h3>
              <ul className="space-y-3 text-white">
                <SkillItem name="JavaScript" level={90} color="#c4b5fd" />
                <SkillItem name="TypeScript" level={85} color="#c4b5fd" />
                <SkillItem name="Python" level={80} color="#c4b5fd" />
                <SkillItem name="Java" level={75} color="#c4b5fd" />
                <SkillItem name="C#" level={70} color="#c4b5fd" />
                <SkillItem name="Go" level={65} color="#c4b5fd" />
                <SkillItem name="Ruby" level={60} color="#c4b5fd" />
              </ul>
            </motion.div>

            {/* Frontend Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
              }}
              className="relative p-6 rounded-lg bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-sm border border-zinc-700/30 shadow-lg transition-all duration-300"
            >
              <ShineBorder
                shineColor={["#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"]}
              />
              <h3 className="text-xl text-blue-400 font-bold mb-4 flex items-center gap-2">
                <MonitorIcon className="h-5 w-5" /> Frontend
              </h3>
              <ul className="space-y-3 text-white">
                <SkillItem name="HTML" level={95} color="#93c5fd" />
                <SkillItem name="CSS" level={90} color="#93c5fd" />
                <SkillItem name="React" level={90} color="#93c5fd" />
                <SkillItem name="Next.js" level={85} color="#93c5fd" />
                <SkillItem name="Bootstrap 5" level={80} color="#93c5fd" />
                <SkillItem name="Tailwind" level={90} color="#93c5fd" />
                <SkillItem name="Flutter" level={75} color="#93c5fd" />
              </ul>
            </motion.div>

            {/* Backend Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
              }}
              className="relative p-6 rounded-lg bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-sm border border-zinc-700/30 shadow-lg transition-all duration-300"
            >
              <ShineBorder
                shineColor={["#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"]}
              />
              <h3 className="text-xl text-green-400 font-bold mb-4 flex items-center gap-2">
                <ServerIcon className="h-5 w-5" /> Backend
              </h3>
              <ul className="space-y-3 text-white">
                <SkillItem name="Node.js" level={90} color="#86efac" />
                <SkillItem name="Express.js" level={85} color="#86efac" />
                <SkillItem name="Ruby on Rails" level={70} color="#86efac" />
                <SkillItem name="PHP" level={75} color="#86efac" />
                <SkillItem name="Laravel" level={80} color="#86efac" />
              </ul>
            </motion.div>

            {/* Database Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
              }}
              className="relative p-6 rounded-lg bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-sm border border-zinc-700/30 shadow-lg transition-all duration-300"
            >
              <ShineBorder
                shineColor={["#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"]}
              />
              <h3 className="text-xl text-yellow-400 font-bold mb-4 flex items-center gap-2">
                <DatabaseIcon className="h-5 w-5" /> Database
              </h3>
              <ul className="space-y-3 text-white">
                <SkillItem name="SQL" level={85} color="#fde68a" />
                <SkillItem name="MongoDB" level={80} color="#fde68a" />
                <SkillItem name="SQL Server" level={75} color="#fde68a" />
                <SkillItem name="PostgreSQL" level={85} color="#fde68a" />
                <SkillItem name="Firebase" level={90} color="#fde68a" />
                <SkillItem name="Prisma" level={80} color="#fde68a" />
              </ul>
            </motion.div>

            {/* Other Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" 
              }}
              className="relative p-6 rounded-lg bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-sm border border-zinc-700/30 shadow-lg transition-all duration-300"
            >
              <ShineBorder
                shineColor={["#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"]}
              />              <h3 className="text-xl text-pink-400 font-bold mb-4 flex items-center gap-2">
                <WrenchIcon className="h-5 w-5" /> Others
              </h3>
              <ul className="space-y-3 text-white">
                <SkillItem name="Git" level={90} color="#fbcfe8" />
                <SkillItem name="GitHub" level={90} color="#fbcfe8" />
                <SkillItem name="GitLab" level={80} color="#fbcfe8" />
                <SkillItem name="Docker" level={75} color="#fbcfe8" />
                <SkillItem name="Figma" level={85} color="#fbcfe8" />
                <SkillItem name="Solidity" level={60} color="#fbcfe8" />
              </ul>
            </motion.div>
          </div>
        </motion.div>
        {/* End Section: Skills */}
      </div>
    </section>
  );
};

export default MainEnhanced;
