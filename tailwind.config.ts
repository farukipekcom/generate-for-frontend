import type {Config} from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1A1A20",
        secondary: "#F7D47C",
        border: "#373A3D",
        headerLight: "#F9FAFB",
        borderLight: "#EAECF0",
        grayLight: "#687083",
      },
    },
  },
  plugins: [],
};
export default config;
