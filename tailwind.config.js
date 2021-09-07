const Color = require('color');
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				pacifico: ['"Pacifico"', 'cursive'],
			},
			textColor: {
				lightenPink: lighten('#EC4899', 0.25),
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('tailwindcss-textshadow')],
};
