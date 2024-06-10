import daisyui from "daisyui";
import daisyThemes from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6B21A8",
      },
    },
  },
  daisyui: {
    themes: [
      {
        default: {
          ...daisyThemes.light,
          primary: "#6B21A8",
        },
      },
    ],
  },
  plugins: [daisyui],
};
