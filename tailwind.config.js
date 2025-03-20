/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: "#2E2E2E", // Primary color
        accent: "#FF3366", // Accent color
        background: "#EDEDED",
        complementary1: "#3A3A4E", // Complementary color 1
        complementary2: "#FF8A5B", // Complementary color 2
        complementary3: "#1E1E28", // Complementary color 3
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--foreground)",
            a: {
              color: "var(--foreground)",
              "&:hover": {
                color: "var(--foreground)",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
