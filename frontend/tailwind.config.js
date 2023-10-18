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
          100: '#FBF8F1',
          200: '#F0EDE6',
          300: '#E5E3DC',
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
