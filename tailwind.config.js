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
    screens: {
      'xs': '0px',
      'mobile': '384px',
      'tablet': '600px',
      // => @media (min-width: 640px) { ... }

      'laptop': '768px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '992px',
      // => @media (min-width: 1280px) { ... }
      'xl': '1280px',

    },

  },
  plugins: [],
}
