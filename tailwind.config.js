/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8CBF68',
        text: '#5C4033',
        accent: '#F2E6D8',
        background: '#FFFEFA',
        cta: '#06C755',
      },
      fontFamily: {
        sans: ['"M PLUS Rounded 1c"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

