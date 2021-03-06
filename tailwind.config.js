module.exports = {
  //purge: [],
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Google Sans', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
      'playfairdisplay': ['Playfair Display', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
