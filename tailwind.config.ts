import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        // --- M02-003: Background elevation tokens ---
        'bg-base': '#0A0A0A', // Main background
        'bg-card': '#1A1A1A', // Elevated cards
        'bg-elevated': '#2D2D2D', // Modals, dropdowns
        'bg-hover': '#3A3A3A', // Hover state backgrounds
        'bg-active': '#4A4A4A', // Active/pressed state backgrounds

        // --- M02-004: Text color tokens ---
        'text-primary': '#FFFFFF', // Primary text
        'text-glow': '#F8FFFF', // Glowing/emphasis text
        'text-secondary': '#B0B0B0', // Secondary text
        'text-disabled': '#808080', // Disabled text
        'text-inverse': '#0A0A0A', // Text on light backgrounds

        // --- M02-005: Accent gold tokens ---
        'accent-gold': '#D4AF37', // BTC, rewards, levels
        'accent-gold-hover': '#B8941F', // Gold hover state
      },
      // TODO M02: colors, spacing, borderRadius, boxShadow, animation, gradients
    },
  },
  plugins: [],
};

export default config;
