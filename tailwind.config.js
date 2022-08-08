/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      spacing: {
        '2px': '2px',
      },
    },
  },
  plugins: [],
  corePlugins: {},
}
