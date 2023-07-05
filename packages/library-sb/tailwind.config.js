/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/stories/**/*.tsx'],
  theme: {
    spacing: {
      10: '10px',
    },
    fontFamily: {
      roboto: ['Roboto-regular', 'sans-serif'],
      cambo: ['Cambo-regular', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
