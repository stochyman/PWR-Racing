/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Dodane tutaj
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: 'rgb(203, 31, 58)',
        customRedTransparent: 'rgba(203, 31, 58, 0.2)'
      },
      fontSize: {
        '6xl': '6rem',
      },
    },
  },
  plugins: [],
};
