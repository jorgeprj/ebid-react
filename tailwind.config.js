/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: [
		"./src/**/*.tsx"
	],
	theme: {
		extend: {
		  fontFamily: {
			sans: ['Inter var', ...defaultTheme.fontFamily.sans],
		  },
		},
	  },
	plugins: [],
}

