/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      "sans-serif": ["Sofia Sans Extra Condensed", "sans-serif"],
    },
    extend: {
      width: {
        min: "1px",
      },
      borderRadius: {
        large: "64px",
      },
    },
  },
  plugins: [],
};
