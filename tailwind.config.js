/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pagebg: "#DEEEE1",
        primary: "#438951",
        lavender: "#D7C8F7",
        mint: "#A8D5BA",
        peach: "#FFB994",
        forest: "#2E4D3B",
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        body: ['Nobile', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
