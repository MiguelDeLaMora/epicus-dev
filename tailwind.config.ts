import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dim: 'rgba(37,99,235,0.07)',
        },
        ink: {
          DEFAULT: '#0a0a0f',
          mid: '#3d3d4a',
          soft: '#7a7a8c',
        },
        cream: '#f9f8f5',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      // ── TYPOGRAPHY SCALE (Material Design-inspired) ──
      fontSize: {
        // Overline / Special Title
        'overline': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.2em', fontWeight: '500' }],
        // Body (B1)
        'b1': ['1rem', { lineHeight: '1.85', fontWeight: '300' }],
        // Button / Accent Text
        'btn': ['0.8125rem', { lineHeight: '1', letterSpacing: '0.06em', fontWeight: '500' }],
        // Head 6 / Box Title
        'h6': ['0.875rem', { lineHeight: '1.4', fontWeight: '500' }],
        // Head 5 / Subtitle
        'h5': ['1.125rem', { lineHeight: '1.4', fontWeight: '400' }],
        // Head 4 / Secondary
        'h4': ['1.375rem', { lineHeight: '1.3', fontWeight: '400' }],
        // Head 3 / Primary
        'h3': ['1.75rem', { lineHeight: '1.25', fontWeight: '400' }],
        // Head 2 / Hero Headline
        'h2': ['clamp(2.25rem, 3.5vw, 3.5rem)', { lineHeight: '1.1', fontWeight: '300' }],
        // Head 1 / 404 Title
        'h1': ['clamp(3rem, 5vw, 4.625rem)', { lineHeight: '1.08', fontWeight: '300' }],
      },
      spacing: {
        // Spacing system
        'parent': '20px',   // Parent container spacing
        'child': '10px',    // Child elements
        'nested': '5px',    // Nested child elements
      },
      // Section padding system
      padding: {
        'section': '4%',    // Section outer padding (full-width)
        'inner': '2%',      // Inner text block padding
      },
    },
  },
  plugins: [],
}

export default config
