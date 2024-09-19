/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      'bgcolorLight':'#EAEAEA',
      'bgcolorDark':'#1B1B1E',
      'fontColorLight': '#1B1B1E',
      'fontColorDark': '#EAEAEA',  
      'gray':colors.gray,
      'white':colors.white

    },
    fontFamily:{
      'sans': ['"Source Sans 3"'],
      'serif':['"Playfair Display"'],
      'navbar':'Quicksand'
    },
    extend: {},
  },
  plugins: [],
}

