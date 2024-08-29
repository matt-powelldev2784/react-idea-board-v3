export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#356597',
        lightBlue: '#337bcc',
      },
      screens: {
        sm: '0px',
        md: '600px',
        lg: '1100px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.flexCol': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          flexWrap: 'wrap',
          width: '100%',
          margin: 0,
        },
        '.flexRow': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '100%',
          margin: 0,
        },
      });
    },
  ],
};
