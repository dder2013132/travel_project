// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            height: {
                '128': '32rem',
            },
            minHeight: {
                '128': '32rem',
            },
            colors: {
                'my-color': 'var(--my-color)',
                'ticket-color': 'var(--ticket-color)',
                'header-color': 'var(--header-color)',
            },
        },
    },
    plugins: [],
};

export default config;