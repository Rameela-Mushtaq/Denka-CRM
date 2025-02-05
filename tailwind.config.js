/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope"]
      },

      colors: {
        primary: '#212121',
        secondary: '#A3A3A3',
        border: '#D3CFCF',
        other: '#777777',
        btnBg: '#8979FF',
      }
    },
  },
  plugins: [],
}