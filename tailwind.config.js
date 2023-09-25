/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				'project-orange-prim': '#FF7D1A',
				'project-orange-pale': '#FFEDE0',
				'project-very-dark-blue': '#1B1D23',
				'project-dark-greyish-blue': '#68707D',
				'project-grayish-blue': '#B6BCC8',
				'project-light-grayish-blue': '#F7F8FD'
			},
			fontFamily: {
				'main-bold': "Kumbh Sans Bold",
				'main': "Kumbh Sans"
			}
    },
  },
  plugins: [],
}