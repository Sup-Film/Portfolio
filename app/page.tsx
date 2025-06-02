"use client";

import Footer from "@/components/footer/footer";
import Contact from "@/components/section/Contact";
import Hero from "@/components/section/Hero";
import Main from "@/components/section/Main";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const scrollTarget = localStorage.getItem("scrollTarget");
    localStorage.removeItem("scrollTarget");
    if (scrollTarget) {
      const targetElement = document.querySelector(scrollTarget);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, []);

  return (
    <div className="h-full flex-col items-center justify-center w-full ">
      <div className="h-full pt-24 sm:pt-28 md:pt-36 lg:pt-38 px-4 pb-20">
        <Hero />
        <Main />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
