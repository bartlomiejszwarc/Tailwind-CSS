module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '480px',
      md: '821px',
      lg: '1110px',
      xl: '1440px',
    },
    fontFamily: {
      'poppins': ['Lato', 'sans-serif'] 

    },
    extend: {
      backgroundImage:{
        'backg': "url('../Simply Shiny.svg')"
      }
    },
  },
  plugins: [],
}
