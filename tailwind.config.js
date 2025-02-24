/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: "#1A1A1A",  
        customViolet: "#D976CB", 
        customBeige: "#eae2b7", 
        customBackgroundLila: "#D976CB"
      },
      fontFamily: {
        'cutive-mono': ['Cutive Mono', 'serif'],
        'just-another-hand': ['Just Another Hand', 'cursive'],
        'outfit': ['Outfit', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
        'special-elite': ['Special Elite', 'cursive'],
      },
      fontSize: {
        '7.5xl': '82px',
      },
      animation: {
        scroll: "scroll 50s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["wireframe"],
  },
};
