/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'palette': {
          light: '#e1edf4',
          dark: '#040c1b',
        },
      }
    },
    fontFamily: {
      signature: ["Cookie"]
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

