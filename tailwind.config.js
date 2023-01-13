/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  theme: {
    colors: {
      primary: "rgb(103,190,202)",
      basic: "#323232",
      red: "red",
      white: "white"
    },
    extend: {},
  },
  plugins: [],
}
