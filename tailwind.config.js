/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/assets/img/background1purple.png')",
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
};
