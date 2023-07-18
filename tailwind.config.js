/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./docs/**/**/*.{js,ts,vue,jsx,tsx}",
    "./docs/.vitepress/**/*.js",
    "./docs/.vitepress/**/*.vue",
    "./docs/.vitepress/**/*.ts",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
