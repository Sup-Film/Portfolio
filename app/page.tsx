import Hero from "@/components/section/Hero";
import Main from "@/components/section/Main";

export default function Home() {
  return (
    <div className="h-full flex-col items-center justify-center w-full pb-20">
      <div className="h-full pt-24 sm:pt-28 md:pt-36 lg:pt-38 pb-8 px-4">
        <Hero />
        <Main />
      </div>
    </div>
  );
}
