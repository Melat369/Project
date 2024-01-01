/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primaryPink':'#54B435',
        'secondaryPink':'#FF55BB',
        'grayish':'#F1EFEF',
        'shadowColor':'#F1F1F6'
      }
    },
  },
  plugins: [],
}

