/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('library-sb/tailwind.config')],
  content: ['src/components/*.tsx', '../../packages/library-sb/src/stories/**/*.tsx'],
  theme: {
    colors: {
      white: '#ffffff',
      'dark-blue': '#1A1F47',
      'dark-purple': '#2c1c42',
      pink: '#D83F87',
      blue: '#3544CF',
      purple: '#44318D',
      black: '#000000'
    },
    extend: {
      fontFamily: {
        quattrocento: ['Quattrocento', 'serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'primary-gradient': 'radial-gradient(circle, #44318d, #3f2b78, #392563, #32204f, #2a1b3d);',
        'header-shape-bg': "url('/public/header-blob-bg.svg')",
      },
      backgroundPosition: {
        10: 'center -10px',
      },
      borderRadius: {
        50: '50px',
      },
    },
  },
  plugins: [],
};
