'use client'; // Mark this hook as a Client Hook

import { useStore } from "../store";

export const useDarkMode = () => {
  const { darkMode, toggleDarkMode } = useStore();
  return { darkMode, toggleDarkMode };
};
