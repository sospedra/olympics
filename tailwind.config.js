module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./services/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "376px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
