/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#f0f9f5",
          100: "#daf1e4",
          200: "#b7e3cd",
          300: "#88cdae",
          400: "#4faa84",
          500: "#359470",
          600: "#247759",
          700: "#1d5f49",
          800: "#194c3b",
          900: "#163e32",
          950: "#0b231c",
        },
      },
    },
  },
  plugins: [],
};
