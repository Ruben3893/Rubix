import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                rubix: {
                    dark: "#050505", // Pure Obsidian background
                    light: "#EBEBEB",
                    gold: "#D4AF37", // Luxury gold accents
                    charcoal: "#1A1A1A",
                    gray: "#8C8C8C",
                    roseGold: "#B76E79"
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                serif: ["Bodoni MT", "Didot", "serif"], // Bold serif for hero text
            },
            transitionTimingFunction: {
                'silk': 'cubic-bezier(0.22, 1, 0.36, 1)', // Silk transitions
            },
            letterSpacing: {
                widest: '0.8em', // headers
                wider: '0.2em', // micro-copy
            },
            backgroundImage: {
                'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [],
};

export default config;
