/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.5rem',
      },
      colors: {
        primary: '#111827',
        accent: '#8b5cf6',
        secondary: '#0ea5e9',
      },
      boxShadow: {
        card: '0 10px 40px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
