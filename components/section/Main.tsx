"use client";
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
  WrenchIcon,
} from "lucide-react"; // ไอคอนสำหรับแต่ละหมวดหมู่ทักษะ
import {
  motion,
} from "motion/react";

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

const Main = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section className="relative container max-w-7xl bg-zinc-900 mx-auto mt-10 flex flex-col items-center justify-center bg-opacity-80 backdrop-blur-md shadow-lg rounded-2xl border border-slate-400 font-main font-bold" id="about">
      {/* BackGround GridPattern */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.2}
        duration={2}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-0 h-[100%] skew-y-12"
        )}
      />

      {/* Content */}
      <div className="w-full grid grid-cols-3 gap-4 px-5 md:px-10 lg:px-20">
        {/* Section: About Me */}
        <div className="col-span-3 flex flex-col items-start justify-items-start pt-20 pb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            viewport={{ amount: 0.5 }}>
            <h1 className="text-2xl lg:text-5xl text-white font-bold mb-5">
              <AuroraText colors={["#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"]}>
                About Me
              </AuroraText>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true, amount: "all" }}>
            <div className="relative p-12 rounded-lg bg-zinc-800/70 shadow-lg">
              <ShineBorder
                shineColor={["#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"]}
              />
              <p className="text-sm md:text-lg text-white mt-4 max-w-2xl">
                Hi, I’m Supakorn — a Computer Engineering graduate from Dhurakij
                Pundit University with a passion for software development and
                programming. I enjoy exploring cutting-edge technologies and
                continuously refining my coding skills to evolve as a developer.
                I love working on innovative projects where I can contribute
                technical expertise and creative ideas, and I’m always excited
                to collaborate with others to build impactful solutions.
              </p>
            </div>
          </motion.div>
        </div>
        {/* End Section: About Me */}

        {/* Cloud Icons */}
        <div className="col-span-3 md:col-span-1 flex flex-col items-start justify-items-start pb-10">
          <div className="relative flex items-center justify-items-center size-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}>
              <IconCloud images={images} />
            </motion.div>
          </div>
        </div>

        {/* Section: Skills Section */}
        <div className="col-span-3 md:col-span-2 flex flex-col items-start justify-items-start pb-10" id="skills">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            viewport={{ amount: "all" }}>
            <h1 className="text-2xl lg:text-5xl text-white font-bold mb-5">
              <AuroraText colors={["#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"]}>
                Skills
              </AuroraText>
            </h1>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Programming */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative p-6 bg-zinc-800/80 shadow-lg">
              <div className="rounded-lg">
                <ShineBorder
                  shineColor={["#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"]}
                />{" "}
                <h3 className="text-xl text-purple-400 font-bold mb-3 flex items-center gap-2">
                  <CodeIcon className="h-5 w-5" /> Programming
                </h3>
                <ul className="list-disc pl-5 text-white space-y-1">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>C#</li>
                  <li>Go</li>
                  <li>Ruby</li>
                </ul>
              </div>
            </motion.div>
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative p-6 bg-zinc-800/80 shadow-lg">
              <div className="rounded-lg">
                <ShineBorder
                  shineColor={["#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"]}
                />
                <h3 className="text-xl text-blue-400 font-bold mb-3 flex items-center gap-2">
                  <MonitorIcon className="h-5 w-5" /> Frontend
                </h3>
                <ul className="list-disc pl-5 text-white space-y-1">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Bootstrap 5</li>
                  <li>Tailwind</li>
                  <li>Flutter</li>
                </ul>
              </div>
            </motion.div>
            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative p-6 bg-zinc-800/80 shadow-lg">
              <div className="rounded-lg">
                <ShineBorder
                  shineColor={["#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"]}
                />
                <h3 className="text-xl text-green-400 font-bold mb-3 flex items-center gap-2">
                  <ServerIcon className="h-5 w-5" /> Backend
                </h3>
                <ul className="list-disc pl-5 text-white space-y-1">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Ruby on Rails</li>
                  <li>PHP</li>
                  <li>Laravel</li>
                </ul>
              </div>
            </motion.div>
            {/* Database */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative p-6 bg-zinc-800/80 shadow-lg">
              <div className="rounded-lg">
                <ShineBorder
                  shineColor={["#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"]}
                />{" "}
                <h3 className="text-xl text-yellow-400 font-bold mb-3 flex items-center gap-2">
                  <DatabaseIcon className="h-5 w-5" /> Database
                </h3>
                <ul className="list-disc pl-5 text-white space-y-1">
                  <li>SQL</li>
                  <li>MongoDB</li>
                  <li>SQL Server</li>
                  <li>PostgreSQL</li>
                  <li>Firebase</li>
                  <li>Prisma</li>
                </ul>
              </div>
            </motion.div>

            {/* Other */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative p-6 bg-zinc-800/80 shadow-lg">
              <div className="rounded-lg">
                <ShineBorder
                  shineColor={["#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"]}
                />
                <h3 className="text-xl text-pink-400 font-bold mb-3 flex items-center gap-2">
                  <WrenchIcon className="h-5 w-5" /> Others
                </h3>
                <ul className="list-disc pl-5 text-white space-y-1">
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>GitLab</li>
                  <li>Docker</li>
                  <li>Figma</li>
                  <li>Solidity</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
        {/* End Section: Skills */}
      </div>
    </section>
  );
};
export default Main;
