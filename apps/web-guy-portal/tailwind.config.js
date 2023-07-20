/** @type {import('tailwindcss').Config} */
export default {
  presets: [require('library-sb/tailwind.config')],
  content: ['src/components/*.tsx', '../../packages/library-sb/src/stories/**/*.tsx'],
  theme: {},
  plugins: [],
};
