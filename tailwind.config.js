module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: false,
  theme: {
    // Allow us to add our custom styles while still being able to use Tailwind styles
    extend: {
      colors: {
        white: '#FFF',
        black: '#000',
        text: '#363636',
        legend: '#6B6B6B',
        seaserpent: {
          light: '#C4EEED',
          DEFAULT: '#4bcbc9'
        },
        canary: {
          DEFAULT: '#f7c643',
          light: '#fef8e7'
        },
        woodpecker: {
          DEFAULT: '#ce0d00',
          light: '#ffe7e5'
        }
      },
      height: {
        9: '2.25rem'
      },
      width: {
        fit: 'fit-content',
        9: '2.25rem'
      },
      boxShadow: {
        focus: '0 0 .38rem rgba(54, 54, 54, 0.3)',
        card: '0 .25rem .38rem rgba(54, 54, 54, 0.15)'
      },
      transformOrigin: {
        '0': '0%'
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'hover', 'focus', 'focus-within']
    }
  },
  plugins: []
};
