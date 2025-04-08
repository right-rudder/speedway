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
						'100': '#e5f2ff',
						'200': '#b3d7ff',
						'300': '#80bdff',
						'400': '#4da2ff',
						'500': '#1a88ff',
						'600': '#006ee6',
						'700': '#0056b3',
						'800': '#003d80', //main
						'900': '#00254d',
						'950': '#000c1a',
					},
			}
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
