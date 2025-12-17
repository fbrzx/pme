/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            "light",
            "dark",
            {
                "precision-audit": {
                    "primary": "#0de0e1",           // Bright cyan - most used accent color
                    "primary-content": "#0e0f10",    // Dark text on primary
                    "secondary": "#36d877",          // Bright green - second accent
                    "secondary-content": "#0e0f10",  // Dark text on secondary
                    "accent": "#ff4f43",             // Coral red - third accent
                    "accent-content": "#ffffff",     // White text on accent
                    "neutral": "#33353e",            // Mid-tone gray for borders/dividers
                    "neutral-content": "#e8e9ed",    // Light gray text
                    "base-100": "#1b1d21",          // Darkest background
                    "base-200": "#23242a",          // Card backgrounds
                    "base-300": "#2a2b32",          // Slightly lighter surface
                    "base-content": "#e8e9ed",      // Main text color (light gray)
                    "info": "#0de0e1",              // Using cyan as info
                    "info-content": "#0e0f10",
                    "success": "#36d877",           // Green for success
                    "success-content": "#0e0f10",
                    "warning": "#ffb648",           // Adjusted warning (not in original, picking a warm tone)
                    "warning-content": "#0e0f10",
                    "error": "#ff4f43",             // Red for errors
                    "error-content": "#ffffff",
                },
            },
        ],
    },
};
