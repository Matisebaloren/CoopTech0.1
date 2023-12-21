/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1': '#243e91',
        'color2': '#f88d29;',
        'color3': '#bbbdc0;',
      },
    },
  },
  plugins: [],
}

