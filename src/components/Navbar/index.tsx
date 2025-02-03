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
  const [iconColor, setIconColor] = useState("black");

  useEffect(() => {
    const root = window?.document?.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      setIconColor("white");
    } else {
      root.classList.remove("dark");
      setIconColor("black");
    }
  }, [darkMode]);

  const handleSetActive = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu after clicking
  };

  const linkStyles = (isActive: boolean) => `
    px-3 py-1 rounded-full font-bold 
    transition-colors duration-300 ease-in-out
    hover:bg-black hover:dark:bg-white 
    hover:text-white hover:dark:text-black
    text-black dark:text-white
    ${isActive ? "bg-black dark:bg-white text-white dark:text-black" : ""}
  `;

  return (
    <nav className="fixed top-0 w-full px-6 py-4 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold text-black dark:text-white">
          _dev.smf
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleDarkMode}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <MoonIcon className="h-6 w-6" color={iconColor}/>
            ) : (
              <SunIcon className="h-6 w-6" color={iconColor}/>
            )}
          </button>
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" color={iconColor}/>
            ) : (
              <Bars3Icon className="h-6 w-6" color={iconColor}/>
            )}
          </button>
        </div>

        <div className="hidden md:flex space-x-4 md:-ml-10 border border-black dark:border-white px-2 py-2 rounded-full">
          <a
            href="#about"
            onClick={() => handleSetActive("about")}
            className={linkStyles(activeLink === "about")}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => handleSetActive("projects")}
            className={linkStyles(activeLink === "projects")}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => handleSetActive("contact")}
            className={linkStyles(activeLink === "contact")}
          >
            Contact
          </a>
        </div>

        <button
          onClick={toggleDarkMode}
          className="hidden md:inline p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? (
            <MoonIcon className="h-6 w-6" color={iconColor} />
          ) : (
            <SunIcon className="h-6 w-6" color={iconColor} />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border border-black dark:border-white shadow-md rounded-md mt-2 p-4 space-y-4">
          <a
            href="#about"
            onClick={() => handleSetActive("about")}
            className={`block px-4 py-2 rounded-md font-bold text-black dark:text-white ${
              activeLink === "about" ? "bg-black dark:bg-white" : ""
            }`}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => handleSetActive("projects")}
            className={`block px-4 py-2 rounded-md font-bold text-black dark:text-white ${
              activeLink === "projects" ? "bg-black dark:bg-white" : ""
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => handleSetActive("contact")}
            className={`block px-4 py-2 rounded-md font-bold text-black dark:text-white ${
              activeLink === "contact" ? "bg-black dark:bg-white" : ""
            }`}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
