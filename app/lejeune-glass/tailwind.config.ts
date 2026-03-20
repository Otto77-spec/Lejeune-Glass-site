import type { Config } from 'tailwindcss'

const config: Config = {
content: [
"./pages/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
"./app/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {
extend: {
colors: {
charcoal: {
DEFAULT: "#121212",
mid: "#1e1e1e",
light: "#2a2a2a",
},
gold: {
DEFAULT: "#C8A96E",
light: "#dfc28e",
},
"warm-white": "#F8F6F2",
"soft-gray": "#F5F5F5",
glassBlue: "#D6EEF7",
metalGray: "#8A8F95",
softWhite: "#F5F5F5",
},
fontFamily: {
sans: ["Inter", "ui-sans-serif", "system-ui"],
display: ["Montserrat", "ui-sans-serif", "system-ui"],
serif: ["Cormorant Garamond", "Georgia", "serif"],
body: ["Montserrat", "sans-serif"],
},
spacing: {
128: "32rem",
},
fontSize: {
"2xs": "0.6rem",
"3xs": "0.55rem",
},
letterSpacing: {
widest2: "0.25em",
widest3: "0.35em",
},
keyframes: {
heroFadeUp: {
"0%": { opacity: "0", transform: "translateY(40px)" },
"100%": { opacity: "1", transform: "translateY(0)" },
},
scrollBounce: {
"0%, 100%": { transform: "translateX(-50%) translateY(0)" },
"50%": { transform: "translateX(-50%) translateY(8px)" },
},
},
animation: {
"hero-fade-up": "heroFadeUp 1.2s ease both",
"scroll-bounce": "scrollBounce 2s ease-in-out infinite",
},
},
},
plugins: [],
}

export default config
