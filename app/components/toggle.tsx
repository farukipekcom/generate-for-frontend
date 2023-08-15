import React from "react";
import Image from "next/image";
import {useTheme} from "next-themes";

export default function Toggle() {
  const {theme, setTheme} = useTheme();
  function toggleTheme(e: any) {
    setTheme(e.target.checked === true ? "dark" : "light");
  }
  return (
    <div className="h-20 border-b border-solid border-border flex items-center justify-end pl-6 pr-6">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={(e) => toggleTheme(e)}
          checked={theme === "dark" ? true : false}
        />
        <div className="w-11 h-6 bg-gray-500 peer-focus:outline-none  rounded-full peerdark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white peer-checked:after:bg-primary after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          <Image src="/dark-mode.svg" height={18} width={18} alt="Toggle" className="mx-auto" />
        </span>
      </label>
    </div>
  );
}
