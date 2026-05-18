/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1C3A6E',
          light:   '#2B4F96',
          dark:    '#122450',
        },
        gold: {
          DEFAULT: '#C8A96A',
          light:   '#D9BE8A',
          dark:    '#A8893A',
        },
        cream:  '#F4EFE8',
        sand:   '#EDE6DA',
        border: '#E0D8CE',
        muted:  '#888888',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16,1,0.3,1)',
        'spring':   'cubic-bezier(0.34,1.56,0.64,1)',
      },
      maxWidth: { container: '1180px' },
      borderRadius: { card: '10px' },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}
