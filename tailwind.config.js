/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'play-page-bg': "url('./assets/playPageBG.jpg')",
      },
    },
  },
  plugins: [],
}
