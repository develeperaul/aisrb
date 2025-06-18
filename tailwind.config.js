/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{pug,js}'],
  theme: {
    extend: {
      spacing: {
        14.5: '3.625rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      borderRadius: {
        sm: '0px',
        md: '4px',
        lg: '8px',
        '3md': '12px',
        xl: '16px',
        '1.5xl': '24px',
        '2xl': '32px',
      },
    },
    fontFamily: {
      geist: ['Geist', 'sans-serif'],
      headingpro: ['Heading-Pro', 'sans-serif'],
    },
    colors: {
      text_000: '#FAFCFE',
      text_400: '#8E99B1',
      text_950: '#0D0D0D',
      'surface-white_50': '#E3EBF5',
      'surface-white_100': '#CFD7EE',
      'surface-white_200': '#A4B2DE',
      'surface-white_300': '#798ECE',
      'surface-white_400': '#647CC6',
      'surface-white_500': '#4E69BE',
      'surface-white_600': '#3957B6',
      'surface-white_700': '#2345AE',
      'surface-dark_50': '#707B93',
      'surface-dark_100': '#5C677F',
      'surface-dark_200': '#48536B',
      'surface-dark_300': '#343F57',
      'surface-dark_400': '#202B43',
      'surface-dark_500': '#0C172F',
      primary_400: '#193162',
      primary_500: '#03163D',
      primary_600: '#021231',
      secondary_400: '#00CCBE',
      secondary_500: '#00B0A4',
      secondary_600: '#00998F',
      transparent: 'transparent',
    },

    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1600px',
      xl2: '1920px',
    },
    container: {
      center: true,
    },
    fontSize: {
      h1: ['60px', '80px'],
      h2: ['48px', '64px'],
      h3: ['40px', '52px'],
      h4: ['32px', '44px'],
      h5: ['24px', '32px'],
      h6: ['20px', '28px'],
      body_m: ['16px', '24px'],
      body_s: ['14px', '22px'],
      body_xs: ['12px', '16px'],
    },
    lineHeight: {
      120: '120%',
      130: '130%',
      140: '140%',
      160: '160%',
      180: '180%',
    },
    letterSpacing: {
      1.75: '0.0175rem',
      3: '0.03rem',
      3.5: '0.035rem',
      4: '0.04rem',
      5: '0.05rem',
      6: '0.06rem',
      7: '0.07rem',
      8: '0.08rem',
    },
    boxShadow: {
      input: '0px 0px 6px 0px rgba(87, 195, 219, 0.32)',
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          padding: '0 20px',
          marginRight: 'auto',
          marginLeft: 'auto',
          '@screen xl': {
            maxWidth: '1552px',
            padding: '0',
          },
        },
        '.container2': {
          maxWidth: '100%',
          padding: '0 20px',
          marginRight: 'auto',
          marginLeft: 'auto',
          '@screen xl': {
            maxWidth: '1552px',
            padding: '0 16px',
          },
        },
        '.trans-300': {
          transition: 'all 0.3s ease',
        },
      });
    },
  ],
};
