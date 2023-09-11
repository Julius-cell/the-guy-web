/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/stories/**/*.tsx'],
  theme: {
    spacing: {
      '1/10': '10%',
      '2/10': '20%',
      '1/4': '25%',
      '1/3': '33%',
      '1/2': '50%',
      0: '0px',
      4: '4px',
      8: '8px',
      10: '10px',
      11: '11px',
      15: '15px',
      20: '20px',
      25: '25px',
      30: '30px',
    },
    colors: {
      white: '#ffffff',
      'dark-blue': '#1A1F47',
      'dark-purple': '#2c1c42',
      pink: '#D83F87',
      blue: '#3544CF',
      purple: '#44318D',
      black: '#000000'
    },
    screens: {
      sm: '360px',
      md: '680px',
      lg: '1366px',
    },
    extend: {
      backgroundImage: {
        'header-shape-bg': "url('/public/default-img.jpeg')",
      },
    },
  },
  plugins: [],
};
