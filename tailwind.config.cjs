/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const typography = require('@tailwindcss/typography');
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': {
            'box-shadow': '0 0 0 0 lightgreen',
          },
          '40%': {
            'box-shadow': '0 0 0 25px rgba(255, 26, 67, 0)',
          },
          '80%': {
            'box-shadow': '0 0 0 25px rgba(255, 206, 67, 0)',
          },
          '100%': {
            'box-shadow': '0 0 0  rgba(255, 206, 67, 0)',
          },
        },
      },
      animation: {
        wave: 'wave 2s 1s ease-out infinite',
      },
    },
  },
  plugins: [
    typography,
    plugin(({ addVariant }) => {
      addVariant('firefox', '@-moz-document url-prefix()');
    }),
  ],
};
