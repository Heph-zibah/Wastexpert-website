/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '428px',
			md: '768px',
			lg: '1020px',
			xl: '1201px',
			xxl: '1440px'
		},
		extend: {
			colors: {
				primary: '#028C32',
				secondary: 'rgba(0, 0, 0, 0.5)'
			},
			fontFamily: {
				inter: ['Inter', 'sans - serif'],
				mulish: ['Mulish', 'sans - serif']
			}
		}
	},
	plugins: []
};
