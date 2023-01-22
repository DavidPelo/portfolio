/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        thin: ['Neue Montreal Thin', 'sans-serif'],
        medium: ['Neue Montreal Medium', 'sans-serif']
      },
      container: {
        center: true,
        padding: '1rem'
      }
    }
  },
  plugins: []
}
