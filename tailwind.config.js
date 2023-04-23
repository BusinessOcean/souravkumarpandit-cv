/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#FFB400',

                    secondary: '#3A3B3C',

                    accent: '#00e8a6',

                    neutral: '#2563eb',

                    'base-100': '#F8F9FB',

                    info: '#242526',

                    success: '#229677',

                    warning: '#FCB85F',

                    error: '#DE214D',
                },
            },
        ],
    },
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },

            colors: {
                blacky: {
                    100: '#F0F0F6',
                    200: '#E4E6EB',
                    300: '#767676',
                    400: '#3A3B3C',
                    500: '#2B2B2B',
                    600: '#18191A',
                    700: '#242526',
                },
                yellowes: '#FFB400',
            },

            padding: {
                '1/2': '50%',
                full: '100%',
            },
        },
    },
    plugins: [
        // require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
};
