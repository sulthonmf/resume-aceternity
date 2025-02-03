"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "../Common/grid/bento";
import { IconFileBroken, IconClock, IconCopy } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import { AnimatedSubscribeButton } from "../Common/buttons";
import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import AtomicImage from "@/assets/atomic-pattern.png";
import { Globe } from "../Common/globeV2";
import { useStore } from "@/store";
import { COBEOptions } from "cobe";

const initialGlobeConfig: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function BentoGridSecondSection() {
  const { darkMode } = useStore();
  const [globeConfig, setGlobeConfig] = useState(initialGlobeConfig); // Use state

  useEffect(() => {
    setGlobeConfig({
      // Update state whenever darkMode changes
      ...initialGlobeConfig, // Spread the initial config
      dark: darkMode ? 0 : 2,
    });
  }, [darkMode]);

  const items = [
    {
      title: "Flexible Time Zone",
      description: "I can work with different of time zone",
      header: (
        <Skeleton className="bg-black dark:bg-neutral-700 backdrop-blur-md">
          <Globe className="top-28" config={globeConfig} />
        </Skeleton>
      ),
      className: "md:col-span-1",
      icon: <IconClock className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Code Structure & Maintainability",
      description:
        "Follow the atomic design pattern to break down UI elements into reusable components.",
      header: <Image alt="image-atomic" src={AtomicImage} className="m-auto" />,
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
      className:
        "md:col-span-1 items-center justify-center text-center text-2xl md:text-4xl",
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

  return (
    <div className="parent-element bg-white dark:bg-black w-full">
      <BentoGrid className="auto-rows-[30rem] md:auto-rows-[30rem] md:p-6 mx-10 md:mx-40">
        {items?.map((item, i) => (
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
