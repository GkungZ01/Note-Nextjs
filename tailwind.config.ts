import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#ffffff",
          text: "#202124",
          border: "#e0e0e0",
          hover: "#cbd5e1",
        },
        // Dark mode
        dark: {
          background: "#202124",
          text: "#e8eaed",
          border: "#5f6368",
          hover: "#3c4043",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
