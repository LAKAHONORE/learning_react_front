/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        purpleColor : "#4b21c3",
        blueColor : "#126cb8",
        grayColor : "#f1f1f1",
      }
    },
  },
  plugins: [],
}

