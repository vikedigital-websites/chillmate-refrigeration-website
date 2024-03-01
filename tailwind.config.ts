import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            keyframes: {
                slideInRight: {
                    "0%": { transform: "translateX(150%);" },
                    "100%": { transform: "translateX(0%);" },
                },
                slideOutRight: {
                    "0%": { transform: "translateX(0%);" },
                    "100%": { transform: "translateX(150%);" },
                },
                opacityHide: {
                    "0%": { opacity: "1" },
                    "100%": { opacity: "0" },
                },
                opacityShow: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
            animation: {
                slideInRight: "slideInRight 0.4s forwards",
                slideOutRight: "slideOutRight 0.4s forwards",
                opacityShow: "opacityShow 0.4s forwards",
                opacityHide: "opacityHide 0.3s forwards",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: "#314E66",
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, config }) {
            addBase({
                h1: { fontSize: config("theme.fontSize.4xl") },
                h2: { fontSize: config("theme.fontSize.3xl") },
                h3: { fontSize: config("theme.fontSize.2xl") },
                h4: { fontSize: config("theme.fontSize.xl") },
                h5: { fontSize: config("theme.fontSize.lg") },
                h6: { fontSize: config("theme.fontSize.lg") },
                //p: { fontSize: config("theme.fontSize.base") },
            });
        }),
    ],
};
export default config;
