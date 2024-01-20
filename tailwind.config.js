/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-orange': '#F16718',
        'neo-light-orange': '#FF9B62',
        'neo-dark-gray': '#162542',
        'neo-gray': '#7B8BAD',
        'neo-light-gray': '#E8EFF2',
        'neo-white': '#FFFFFF',
      },
      fontFamily: {
        'barlow': 'Barlow',
      },
      screens: {
        'TB': '768px',
        'DT': '1440px',
      }
    },
  },
  plugins: [],
}