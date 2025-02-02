"use client";

import React from "react";
import { OrbitingCircles } from "../Common/orbital";
import {
  SiContentful,
  SiFirebase,
  SiLaravel,
  SiNextdotjs,
  SiReact,
  SiStrapi,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row bg-black w-full justify-around items-center p-4"
    >
      <div className="max-w-[600px] w-full text-center md:text-left mb-4 md:mb-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white"
        >
          <span className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            By leveraging{" "}
            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center font-bold leading-none tracking-tighter text-transparent">
              Modern Technology
            </span>{" "}
            and{" "}
            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-lime-400 to-cyan-500 bg-clip-text text-center font-bold leading-none tracking-tighter text-transparent">
              Framework
            </span>
            , I can create any beautiful Website and Mobile app.
          </span>
        </motion.div>
      </div>
      <div className="relative flex h-[600px] md:h-[500px] w-full md:w-auto flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-5xl sm:text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
          Tech Stack
        </span>

        <OrbitingCircles iconSize={40}>
          <SiReact size={60} className="sm:size-70 md:size-80" />
          <SiTailwindcss size={60} className="sm:size-70 md:size-80" />
          <SiLaravel size={60} className="sm:size-70 md:size-80" />
          <SiFirebase size={60} className="sm:size-70 md:size-80" />
          <SiVercel size={60} className="sm:size-70 md:size-80" />
        </OrbitingCircles>
        <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
          <SiNextdotjs size={50} className="sm:size-60 md:size-75" />
          <SiContentful size={55} className="sm:size-65 md:size-75" />
          <SiStrapi size={50} className="sm:size-60 md:size-70" />
          <SiSupabase size={40} className="sm:size-50 md:size-60" />
        </OrbitingCircles>
      </div>
    </div>
  );
};

export default TechStack;
