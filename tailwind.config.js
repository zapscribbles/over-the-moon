module.exports = {
    purge: {
        content: ['_site/**/*.html'],
        options: {
            safelist: [],
        },
    },
    theme: {
        extend: {
            colors: {
                light: '#ff4da6',
                darkBG: '#020D12',
                darkBase: '#248d9a',
                darkHighlight: '#0b435e',
                button: '#00dbd5',
            },
            fontFamily: {
                heading: ['shelby', 'sans-serif'],
                body: ['mislab-std', 'serif'],
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/forms')],
};
