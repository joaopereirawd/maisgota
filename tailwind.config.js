const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            transparent: 'transparent',
            black: "#000000",
            white: "#ffffff",
            red: "#FF3B3B",
            gray: "#7C7C7C",
        },
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        },

        extend: {
            fontSize: {
                '10xl': '10rem',
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        }
    },
    plugins: [
        require('tailwindcss-easing'),
    ],
}