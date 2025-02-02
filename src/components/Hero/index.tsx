"use client"; // Mark as a Client Component

import { motion } from "framer-motion";
import { RetroGrid } from "../Common/background/retro";
import ProfileDataJSON from "./hero.json";
import { useEffect, useState } from "react";
import ContactIcons from "./ContactSection";

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
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl bg-black">
      <div className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white"
        >
          <h1 className="text-6xl font-bold">
            {profileData?.data?.profile?.name}
          </h1>
          <p className="text-2xl mt-4 font-light">{profileData?.data?.profile?.desc}</p>
          <ContactIcons contacts={profileData?.data?.contact} />
        </motion.div>
      </div>

      <RetroGrid />
    </div>
  );
}
