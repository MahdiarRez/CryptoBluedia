import type { Config } from '@/node_modules/tailwindcss';

import tailwindcss_animated from 'tailwindcss-animated';

import daisyui from 'daisyui';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { default as fl } from 'tailwindcss/lib/util/flattenColorPalette';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		screens: {
  			xs: '521px',
  			lg2: '1150px'
  		},
  		colors: {
  			WHITE: '#F5F4F6',
  			LightBlue: '#28c9e1',
  			DarkBlue: '#0d1217'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			shine: 'shine var(--duration) infinite linear',
  			'background-position-spin': 'background-position-spin 3000ms infinite alternate'
  		},
  		keyframes: {
  			shine: {
  				'0%': {
  					'background-position': '0% 0%'
  				},
  				'50%': {
  					'background-position': '100% 100%'
  				},
  				to: {
  					'background-position': '0% 0%'
  				}
  			},
  			'background-position-spin': {
  				'0%': {
  					backgroundPosition: 'top center'
  				},
  				'100%': {
  					backgroundPosition: 'bottom center'
  				}
  			}
  		},
  		boxShadow: {
  			input: '`0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`'
  		}
  	}
  },
  plugins: [
    tailwindcss_animated,
    daisyui,
    addVariablesForColors,
    require('tailwindcss-animate'),
    require('@material-tailwind/react/utils/withMT'),
  ],
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
