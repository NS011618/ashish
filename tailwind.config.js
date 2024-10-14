/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode via the 'class' strategy
  theme: {
    extend: {
      colors: {
        // Define custom color variables here if needed
      },
    },
  },
  variants: {
    extend: {
      // Add dark mode variants for specific utilities
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
}
  