module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#F1F2F4",
      "gray-dark": "#969696",
      "gray-light": "#DEDFE3",
      black: "#090809",
      red: "#F40000",
      blue: "#0d243c",
      orange: "#FFA500",
    },
    fontFamily: {
      Michroma: "Michroma",
      Roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
