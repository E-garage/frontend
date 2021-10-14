module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        loginSocial: '0px 4px 15px rgba(0, 0, 0, 0.11);'
      },
      width: {
        '9/25': '45%'
      },
      minWidth: {
        'loginPage': '580px'
      },
      fontFamily: {
        poppins: ['Poppins']
      },
    },
  },
  variants: {
    extend: {
      margin: ['first'],
    },
  },
  plugins: [
    require('daisyui')
  ],