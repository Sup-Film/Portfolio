"use client";

import React, { useState, useEffect, useMemo } from "react";
import { fileContents, fileTree } from "@/data/mock-vscode-data";

// Component imports
import { TypingAnimation } from "../magicui/typing-animation";
import { BoxReveal } from "@/components/magicui/box-reveal";
import VSCodeMockup from "../MockUpVscode";
import { SparklesText } from "../magicui/sparkles-text";

const Hero = () => {
  // VSCode mockup state
  const [currentFile, setCurrentFile] = useState<string>(
    Object.keys(fileContents)[0] || ""
  );

  const [text, setText] = useState("");
  const [key, setKey] = useState(0);
  // ใช้ useMemo เพื่อรับประกันว่า textOptions จะไม่ถูกสร้างใหม่ในทุกการ render
  const textOptions = useMemo(
    () => [
      "$ Welcome to my portfolio",
      "$ My name is Supakorn Dongkew",
      "$ I am a software engineer",
      "$ I love coding and design",
    ],
    []
  );

  // Effect for cycling through different texts
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // When animation completes, change text and force re-render
      const nextIndex = (textOptions.indexOf(text) + 1) % textOptions.length;
      setText(textOptions[nextIndex]);
      setKey((prevKey) => prevKey + 1);
    }, text.length * 200 + 1000); // Duration based on text length plus pause

    return () => clearTimeout(timeoutId);
  }, [text, textOptions]);

  return (
    <section className="container max-w-7xl mx-auto flex flex-col items-center justify-center bg-opacity-80 font-main font-bold">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full p-4 md:p-6 lg:px-8 lg:py-10">
        {/* Left Content */}
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
          <div className="h-14 md:h-16 lg:h-20">
            <div className="bg-zinc-800 rounded-lg p-2 md:p-3 inline-block backdrop-blur-sm  ">
              <TypingAnimation
                key={key}
                duration={200}
                className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl">
                {text}
              </TypingAnimation>
            </div>
          </div>

          {/* TextBox */}
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6 lg:mt-8 font-extrabold">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <SparklesText className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                Supakorn Dongkew
              </SparklesText>
            </BoxReveal>
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <div className="space-y-1 md:space-y-2 lg:space-y-3">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  I build things for the web.
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  I am a software engineer.
                </p>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  I love coding and design.
                </p>
              </div>
            </BoxReveal>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full h-[55dvh] md:h-[45dvh] lg:h-[50dvh] xl:h-[70dvh] overflow-hidden">
            <VSCodeMockup
              initialFileContents={fileContents}
              fileTree={fileTree}
              initialFile={currentFile}
              editorTitle="Portfolio Files"
              onFileSelect={setCurrentFile}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
