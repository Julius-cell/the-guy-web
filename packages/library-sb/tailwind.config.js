/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/stories/**/*.tsx'],
  theme: {
    spacing: {
      0: '0px',
      4: '4px',
      10: '10px',
      20: '20px',
    },
    fontFamily: {
      roboto: ['Roboto-regular', 'sans-serif'],
      cambo: ['Cambo-regular', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
