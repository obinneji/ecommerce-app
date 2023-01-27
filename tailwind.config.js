/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      blue: '#0071DC',
      white: '#FFFFFF',
      yellow: '#FFC220',
      black: '#2E2F32',
      red: '#FF0000'
    },
    fontFamily: {
      'poppins' : 'Poppins, sans-serif'
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    extend: {},
  },
  plugins: [],
}
