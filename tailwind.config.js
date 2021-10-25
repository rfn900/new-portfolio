const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Open sans", "sans-serif", ...defaultTheme.fontFamily.sans],
      mono: ["interstate-mono", "monospace", ...defaultTheme.fontFamily.mono],
    },
    extend: {
      inset: {
        18: "4.5rem",
      },
      colors: {
        warmGray: colors.warmGray,
        themeGray: {
          light: "#f8f8f8",
          medium: "#636469",
          base: "#2D2E32",
          dark: "#282A2D",
          darker: "#24262A",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
