module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.primary.20', 'currentColor'),
    }),
    boxShadow: {
      DEFAULT: '0 5px 15px 0 rgba(0, 0, 0, 0.15)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        DEFAULT: 'var(--primary)',
        95: 'var(--primary-95)',
        90: 'var(--primary-90)',
        80: 'var(--primary-80)',
        60: 'var(--primary-60)',
        40: 'var(--primary-40)',
        20: 'var(--primary-20)',
        10: 'var(--primary-10)',
        '05': 'var(--primary-05)',
      },
      secondary: 'var(--secondary)',
      'black-a-30': 'var(--black-a-30)',
      accent: 'var(--accent)',
      pink: {
        DEFAULT: 'var(--pink)',
        light: 'var(--pink-light)',
      },
    },
    fontFamily: {
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
    },
    extend: {
      lineHeight: {
        article: '1.675',
      },
      inset: {
        '1/2': '50%',
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.3333%',
        '2/3': '66.6667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        full: '100%',
      },
      screens: {
        standalone: {
          raw: '(display-mode: standalone)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.15s ease-in-out',
        'slide-up': 'slideUp 0.15s ease-in-out',
        'fade-in-up': 'fadeIn 0.15s ease-in-out, slideUp 0.15s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: 'translateY(50%)' },
          to: { transform: 'translateY(0)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
