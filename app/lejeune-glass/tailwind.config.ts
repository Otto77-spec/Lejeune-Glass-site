/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
'./pages/**/*.{js,ts,jsx,tsx,mdx}',
'./components/**/*.{js,ts,jsx,tsx,mdx}',
'./app/**/*.{js,ts,jsx,tsx,mdx}',
],
theme: {
extend: {
colors: {
'warm-white': '#F8F6F2',
'gold': '#C8A96E',
'gold-light': '#D4B97E',
'charcoal': '#121212',
'charcoal-mid': '#1a1a1a',
'charcoal-light': '#1e1e1e',
},
fontFamily: {
'display': ['Cormorant Garamond', 'serif'],
'body': ['Montserrat', 'sans-serif'],
'serif': ['Cormorant Garamond', 'serif'],
},
fontSize: {
'2xs': ['0.65rem', { lineHeight: '1rem' }],
},
letterSpacing: {
'widest2': '0.2em',
'widest3': '0.25em',
},
},
},
plugins: [],
}
