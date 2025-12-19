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
            {
                "ralph": {
                    "primary": "#1d2f4e",
                    "primary-focus": "#152441",
                    "primary-content": "#ffffff",
                    
                    // Secondary colors - Warm gold/tan (Polo heritage)
                    "secondary": "#b39b63",
                    "secondary-focus": "#9d8554",
                    "secondary-content": "#1d2f4e",
                    
                    // Accent - Rich burgundy/wine (Premium feel)
                    "accent": "#8b2e3f",
                    "accent-focus": "#6f2532",
                    "accent-content": "#ffffff",
                    
                    // Neutral colors
                    "neutral": "#2a3a52",
                    "neutral-focus": "#1f2d3d",
                    "neutral-content": "#e8e4df",
                    
                    // Base colors
                    "base-100": "#ffffff",
                    "base-200": "#f8f7f5",
                    "base-300": "#e8e4df",
                    "base-content": "#1d2f4e",
                    
                    // Semantic colors
                    "info": "#5b8db8",
                    "info-content": "#ffffff",
                    "success": "#4a6741",
                    "success-content": "#ffffff",
                    "warning": "#c9984a",
                    "warning-content": "#1d2f4e",
                    "error": "#a73b3b",
                    "error-content": "#ffffff",
                    
                    // Component styling
                    "--rounded-box": "0.25rem",
                    "--rounded-btn": "0.25rem",
                    "--rounded-badge": "0.25rem",
                    "--animation-btn": "0.2s",
                    "--animation-input": "0.2s",
                    "--btn-text-case": "uppercase",
                    "--btn-focus-scale": "0.98",
                    "--border-btn": "1px",
                    "--tab-border": "1px",
                    "--tab-radius": "0.25rem",
                }
            }
        ],
        lightTheme: "ralph",
        darkTheme: "precision-audit",
    },
};
