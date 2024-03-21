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
        orange: {
          50: "#fdf5ef",
          100: "#fae7da",
          200: "#f4cdb4",
          300: "#edab84",
          400: "#e58257",
          500: "#de5e31",
          600: "#d04726",
          700: "#ac3622",
          800: "#8a2d22",
          900: "#6f271f",
          950: "#3c110e",
        },
      },
    },
  },
  plugins: [],
};
