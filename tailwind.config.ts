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

        // --- M02-006: Accent CTA tokens ---
        'accent-cta': '#FF073A', // Danger buttons, urgency CTAs, death LongPressButton
        'accent-cta-hover': '#DC143C', // Hover state for CTA

        // --- M02-007: Accent Active tokens ---
        'accent-active': '#00E5FF', // Links, interactive active states
        'accent-active-hover': '#00B8CC', // Hover state for active accent

        // --- M02-008: Semantic state tokens ---
        'state-success': '#00FF88', // Success states, achievements, >=80% day
        'state-warning': '#FFB800', // Warnings, streak at risk, HP < 5
        'state-error': '#FF0000', // Errors, death, HP critical (pure red OLED)
        'state-info': '#00E5FF', // Tooltips, informational (same HEX as accent-active, distinct token)

        // --- M02-009: Vector colors (SSOT §8.5) ---
        'vector-AURA': '#9B59B6', // Used in TaskCard, VectorRadar, Dashboard progress bars
        'vector-JAWLINE': '#E74C3C',
        'vector-WEALTH': '#27AE60',
        'vector-PHYSIQUE': '#E67E22',
        'vector-SOCIAL': '#3498DB',
        'vector-ENV': '#1ABC9C',

        // --- M02-010: Rarity border colors (SSOT §8.7) ---
        'rarity-common': 'transparent', // No visible border for common items
        'rarity-rare': '#3498DB',
        'rarity-epic': '#9B59B6',
        'rarity-legendary': '#D4AF37',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0,0,0,0.3)',
        md: '0 4px 6px -1px rgba(0,0,0,0.4), 0 2px 4px -1px rgba(0,0,0,0.3)',
        lg: '0 10px 15px -3px rgba(0,0,0,0.5), 0 4px 6px -2px rgba(0,0,0,0.4)',
        xl: '0 20px 25px -5px rgba(0,0,0,0.6), 0 10px 10px -5px rgba(0,0,0,0.5)',
        gold: '0 0 20px 0 rgba(212,175,55,0.3)',
        red: '0 0 20px 0 rgba(255,0,0,0.4)',
        success: '0 0 20px 0 rgba(0,255,136,0.4)',
        cyan: '0 0 15px 0 rgba(0,229,255,0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
