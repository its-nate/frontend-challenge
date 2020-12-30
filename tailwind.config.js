module.exports = {
  purge: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      header: ["Josefin Slab", "serif"],
      content: ["Fira Sans", "sans-serif"],
    },
    colors: {
      'blue': "#3685B5",
      'yellow': "#FDE74C",
      'pink': "#FF4782"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
