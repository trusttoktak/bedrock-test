/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1200px",
      },
      boxShadow: {
        custom:
          "0 -2px 17px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      colors: {
        gray: {
          200: "#CDCDCD",
        },
      },
    },
  },
  plugins: [],
};
