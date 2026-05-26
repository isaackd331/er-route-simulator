"use client";

import { useTheme } from "next-themes";

import SunIcon from "@/public/icons/lightMode.svg";
import MoonIcon from "@/public/icons/darkMode.svg";

const ToggleDarkBtn = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() =>
        resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
      }
    >
      <div className="relative w-8 h-8">
        <SunIcon className="hidden dark:block" fill="true" />
        <MoonIcon className="blcok dark:hidden" fill="true" />
      </div>
    </button>
  );
};

export default ToggleDarkBtn;
