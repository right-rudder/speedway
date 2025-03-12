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
			}
		},
	},
	plugins: [],
}
