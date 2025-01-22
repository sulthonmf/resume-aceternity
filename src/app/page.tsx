import { BackgroundBeams } from "@/components/ui/background/beams";
import { FlipWords } from "@/components/ui/text/flip-text";
import { TypewriterEffect } from "@/components/ui/text/typewritter";

export default function Home() {
  const techStringData = [
    "React JS",
    "React Native",
    "Next JS",
    "Contentful",
    "Supabase",
    "Strapi",
    "Firebase",
  ];

  const heroText = [
    {
      text: "dev.sulthon",
    },
  ];

  return (
    <div className="h-screen w-screen rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="flex justify-around gap-10 mb-10">
        <p className="font-extrabold text-base">Project</p>
        <p className="font-extrabold text-base">Contact</p>
        <p className="font-extrabold text-base">About</p>
      </div>
      <TypewriterEffect
        words={heroText}
        className="text-4xl md:text-6xl lg:text-8xl text-white font-bold inter-var text-left"
      />
      <div className="flex px-5">
        <p className="relative z-10 text-base md:text-lg mt-4 mb-2 text-white dark:text-black font-bold inter-var text-left bg-black dark:bg-white mr-2 rounded px-2 ring-2 ring-cyan-500">
          Software Engineer
        </p>
        <p className="relative z-10 text-base md:text-lg mt-4 text-white font-normal inter-var text-left">
          that you are looking for.
        </p>
      </div>
      <div className="flex justify-center relative z-10 text-base md:text-lg mx-auto font-normal text-black dark:text-white sm:text-center text-center md:text-left lg:text-left px-5">
        <p className="relative">By leveraging</p>
        <FlipWords
          words={techStringData}
          className="flex-1 relative z-10 text-white dark:text-black font-bold text-base md:text-lg bg-black dark:bg-white ml-2 mr-2 rounded ring-2 ring-cyan-500"
        />
        <p className="relative">
          I can create web and mobile apps that you need.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
