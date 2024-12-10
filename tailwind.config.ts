import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00A19D',
        background: '#f3f3f3',
        gray100: '#f8f8f8',
        gray200: '#B0B0B0',
        destructive: '#FC311D',
        ring: 'hsl(var(--ring))',
      },
      boxShadow: {
        default: '0px 4px 4px 0px #00000026',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
