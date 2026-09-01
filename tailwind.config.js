/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: { mada: { 50: '#ecfdf5', 600: '#059669', 700: '#047857', 800: '#065f46', 950: '#022c22' } },
      boxShadow: { panel: '0 1px 2px rgba(15,23,42,.04), 0 10px 30px rgba(15,23,42,.04)' }
    }
  },
  plugins: []
};
