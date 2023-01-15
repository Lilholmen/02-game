/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      "sans-main": ["Sofia Sans Extra Condensed", "sans-serif"],
      "sans-modal": ["Anek Malayalam", "sans-serif"],
    },
    extend: {
      width: {
        min: "1px",
      },
      borderRadius: {
        large: "64px",
      },
      transformOrigin: {
        "center-right": "center right",
      },
    },
  },
  plugins: [],
};
