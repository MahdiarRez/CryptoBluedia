import type { Config } from '@/node_modules/tailwindcss';

import tailwindcss_animated from 'tailwindcss-animated';

export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        WHITE: '#FFF7EF',
        LightBlue: '#28c9e1',
        DarkBlue: '#0d1217',
      },
    },
  },
  plugins: [tailwindcss_animated],
} satisfies Config;
