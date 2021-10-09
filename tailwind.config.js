module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
     transparent:'transparent',
     black:'black',
     white:'white',
     lwhite:'#FEF9EF',
     red:'red',
     blue:'#3DB2FF',
     lblue:'#B5DEFF',
     dark:'#2b2b37',
     darkff:'#111018',
     darkHead:'#23232f',
     darkgray:'#393E46',
     yellow:'#FFB319',
     green:'#40aa52',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
