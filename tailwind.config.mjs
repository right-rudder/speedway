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
					mariner: {
						'50': '#e9fbff',
						'100': '#cef4ff',
						'200': '#a7eeff',
						'300': '#6be8ff',
						'400': '#26d6ff',
						'500': '#00b1ff',
						'600': '#0087ff',
						'700': '#006cff',
						'800': '#005de6',
						'900': '#0053b3',
						'950': '#003268',
					},
			}
		},
	},
	plugins: [],
}
