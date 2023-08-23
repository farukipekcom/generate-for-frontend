import React from "react";
import { useTheme } from "next-themes";

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
      <div className="peerdark:bg-gray-700 peer-checked:bg-green bg-gray h-6 w-11 rounded-full after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-primary after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-primary peer-checked:after:bg-primary peer-focus:outline-none dark:border-gray-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.76968 4.87846e-08C6.73424 -1.74105e-05 6.69895 0.00465154 6.66468 0.0138904C4.56247 0.582828 2.73471 1.91251 1.52215 3.75507C0.309579 5.59762 -0.205048 7.8273 0.0742001 10.0285C0.353448 12.2296 1.40751 14.252 3.0399 15.7187C4.67229 17.1854 6.77159 17.9962 8.94648 18H8.9805C10.3111 17.9969 11.6242 17.6904 12.8238 17.103C14.0235 16.5156 15.0794 15.6621 15.9143 14.6048C15.9667 14.5388 15.9967 14.4573 15.9997 14.3725C16.0028 14.2876 15.9788 14.2041 15.9313 14.1344C15.8838 14.0647 15.8155 14.0126 15.7365 13.986C15.6575 13.9593 15.5722 13.9596 15.4934 13.9867C14.6744 14.2641 13.8169 14.4048 12.954 14.4034C8.60523 14.4034 5.00317 10.7929 4.92442 6.35685C4.88311 4.25044 5.64109 2.20923 7.03996 0.659795C7.0886 0.603865 7.12076 0.53505 7.13275 0.461278C7.14473 0.387506 7.13605 0.31178 7.1077 0.242824C7.07935 0.173868 7.03249 0.114489 6.97252 0.0715275C6.91254 0.0285663 6.84189 0.00377148 6.76871 4.87846e-08H6.76968Z"
            className="dark:fill-green fill-gray"
          />
        </svg>
      </span>
    </label>
  );
}
