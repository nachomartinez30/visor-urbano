import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#71CE68",
        dark: "#53AF4D",
        bluePrimary: "#4682FF",
        blueDark: "#1D4ABE",
      },
    },
  },
  plugins: [],
} satisfies Config;
