/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#002c69', // Custom color
        },
        black: {
          75: 'rgba(0, 0, 0, 0.75)', // Semi-transparent black
        },
        blue: {
          900: '#0149ad', // Primary blue used in text
          950: '#072b64', // Secondary dark blue used in text
        },
        white: '#FFFFFF', // Explicit white
      },
      fontFamily: {
        dmSans: ["'DM Sans'", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        cabin: ["Cabin", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],

      },
      fontSize: {
        '58': ['58px', '69.6px'], // Font size with line height
        xl: ['20px', '28px'], // xl font size for descriptive text
        '2xl': ['24px', '30px'], // Button text size
      },
      fontWeight: {
        light: '300',
        normal: '400',
        bold: '700',
      },
      spacing: {
        '24.93': '24.93px', // Specific spacing value
      },
      letterSpacing: {
        '3.24': '3.24px', // Custom letter spacing
      },
    },
  },
  plugins: [],
};