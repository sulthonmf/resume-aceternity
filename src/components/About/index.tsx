"use client";

import React, { ReactNode } from "react";
import { BentoGrid, BentoGridItem } from "../Common/grid/bento";
import {
  IconFileBroken,
  IconTableColumn,
  IconClock,
  IconCopy,
} from "@tabler/icons-react";
import dynamic from "next/dynamic";
import { globeConfig, sampleArcs } from "./GlobeMock";
import { AnimatedSubscribeButton } from "../Common/buttons";
import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import AtomicImage from "@/assets/atomic-pattern.png";

const World = dynamic(() => import("../Common/globe").then((m) => m.World), {
  ssr: false,
});

export function BentoGridSecondSection() {
  return (
    <div className="bg-black w-full">
      <BentoGrid className="auto-rows-[30rem] md:auto-rows-[30rem] md:p-6 mx-10 md:mx-40">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

interface Props {
  children?: ReactNode;
  className?: string;
}

const Skeleton = ({ children, className, ...props }: Props) => (
  <div
    {...props}
    className={`flex flex-1 top-48 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black ${className}`}
  >
    {children}
  </div>
);

async function writeToClipboard() {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText("sulthonmf@gmail.com");
      console.log("Text written to clipboard");
    } catch (err) {
      console.error("Failed to write text: ", err);
    }
  }
}

const items = [
  {
    title: "Flexible Time Zone",
    description: "I can work with different of time zone",
    header: (
      <Skeleton className="bg-black dark:bg-neutral-700 backdrop-blur-md">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </Skeleton>
    ),
    className: "md:col-span-1",
    icon: <IconClock className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Code Structure & Maintainability",
    description:
      "Follow the atomic design pattern to break down UI elements into reusable components.",
    header: <Image alt="image-atomic" src={AtomicImage} className="m-auto"/>,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Get Interest ?",
    description: (
      <AnimatedSubscribeButton
        onClick={() => writeToClipboard()}
        className="w-36 bg-black dark:bg-white mt-4 mx-auto"
      >
        <span className="group inline-flex items-center font-bold text-sm text-white dark:text-black">
          Contact Me
          <IconCopy className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
        <span className="group inline-flex items-center text-sm text-white dark:text-black">
          <CheckIcon className="mr-2 size-4" />
          Copied!
        </span>
      </AnimatedSubscribeButton>
    ),
    // header: <Skeleton />,
    className: "md:col-span-1 items-center justify-center text-center text-2xl md:text-4xl",
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  // {
  //   title: "The Power of Communication",
  //   description:
  //     "Understand the impact of effective communication in our lives.",
  //   header: <Skeleton />,
  //   className: "md:col-span-2",
  //   icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  // },
  // {
  //   title: "The Power of Communication",
  //   description:
  //     "Understand the impact of effective communication in our lives.",
  //   header: <Skeleton />,
  //   className: "md:col-span-1",
  //   icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  // },
];
