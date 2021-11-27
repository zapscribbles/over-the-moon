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
                darkBase: '#0b435e',
                darkHighlight: '#248d9a',
                button: '#00dbd5',
            },
            fontFamily: {
                heading: ['Patua One', 'sans-serif'],
                body: ['Poppins', 'sans-serif'],
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/forms')],
};
