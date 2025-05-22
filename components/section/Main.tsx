import { AnimatedGridPattern } from "../magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { AuroraText } from "../magicui/aurora-text";

const Main = () => {
  return (
    <section className="relative container max-w-7xl bg-zinc-900 mx-auto mt-10 flex flex-col items-center justify-center bg-opacity-80 backdrop-blur-md shadow-lg rounded-lg border border-slate-400 font-main font-bold">
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

      <div className="w-full grid grid-cols-1 gap-4 px-5 md:px-10 lg:px-20">
        <div className="flex flex-col items-start justify-items-start pt-20 pb-10">
          <h1 className="text-2xl lg:text-5xl text-white font-bold">
            About Me
          </h1>
          <p className="text-sm md:text-lg text-gray-300 mt-4 max-w-2xl">
            I am a passionate software developer with a keen interest in web
            development and open-source projects. I love to explore new
            technologies and create innovative solutions.
            <br />
            <br />I have experience in various programming languages and
            frameworks, and I am always eager to learn more. In my free time, I
            enjoy contributing to open-source projects and collaborating with
            other developers.
          </p>
        </div>
        <div className="flex flex-col items-start justify-items-start pb-10">
          <h1 className="text-2xl lg:text-5xl text-white font-bold">
            My&nbsp;
            <AuroraText>Projects</AuroraText>
          </h1>
          <p className="text-sm md:text-lg text-gray-300 mt-4 max-w-2xl">
            I have worked on several projects, including web applications,
            mobile apps, and open-source contributions. Here are a few of my
            notable projects:
            <br />
            <br />
            - Project 1: A web application that helps users manage their tasks
            efficiently.
            <br />
            - Project 2: An open-source library for data visualization in
            JavaScript.
            <br />- Project 3: A mobile app that provides real-time weather
            updates.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Main;
