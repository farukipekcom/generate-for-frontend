import React from "react";
import { useTheme } from "next-themes";
import DarkMode from "./icons/darkMode";

export default function Toggle() {
  const { theme, setTheme } = useTheme();
  function toggleTheme(e: any) {
    setTheme(e.target.checked === true ? "dark" : "light");
  }
  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        value=""
        className="peer sr-only"
        onChange={(e) => toggleTheme(e)}
        checked={theme === "dark" ? true : false}
      />
      <div className="peerdark:bg-gray-700 after:border-gray-300 dark:border-gray-600 h-6 w-11 rounded-full bg-gray after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:bg-primary after:transition-all after:content-[''] peer-checked:bg-green peer-checked:after:translate-x-full peer-checked:after:border-primary peer-checked:after:bg-primary peer-focus:outline-none"></div>
      <span className="text-gray-900 dark:text-gray-300 ml-3 text-sm font-medium">
        <DarkMode />
      </span>
    </label>
  );
}
