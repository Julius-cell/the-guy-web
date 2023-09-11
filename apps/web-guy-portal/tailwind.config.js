/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('library-sb/tailwind.config')],
  content: ['src/components/*.tsx', '../../packages/library-sb/src/stories/**/*.tsx'],
  theme: {
    colors: {
      white: '#ffffff',
      pink: '#D83F87',
      blue: '#3544CF',
      black: '#000000'
    },
    extend: {
      fontFamily: {
        quattrocento: ['Quattrocento', 'serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      borderRadius: {
        50: '50px',
      },
    },
  },
  plugins: [],
};
