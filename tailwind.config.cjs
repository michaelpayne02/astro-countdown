/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans Variable', ...defaultTheme.fontFamily.sans],
        mono: ['Nova Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [require('daisyui')],
};
