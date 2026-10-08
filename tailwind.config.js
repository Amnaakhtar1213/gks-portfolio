/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          light: '#D7DECB',
          DEFAULT: '#AEBBA0',
          deep: '#7C8B72',
          ink: '#57634F',
        },
        beige: {
          light: '#F8F3E9',
          DEFAULT: '#F1E7D6',
          deep: '#E4D5BC',
        },
        blush: {
          light: '#FBEAEA',
          DEFAULT: '#F3D9DC',
          deep: '#E6B9BE',
        },
        skyblue: {
          light: '#EAF2F5',
          DEFAULT: '#DCE7EE',
          deep: '#B9CFDC',
        },
        ink: {
          DEFAULT: '#2E2B27',
          soft: '#5E594F',
          faint: '#8B857A',
        },
        coffee: {
          DEFAULT: '#6B4A35',
          light: '#8C6144',
        },
        hanbok: {
          red: '#B4332A',
          blue: '#16468C',
          gold: '#C9A66B',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Sora', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      borderRadius: {
        xl2: '1.75rem',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        drift: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(40px)' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
        drift: 'drift 18s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
