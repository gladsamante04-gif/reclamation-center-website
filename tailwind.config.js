/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette sampled directly from the official Reclamation Center logo:
        // deep teal #004850 (figure & wordmark) + leaf green #80B800 (leaves)
        forest: '#004850', // deep brand teal — dark sections, headings
        primary: '#0E6E66', // interactive teal — buttons, links, icons
        leaf: '#80B800', // vibrant leaf green — accents & highlights
        'leaf-dark': '#5E8A00', // leaf green with enough contrast for text
        mint: '#E7F2EF', // soft teal-tinted light
        'leaf-tint': '#F2F7E2', // soft leaf-tinted light
        offwhite: '#FCFBF8', // logo background tone
        ink: '#15343A', // teal-ink body text
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Figtree', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(0, 72, 80, 0.08), 0 2px 8px -2px rgba(0, 72, 80, 0.06)',
        'card-hover':
          '0 12px 32px -4px rgba(0, 72, 80, 0.16), 0 4px 12px -2px rgba(0, 72, 80, 0.10)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.06)', opacity: '0.92' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.9s ease-out both',
        float: 'float 5s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
