import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        sans2: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
        sans: ["Quicksand Variable", ...defaultTheme.fontFamily.sans],
        bebas: ["Bebas Neue", ...defaultTheme.fontFamily.sans],
        stock: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
			colors: {
				primary: {
					'50': '#fef2f2',
					'100': '#fee2e2',
					'200': '#fecaca',
					'300': '#fca5a5',
					'400': '#f87171',
					'500': '#ef4444',
					'600': '#dc2626',
					'700': '#b91c1c', //main
					'800': '#991b1b',
					'900': '#7f1d1d',
					'950': '#450a0a',
				},
				accent: {
					'50': '#f6f6f6',
					'100': '#e7e7e7',
					'200': '#d1d1d1',
					'300': '#b0b0b0',
					'400': '#888888',
					'500': '#6d6d6d',
					'600': '#5d5d5d',
					'700': '#4b4b4b',
					'800': '#454545',
					'900': '#3d3d3d',
					'950': '#262626',
				},
					'mariner': {
  				  '50': '#ecfbff',
  				  '100': '#d4f4ff',
  				  '200': '#b2edff',
				    '300': '#7de4ff',
				    '400': '#40d1ff',
				    '500': '#14b3ff',
				    '600': '#0093ff',
				    '700': '#007bff',
				    '800': '#006ce0',
				    '900': '#0855a0',
	  			  '950': '#0a3461',
				},
			}
		},
	},
	plugins: [],
}
