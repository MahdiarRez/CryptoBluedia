import type { Config } from '@/node_modules/tailwindcss';

import tailwindcss_animated from 'tailwindcss-animated';

import daisyui from 'daisyui';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { default as fl } from 'tailwindcss/lib/util/flattenColorPalette';

export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '521px',
        lg2: '1150px',
      },
      colors: {
        WHITE: '#F5F4F6',
        LightBlue: '#28c9e1',
        DarkBlue: '#0d1217',
      },
    },
  },
  plugins: [tailwindcss_animated, daisyui, addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = fl(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
