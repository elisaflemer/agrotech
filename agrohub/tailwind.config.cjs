/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    fontFamily : {
      'montserrat' : ['Montserrat']
    },
    colors: {
      purple: '#2B1B53',
      action: '#20DF7F',
      background: '#E5E5E5',
      green: '#46aa56',
    },
  },
  plugins: [],
}
