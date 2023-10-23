/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{html,svelte,js,ts,}",
        "./electron/**/*.{html,svelte,js,ts,}",
    ],
    theme: {
        extend: {
            colors: {
                black: "#2A292B",
                white: "#d9d9d9",
            },
        },

        fontFamily: {
            sans: ["Inter", "sans-serif"],
        },
        keyframes: {
            slideIn: {
                "0%": { transform: "translateX(-50px)" },
                "20%": { transform: "translateX(-45px)" },
                "40%": { transform: "translateX(-38px)" },
                "100%": { transform: "translateX(0)" },
            },
            strike: {
                "0%": { width: "0" },
                "100%": { width: "100%" },
            },
        },
        animation: {
            slideIn: ".6s ease-in slideIn",
            strike: ".6s ease-in .6s slideIn",
        },
    },
    plugins: [],
};
