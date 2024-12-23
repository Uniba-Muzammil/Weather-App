/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding:{
      "custom-1": "40px",
      "custom2": "25px"
      },
      height:{
"height-2": "50px"
      },
      colors:{
        colors4:"#626262",
        colors8 : "#ebfffc"
      },
      borderRadius:{
        "border-2": "40px"
      },
      backgroundImage:{
        customgradient:"linear-gradient(45deg,#2f4680,#500ae4)"
      },
      fontFamily:{
        font1:["Poppins","sans-serif"]
      },
      fontSize :{
        size2:'40px'
      }
    },
  },
  plugins: [],
}

