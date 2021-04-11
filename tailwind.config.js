module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    100: '#2ea44f',
                    200: '#13A564'
                },
                secondary: {
                    100: '#E2E2D5',
                    200: '#888883'
                },
                myGray: '#24292e',
            },
            fontFamily: {
                body: ['New', 'Tegomi']
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}