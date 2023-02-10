/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sidebarDesktop': "url('./assets/images/bg-sidebar-desktop.svg')",
        // 'sidebarMobile': "url('/img/footer-texture.png')",
      },
      colors: {
        'bgColorwindow': '#f0f6ff',
        'bgStep': '#bfe2fd',
        'primaryblue': '#02295a',
        'secondaryblue': '#473dff',
        'secondary': '	#9699ab',
        'borderform': '	#d6d9e6',
      },
      fontFamily: {
        'primary': ['Ubuntu', 'sans-serif']
      },
    },
  },
  plugins: [],
}
