"use client"; // Mark as a Client Component

import { WobbleCard } from "../Common/card/woble";
import { Safari } from "../Common/device/Safari";
import { Iphone15Pro } from "../Common/device/Iphone";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  subtitle: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    subtitle: "A cool project",
    image: "/images/project1.jpg",
  },
  {
    title: "Project 2",
    subtitle: "Another cool project",
    image: "/images/project2.jpg",
  },
];

export default function Projects() {
  const [imageUrlMobile, setImageUrlMobile] = useState("");
  const [imageUrlWeb, setImageUrlWeb] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchImage() {
      // Fetch your image URL here (e.g., from an API)
      try {
        setImageUrlMobile(
          "https://drive.google.com/uc?export=view&id=1j2ZnH8-oSRRvSno2FcFssFFLhQhYOB1Y"
        );
        setImageUrlWeb(
          "https://drive.google.com/uc?export=view&id=1QayVh0z3dvr9oheU8Arc3p09d2embqsV"
        );
      } catch (error) {
        console.error("Error fetching image URL:", error);
        // Handle error, maybe set a default image URL
      } finally {
        setIsLoading(false);
      }
    }

    fetchImage();
  }, []);

  return (
    <section
      id="projects"
      className="parent-element py-16 bg-white dark:bg-black"
    >
      <div className="container mx-auto flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-center my-10 pb-[100px] text-black dark:text-white">
          Projects Example
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl self-center w-screen h-[500px]">
          <WobbleCard
            containerClassName="relative col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Avis Budget Group
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                A mobile app that crafted with React Native Framework
              </p>
            </div>
            {/* <Iphone15Pro
              className="absolute -right-4 lg:-right-[30%] grayscale filter top-10 object-contain rounded-2xl size-full"
              src={imageUrlMobile}
            /> */}
            <Image
              alt={imageUrlMobile}
              src={imageUrlMobile}
              width={1720}
              height={980}
              className="absolute -right-4 lg:-right-[30%] grayscale filter top-10 object-contain rounded-2xl size-full"
            />
          </WobbleCard>
          <WobbleCard containerClassName="relative col-span-2 min-h-[300px]">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              BALLY
            </h2>
            <p className="mt-4 max-w-[16rem] text-left  text-base/6 text-neutral-200">
              E-Commerce, Company Profile, Career Page, Crafted with Next JS,
              Tailwind, Contentful
            </p>
            {/* <Safari
              url="www.bally.com/en/"
              className="absolute -right-4 lg:-right-[50%] grayscale filter -bottom-10 object-contain rounded-2xl size-full"
              imageSrc={imageUrlWeb}
              width={1892}
              height={943}
            /> */}
            <Image
              alt={imageUrlWeb}
              src={imageUrlWeb}
              width={1720}
              height={980}
              className="absolute -right-4 lg:-right-[50%] grayscale filter -bottom-10 object-contain rounded-2xl size-full"
            />
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}
