/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '375px',
			md: '768px',
			lg: '1020px',
			xl: '1440px'
		},
		extend: {
			colors: {
				primary: '#028C32',
				secondary: 'rgba(0, 0, 0, 0.5)'
			}
		}
	},
	plugins: []
};
