import type {Config} from "@/node_modules/tailwindcss";

export default {
    darkMode: 'class',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                WHITE: '#FFF7EF',
                LightBlue: '#28c9e1',
                DarkBlue: '#0d1217',
            },
        },
    },
    plugins: [],
} satisfies Config;