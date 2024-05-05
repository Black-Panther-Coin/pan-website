/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        'bg2':'url("/src/assets/images/bg2.jpg")'
      },
      colors:{
        "lightbaige":"#F8F5ED"
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
