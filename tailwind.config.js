/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.jsx', './components/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        berlin: ['Berlin Sans FB', 'sans-serif'],
        source: ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        primary: '#F9B233',
        lightYellow: '#FFFAF1',
        darkYellow: '#FDE4B8',
        middleYellow: '#FFF2DA',
        navy: '#22292E',
      },
    },
  },
  plugins: [],
};
