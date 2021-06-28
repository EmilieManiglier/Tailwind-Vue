// Colors
const white = '#FFF';
const black = '#000';
const text = '#363636'; // rgba(54, 54, 54)
const legend = '#6B6B6B';
const lightGrey = '#F2F2F2';
const seaSerpent = '#4bcbc9';
const seaSerpentLight = '#C4EEED';
const woodpecker = '#ce0d00';
const woodpeckerLight = '#ffe7e5';
const canary = '#f7c643';
const canaryLight = '#fef8e7';

// Shadows
const focusShadow = '0 0 .38rem rgba(54, 54, 54, 0.3)';
const cardShadow = '0 .25rem .38rem rgba(54, 54, 54, .15)';

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: false,
  theme: {
    // Allow us to add our custom styles while still being able to use Tailwind styles
    extend: {
      colors: {
        white,
        black,
        text,
        legend,
        lightGrey,
        seaserpent: {
          light: seaSerpentLight,
          DEFAULT: seaSerpent
        },
        canary: {
          DEFAULT: canary,
          light: canaryLight
        },
        woodpecker: {
          DEFAULT: woodpecker,
          light: woodpeckerLight
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
        focus: focusShadow,
        card: cardShadow
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
