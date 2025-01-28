/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: "#121107",   // Custom colors
        customViolet: "#D976CB",  
      },
      fontFamily: {
        'cutive-mono': ['Cutive Mono', 'serif'],
        'just-another-hand': ['Just Another Hand', 'cursive'],
        'outfit': ['Outfit', 'sans-serif'],
        'pacifico': ['Pacifico', 'cursive'],
        'special-elite': ['Special Elite', 'cursive'],
      },
      textColor: {
        DEFAULT: "#121107", // Establece customBlack como color de texto por defecto
      },
      fontSize: {
        '7.5xl': '82px', // Aquí agregas el tamaño 7.5xl
      },
    },
  },
  plugins: [require("daisyui")],  // DaisyUI como plugin
  daisyui: {
    themes: ["wireframe"],  // Tema de DaisyUI
  },
}
