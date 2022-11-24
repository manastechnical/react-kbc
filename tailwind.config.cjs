/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'db':"#020230"
      },
      borderRadius:{
        'half':"50%"
      },
      backgroundImage:{
        'bgImg': "linear-gradient(to bottom, rgba(0, 0, 0, 0), #020230), url('./assets/bg.jpg')",
        'ques':"linear-gradient(#100241,black)",
        'ans':"linear-gradient(#0e0124,#22074d)"
      },
      keyframes:{
        correct:{
          '0%,22%,40%':{background: 'linear-gradient(#100241,black)'},
          '20%,40%,60%':{background: 'linear-gradient(#0e0124,#22074d)'},
          '62%,100%':{background: 'green'}
        },
        wrong:{
          '0%,22%,40%':{background: 'linear-gradient(#100241,black)'},
          '20%,40%,60%':{background: 'linear-gradient(#0e0124,#22074d)'},
          '62%,100%':{background: 'crimson'}
        }
      },
      animation:{
        'correctAns':'correct 3s ease forwards',
        'wrongAns':'wrong 3s ease forwards'
      }
    },
  },
  plugins: [],
}