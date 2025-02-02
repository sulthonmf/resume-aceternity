"use client"; // Mark as a Client Component

import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useStore } from "../../store";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useStore();
  const [activeLink, setActiveLink] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSetActive = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="fixed top-0 w-full px-6 py-4 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">_dev.smf</div>

        <div className="md:hidden">
          <button
            onClick={toggleDarkMode}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </button>
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="hidden md:flex space-x-4 md:-ml-10 border px-2 py-2 rounded-full">
          <a
            href="#about"
            onClick={() => handleSetActive("about")}
            className={`px-3 py-1 rounded-full font-bold ${
              activeLink === "about"
                ? "bg-black dark:bg-white text-white dark:text-black"
                : ""
            }`}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => handleSetActive("projects")}
            className={`px-3 py-1 rounded-full font-bold ${
              activeLink === "projects"
                ? "bg-black dark:bg-white text-white dark:text-black"
                : ""
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => handleSetActive("contact")}
            className={`px-3 py-1 rounded-full font-bold ${
              activeLink === "contact"
                ? "bg-black dark:bg-white text-white dark:text-black"
                : ""
            }`}
          >
            Contact
          </a>
        </div>

        <button
          onClick={toggleDarkMode}
          className="hidden md:inline p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? (
            <MoonIcon className="h-6 w-6" />
          ) : (
            <SunIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black border shadow-md rounded-md mt-2 p-4 space-y-4">
          <a
            href="#about"
            onClick={() => handleSetActive("about")}
            className={`block px-4 py-2 rounded-md font-bold ${
              activeLink === "about"
                ? "bg-black dark:bg-white text-white dark:text-black"
                : ""
            }`}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => handleSetActive("projects")}
            className={`block px-4 py-2 rounded-md font-bold ${
              activeLink === "projects"
                ? "bg-black dark:bg-white text-white dark:text-black"
                : ""
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => handleSetActive("contact")}
            className={`block px-4 py-2 rounded-md font-bold ${
              activeLink === "contact"
                ? "bg-black dark:bg-white text-white dark:text-black"
                : ""
            }`}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
