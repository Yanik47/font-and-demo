/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/tw-elements/js/**/*.js", "./node_modules/mina-scheduler/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        excalifont: ['Excalifont', 'sans-serif'],
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        swipe: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '80%': { transform: 'scale(1.05)' },
        },
        'slide-in-out-sequence': {
          '0%': { transform: 'translateX(-75%)', opacity: '0' }, // Начинаем за 75% слева
          '20%': { transform: 'translateX(10%)', opacity: '1' },   // Переход на центр, делаем видимым
          '70%': { transform: 'translateX(10%)', opacity: '1' },   // Задержка на центре (60% времени анимации)
          '100%': { transform: 'translateX(75%)', opacity: '0' } // Уход на 75% вправо и исчезновение
        },
        'slide-in-out-sequence-mobile': {
          '0%': { transform: 'translateX(-75%)', opacity: '0' }, // Начинаем за 75% слева
          '20%': { transform: 'translateX(23%)', opacity: '1' },   // Переход на центр, делаем видимым
          '70%': { transform: 'translateX(23%)', opacity: '1' },   // Задержка на центре (60% времени анимации)
          '100%': { transform: 'translateX(75%)', opacity: '0' } // Уход на 75% вправо и исчезновение
  
      },
    },
      animation: {
        "slide-sponsors": "25s slide linear infinite",
        "slide-sponsors-delay": "25s slide linear infinite", // Задержка на половину времени анимации
        "swipe-teachers": "10s swipe ease-in-out infinite",
        pulse: '1.2s pulse ease-in-out infinite',
        slideUp: 'slideUp 0.5s ease-out forwards',
        'slide-in-out-sequence': 'slide-in-out-sequence 5s ease-in-out forwards',
        'slide-in-out-sequence-mobile': 'slide-in-out-sequence-mobile 5s ease-in-out forwards',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwindcss-motion'),
    require("tw-elements/plugin.cjs"),
  ],

};




