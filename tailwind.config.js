/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dela: ['Dela Gothic One', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],

      },
      colors: {
        'grey': "#666",
        'green': "#ddf1e8",
        'purple': "#e0e1ff",
        'dp':"#c6c8f9",
        'dg':"#c8e3da",
        'ddg': "#9dc3b4",
        'ddp': "#a7aae6"

      }
    },
  },
  plugins: [],
}
