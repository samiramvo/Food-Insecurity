/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      width: {
        'screen-1/2': '50vw',
        '150': '150px',
        '100': '100px',
        '300': '300px',
        '500': '500px',
        '250': '250px',
        '300': '300px',
        '400': '400px',
        '350': '350px',
        '800': '800px'
      },
      height: {
        'screen-1/2': '50vh',
        '40': '40px',
        '350': '350px',
        '100': '100px',
        '300': '300px',
        '450': '450px',
        '400': '400px',
        '500': '500px',
        '600': '600px',

      },

      colors: {
        colorbeige: '#FFB6360D',
        colorblue: '#483D8B',
        colorgreen: '#0D986A',
      },
      textColor: {
        'custom-green': '#0D986A',
      },
      borderColor: {
        'custom-green': '#0D986A',
      },
    },
  },
  plugins: [],

}

