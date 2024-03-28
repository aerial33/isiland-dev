import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/slices/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'hero-background': "url('/assets/images/isiland-image.jpg')",
			},
			fontFamily: {
				poppins: ['var(--font-poppins)'],
			},
			colors: {
				primary: '#A1A536',
				secondary: '#706668',
				obsidian: '#2A2E38',
				'accent-yellow': '#F9C304',
				body: '#A0A0A0',
				'coral-red': '#FF6452',
				'light-gray': '#DEDEDE',
				'intense-gray': '#D0D0D0',
				'white-400': 'rgba(255, 255, 255, 0.80)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
export default config
