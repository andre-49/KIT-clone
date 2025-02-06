/** @type {import('tailwindcss').Config} */
    export default {
        content: ["./*.{html,js}"],
        theme: {
            extend: {
                fontFamily: {
                    serrat: '"Montserrat", serif',
                },

                textStrokeWidth: {
                    sm: '1px',
                    md: '2px',
                    lg: '3px',
                },
                textStrokeColor: {
                    black: '#000',
                    white: '#fff',
                }
            },
        },
        plugins: [],
    }

