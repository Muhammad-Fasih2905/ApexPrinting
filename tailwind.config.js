module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        'bebas': ['"Bebas Neue"', 'cursive'],
      },
      colors: {
        'blue-dark': '#0a1f6b',
        'blue-mid': '#1a3eb8',
        'blue-bright': '#2563eb',
        'blue-light': '#60a5fa',
        'silver': '#c8d8f0',
        'off-white': '#f8faff',
        'gray-custom': '#64748b',
        'gray-light': '#e8eef8',
        'gold': '#d4af37',
      },
      animation: {
        'pulse-slow': 'pulse 2s infinite',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fade-in': 'fadeIn 0.2s',
      },
      keyframes: {
        slideUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};