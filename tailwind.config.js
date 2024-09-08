/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a15103",
      },
      fontFamily:{
        raleWay: ["Raleway", "sans-serif"],
        lato: ["Lato", "sans-serif"]
      }
    },
  },
  plugins: [],
};
