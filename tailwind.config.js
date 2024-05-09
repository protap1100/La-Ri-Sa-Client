/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Caveat': ["Caveat", 'cursive'],
        'Titillium': ["Titillium Web", 'sans-serif']
      },
      colors: {
        'primary': '#FF6347', 
        'secondary': '#6A5ACD', 
        'btn': '#70a1ff',
        'btn-border':'#1e90ff',
        'border': '#5352ed',
        'TopBackground': '#262626',
        'hover':'48a5ad',
      },
    },
  },
  plugins: [require('daisyui'),],
}