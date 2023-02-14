/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Libre: ['Libre Baskerville', 'serif'],
                Open: ['Open Sans', 'sans'],
            },
            colors: {
                Dark: '#1C1C1C',
                Iron: '#C4C4C4',
                Silver: '#F3F3F3',
                Arsenic: '#3B3F44',
                Davy: '#545A61',
                Cultured: '#F8F8F8',
                White: '#fff',
                Black: '#000',
            },
        },
    },
    plugins: [],
};
