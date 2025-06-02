"use client";

import { motion } from "motion/react";
import { AuroraText } from "../magicui/aurora-text";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      className="container max-w-7xl bg-zinc-900 mx-auto mt-10 p-8 bg-opacity-80 backdrop-blur-md shadow-lg rounded-2xl border border-slate-400 font-main font-bold"
      id="contact">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        viewport={{ amount: 0.5 }}>
        <h1 className="text-2xl lg:text-5xl text-white font-bold mb-5">
          <AuroraText colors={["#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"]}>
            Contact
          </AuroraText>
        </h1>
      </motion.div>
      <Terminal className="bg-white font-main w-full">
        <TypingAnimation>&gt; console.log(Contact) </TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>
            ✔ FOR-WORK EMAIL:{" "}
            <Link
              href="mailto:sup.dongkew@gmail.com"
              target="_blank"
              className="text-blue-500 hover:underline">
              sup.dongkew@gmail.com
            </Link>
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>
            ✔ GITHUB:{" "}
            <Link
              href="https://github.com/Sup-Film"
              target="_blank"
              className="text-blue-500 hover:underline">
              Sup-Film
            </Link>
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>
            ✔ TEL:{" "}
            <Link
              href="tel:+66943259994"
              target="_blank"
              className="text-blue-500 hover:underline">
              +66 94-325-9994
            </Link>
          </span>
        </AnimatedSpan>

        <TypingAnimation delay={3500} className="text-muted-foreground">
          Thank you for visiting my portfolio!
        </TypingAnimation>
        <TypingAnimation delay={4500} className="text-muted-foreground">
          If you have any questions or would like to collaborate,
        </TypingAnimation>
        <TypingAnimation delay={6500} className="text-muted-foreground">
          feel free to reach out.
        </TypingAnimation>
      </Terminal>
    </div>
  );
};
export default Contact;
