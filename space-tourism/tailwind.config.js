const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      sansCond: ["Barlow Condensed", "sans-serif"],
      serif: ["Bellefair", "serif"],
    },
    extend: {
      colors: {
        primary: {
          50: "#f3f3f3",
          100: "#e7e7e8",
          200: "#c2c3c5",
          300: "#9d9ea2",
          400: "#54565d",
          500: "#0b0d17",
          600: "#0a0c15",
          700: "#080a11",
          800: "#07080e",
          900: "#05060b",
        },
        accent: {
          50: "#fdfdff",
          100: "#fafbfe",
          200: "#f3f5fe",
          300: "#eceffd",
          400: "#dee2fb",
          500: "#d0d6f9",
          600: "#bbc1e0",
          700: "#9ca1bb",
          800: "#7d8095",
          900: "#66697a",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("selected", "&[aria-selected='true']");
    }),
  ],
};
