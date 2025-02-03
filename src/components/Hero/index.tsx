"use client"; // Mark as a Client Component

import { motion } from "framer-motion";
import { RetroGrid } from "../Common/background/retro";
import ProfileDataJSON from "./hero.json";
import { useEffect, useState } from "react";
import ContactIcons from "./ContactSection";
import { PulsatingButton } from "../Common/buttons";

interface Profile {
  name: string;
  desc: string;
}

interface Contact {
  name: string;
  detail: string;
}

interface Data {
  profile: Profile;
  contact: Contact[];
}

interface RootObject {
  data?: Data;
}

export default function Hero() {
  const [profileData, setProfileData] = useState<RootObject>();

  useEffect(() => {
    setProfileData(ProfileDataJSON);
  }, [profileData]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background bg-white dark:bg-black">
      <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white"
        >
          <h1 className="text-6xl font-bold text-black dark:text-white">
            {profileData?.data?.profile?.name}
          </h1>
          <p className="text-2xl mt-4 font-light text-black dark:text-white">
            {profileData?.data?.profile?.desc}
          </p>
          <ContactIcons contacts={profileData?.data?.contact} />
        </motion.div>
      </div>

      <RetroGrid />

      <PulsatingButton
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1xC-LJC_hJlFXsmcnzaoaGjZ_DlY47F1u/view?usp=drive_link"
          )
        }
        className="mt-10 bg-black dark:bg-white text-white dark:text-black font-bold"
        pulseColor="grey"
      >
        Download CV
      </PulsatingButton>
    </div>
  );
}
