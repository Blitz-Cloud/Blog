/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Alkatra: ["Alkatra", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#001B2E",
        secondary: "#294C60",
        reading: "#FFFD3",
        accent: "ADB6C4",
      },
    },
  },
  plugins: [],
};
