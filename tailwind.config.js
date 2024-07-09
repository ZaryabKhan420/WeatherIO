/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    colors: {
      primary: "#141216",
      secondary: "#1D1B1F",
      accent: "#1B191D",
      textPrimary: "#DAD8DD",
      textSecondary: "#9D999D",
      textAccent: "#5F5D64",
      weatherReportOK: "#8AE492",
      weatherReportNotOK: "#4E3534",
    },
  },
  plugins: [],
};
