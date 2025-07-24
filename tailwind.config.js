/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*",
    "./js/*",
    "./animation/*",
  ],
  theme: {
    extend: {
      screens: {
        mobileM: '375px',
        mobileL: '425px'
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif']
      },
      colors: {
        primary_color: '#050505',
        accent_color: '#545353'
      },
    },
  },
  plugins: [],
}

