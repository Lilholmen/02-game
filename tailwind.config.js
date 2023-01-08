/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Anek Latin", "sans-serif"],
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
