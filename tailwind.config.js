/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,njk}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        accent: "#facc15",
        softblue: "#2a4fa3"   // ← add this
      }
    }
  },
  plugins: [],
}