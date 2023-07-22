/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('library-sb/tailwind.config')],
  content: ['src/components/*.tsx', '../../packages/library-sb/src/stories/**/*.tsx'],
  theme: {
    colors: {
      white: '#ffffff',
      gray: '#A4B3B6',
      purple: '#44318D',
      'light-purple': '#8165a6',
      'dark-purple': '#2A1B3D',
      pink: '#D83F87',
    },
    extend: {
      backgroundImage: {
        'primary-gradient': 'radial-gradient(circle, #44318d, #3f2b78, #392563, #32204f, #2a1b3d);',
      },
    },
  },
  plugins: [],
};
