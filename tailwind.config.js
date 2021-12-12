module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#FF6047',
      secondary: '#1F2633',
      neutral: '#FFFFFF',
      // ...
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
