/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
        montez: ['Montez', 'cursive'],
       
      },
    },
  },
  plugins: [],
};
