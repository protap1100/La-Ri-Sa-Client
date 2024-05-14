/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Cave': ["Caveat", 'cursive'],
        'Tali': ["Titillium Web", 'sans-serif']
      },
      colors: {
        'primary': '#ff6348', 
        'secondary': '#6A5ACD', 
        'btn': '#ff6348',
        'btn-border':'#ff6348',
        'btn-hover': '#c43131',
        'border': '#2ed573',
        'TopBackground': '#636e72',
        'hover':'48a5ad',
        'navLink': '#e17055',
        'activeLink': '#0f1270'
      },
    },
  },
  plugins: [require('daisyui'),],
}