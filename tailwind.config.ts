import type { Config } from "tailwindcss";
import tw_forms from "@tailwindcss/forms";

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
        NegroBase: "#161617",
        BlancoBase: "#FFFFFF",
        GrisClaro: "#F6FAFA",
        VerdeBase: "#4DA847",
        VerdeBaseClaro: "#6ABF4D",
        VerdeTextos: "#65C65D",
        /* VerdeFondosIconos: "#BCE2AF", */
        VerdeFondosIconos: "#1E6537",
        AzulBase: "#2151C6",
      },
    },
    fontFamily: {
      GRegular: "Geologica",
      GBold: "Geologica-Bold",
      GLight: "Geologica-Light",
    },
  },
  plugins: [tw_forms],
} satisfies Config;
