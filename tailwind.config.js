/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'allura':['Allura'],
      'cookie':['Cookie'],
      'merienda':['Merienda'],
    },
    extend: {
      keyframes: {
        bounceTwist: {
          '0%, 100%': { transform: 'translateY(-10%) rotate(0deg)', opacity: '1' },
          '50%': { transform: 'translateY(0) rotate(180deg)', opacity: '0.5' },
        },
        fadeInOut: {
          '0%': { opacity: '0',transform: 'translateY(20px)' },
          '100%': { opacity: '1',transform: 'translateY(0)' },
        },
      },
      animation: {
        bounceTwist: 'bounceTwist 2s',
        fadeInOut: 'fadeInOut 3s',
      },
    },
  
  },
  plugins: [],
}