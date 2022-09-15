/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F26A21"
      },
      fontFamily: {
        montserrat: ['montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
};
