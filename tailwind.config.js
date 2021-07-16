module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './styles/*.css'],
  darkMode: false,
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '980px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'dark-gray': '#484848',
        'accent-1': '#29CAB4',
        'accent-2': '#9778FF',
        'error': '#FFBE2E'
      }
    },
  }
}
