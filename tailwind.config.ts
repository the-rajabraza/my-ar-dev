import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Enables dark mode using a class
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
        border: "var(--border-color)",
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out forwards', // Adds a fade-in-up animation as a string
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' }, // String values for TypeScript compatibility
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
