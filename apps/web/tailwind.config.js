import designConfig from '@repo/design/tailwind.config.js';


/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "../../packages/design/src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                'serif': ['Baskerville', 'Garamond', 'Times New Roman', 'serif'],
                'sans': ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
            },
            // Additional custom colors that complement the theme
            colors: {
                'rl-navy': '#1d2f4e',
                'rl-tan': '#b39b63',
                'rl-wine': '#8b2e3f',
                'rl-cream': '#e8e4df',
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            ...designConfig.daisyui.themes
        ],
    },
};
