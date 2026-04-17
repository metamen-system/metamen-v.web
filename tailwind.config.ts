import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,js,jsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Typography Scale — 11 responsive tokens with clamp()
        'large-title': ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.2', fontWeight: '900' }],
        'title-1': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.25', fontWeight: '700' }],
        'title-2': ['clamp(1.25rem, 2.5vw, 1.625rem)', { lineHeight: '1.3', fontWeight: '700' }],
        'title-3': ['clamp(1.125rem, 2vw, 1.375rem)', { lineHeight: '1.35', fontWeight: '600' }],
        headline: ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.4', fontWeight: '600' }],
        body: ['clamp(1rem, 1.2vw, 1.0625rem)', { lineHeight: '1.5', fontWeight: '400' }],
        callout: ['clamp(0.9375rem, 1.1vw, 1rem)', { lineHeight: '1.5', fontWeight: '400' }],
        subhead: ['clamp(0.875rem, 1vw, 0.9375rem)', { lineHeight: '1.5', fontWeight: '400' }],
        footnote: ['clamp(0.8125rem, 0.9vw, 0.875rem)', { lineHeight: '1.45', fontWeight: '400' }],
        'caption-1': ['clamp(0.75rem, 0.8vw, 0.8125rem)', { lineHeight: '1.4', fontWeight: '400' }],
        'caption-2': [
          'clamp(0.6875rem, 0.75vw, 0.75rem)',
          { lineHeight: '1.35', fontWeight: '400' },
        ],
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
        'rarity-common': '#95A5A6', // Common rarity color (SSOT §8.7)
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
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        breathe: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite ease-in-out',
        breathe: 'breathe 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
