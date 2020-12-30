module.exports = {
  purge: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      header: ["Cabin Condensed", "sans-serif"],
      content: ["Oxygen", "sans-serif"],
    },
    colors: {
      pink: "#FF4782",
      pinkDark: "#c93664",
      white: "#FFF",
    },
    height: {
      xl: "900px",
      full: "100%",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
