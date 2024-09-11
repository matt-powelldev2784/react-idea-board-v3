export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#356597',
        lightBlue: '#337bcc',
      },
      backgroundImage: {
        'pink-gradient':
          'linear-gradient(135deg, rgba(255, 0, 150, 0.5), rgba(0, 204, 255, 0.5))',
      },
      screens: {
        sm: '0px',
        md: '600px',
        lg: '1100px',
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      fontSize: {
        xs: ['11px', '16px'],
        sm: ['14px', '20px'],
        base: ['18px', '24px'],
        lg: ['22px', '28px'],
        xl: ['26px', '32px'],
        '2xl': ['29px', '36px'],
        '3xl': ['32px', '42px'],
        '5xl': ['52px', '64px'],
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
        },
        '.flexRow': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '100%',
        },
      });
    },
  ],
};
