/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Oswald': ['Oswald', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['even'],
    }
  },
  plugins: [],
}
