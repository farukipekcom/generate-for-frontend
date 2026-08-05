import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  important: true,
  theme: {
    extend: {
      height: {
        calc: "calc(100vh - 244px)",
      },
      borderRadius: {
        normal: "16px",
        small: "6px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#131313",
        secondary: "#2A2A2A",
        green: "#BFFD52",
        white: "#FFFFFF",
        gray: "#B9B9B9",
        green_light: "#DBF9A7",
        gray_dark: "#364052",
        dark_input_bg: "#222222",
        dark_input_border: "#7F7E7E",
        input_border: "#D1D5DC",
        input_bg: "#FFFFFF",
        border: "#373A3D",
        headerLight: "#F9FAFB",
        borderLight: "#EAECF0",
        grayLight: "#687083",
        inputDarkBorder: "#777777",
        inputBorder: "#D1D5DC",
      },
    },
  },
};
export default config;
