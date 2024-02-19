/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#532926",
        headertext: "#cabcbb",
        headerside: "#784439",
        body1: "#270c03",
        cardcolor: "#f3edeb",
        cardh1color: "#625f5e",
        footercolor: "#775b49",
        button: "#3d2517",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
};
