/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "rgb(110,160,203)",
      basic: "#323232",
      red: "red",
      white: "white"
    },
    extend: {},
  },
  plugins: [],
}
