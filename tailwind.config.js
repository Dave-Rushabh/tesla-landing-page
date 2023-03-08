/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        app_primary_blue: "#1d3557",
        app_secondary_blue: "#457b9d",
        app_light_blue: "#a8dadc",
        app_white: "#ffffff",
        app_red: "#e63946",
      },
    },
  },
  plugins: [],
};
