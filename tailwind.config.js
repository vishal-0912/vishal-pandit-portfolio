/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Inter"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: '#f8f8f8',
        surface: '#efefef',
        card: '#ffffff',
        border: 'rgba(0,0,0,0.08)',
        ink: '#000000',
        snow: '#ffffff',
        canvas: '#f8f8f8',
        fog: '#efefef',
        pebble: '#d9d9d9',
        graphite: '#636363',
        slate: '#959595',
        steel: '#aeaeae',
        ash: '#7c7c7c',
        'rose-quartz': '#c679c4',
        marigold: '#ffb005',
        'signal-blue': '#0358f7',
        'hot-pink': '#fd02f5',
        accent: {
          blue: '#000000',
          cyan: '#636363',
          violet: '#959595',
        },
        text: {
          primary: '#000000',
          secondary: '#636363',
          muted: '#959595',
        },
      },
      borderRadius: {
        '3xl': '30px',
        '4xl': '40px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'spectrum-gradient': 'linear-gradient(90deg, #c679c4 0%, #fa3d1d 25%, #ffb005 50%, #e1e1fe 75%, #0358f7 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'scan': 'scan 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
