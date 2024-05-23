"use client";

import { Spotlight } from "./ui/Spotlight";
import { useTheme } from "next-themes";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  const { setTheme } = useTheme();

  return (
    <section className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vh]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vh]" fill="blue" />
      </div>

      <div className="absolute left-0 top-0 flex h-screen  w-full items-center justify-center bg-white bg-grid-black/[0.3] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Dynamic Web Magic with Next.js
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming concepts into seamless User Experiences"
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Hi, I&apos;m B-man, a Next.js Developer based in New York.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          {/* Toggle Theme if need be */}
          <div className="mt-5 flex gap-8 dark:hidden">
            <button
              className="text-white-100"
              onClick={() => setTheme("light")}
            >
              light
            </button>
            <button className="text-white-100" onClick={() => setTheme("dark")}>
              dark
            </button>
            <button
              className="text-white-100"
              onClick={() => setTheme("system")}
            >
              sysytem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
