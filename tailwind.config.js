/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        didact_gothic: ["Didact Gothic", "sans-serif"],
      },
      backgroundColor: {
        primary: "#0b0c0f",
      },
    },
  },
  plugins: [],
};
