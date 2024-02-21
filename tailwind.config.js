/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#F2E857",
                },
                secondary: {
                    100: "#F2C84B",
                },
                tertiary: {
                    100: "#F27052",
                },
                quaternary: {
                    100: "#F26457",
                },
                dark: {
                    100: "#0D0D0D",
                },
                light: {
                    100: "#FFF",
                },
            },
        },
    },
    plugins: [],
});
