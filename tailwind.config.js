/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {colors: {
      // Configure your color palette here
      'navcolour':'#231f32',
      'bluetheme':'#89cff0',
      'pinktheme':'#ff1493',
      'purpletheme':'#9369a0',
      'red':'#ff0000',
      'crimsonred':'#B80F0A',
      'alizarincrimsonred':' #E32636',
      'cardimiumred':' #E30022'


    },
    backgroundImage: {
      'hero_pattern': "url('/src/images/hero_image.jpg')",
      
    },
    fontFamily: {
      //'sans': ['Proxima Nova'],
      'cursive':['Lucida Handwriting'],
      'malanya':['malanya'],
    },
  },
  },
  
  plugins: [require('flowbite/plugin')],
  
}
