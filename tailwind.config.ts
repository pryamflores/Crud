import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
    plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#2563eb",
          "secondary": "#dc2626",
          "accent": "#f87171",
          "neutral": "#b91c1c",
          "base-100": "#f3f4f6",
          "info": "#0082ff",
          "success": "#60a5fa",
          "warning": "#b91c1c",
          "error": "#ff4461",
        },
      },
    ],
  },
}
export default config