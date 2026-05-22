/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#2D1B69',
        amber:     '#F5A623',
        amberDark: '#E8941A',
        celeste:   '#4A90D9',
        cream:     '#FDF8F0',
        dark:      '#1A1035',
        ink:       '#1C1C2E',
        muted:     '#6B6880',
        success:   '#27AE60',
        danger:    '#E74C3C',
        cardDark:  '#2D1B69',
        lilac:     '#F0EBF8',
        warmWhite: '#FFF8E8',
      },
      fontFamily: {
        display: ['Nunito', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
