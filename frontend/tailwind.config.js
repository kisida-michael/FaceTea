module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header-bg': "url('./assets/headerbg.png')",
      }),
      logo: theme => ({
        'logo': "url('./assets/logo.png')",
      }),

      fontFamily: {
        'roboto': ['Roboto', 'sans'],
        'roboto-slab': ['Roboto Slab', 'serif'],
      },
      colors: {
        primary: '#759AA0',
        secondary: {
          100: '#F2F2F2',
          200: '#E6E6E6',
          300: '#D9D9D9',
          900: '#2C2D2D',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
