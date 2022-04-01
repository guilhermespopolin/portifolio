export const theme = {
  colors: {
    hsl: {
      primary: "230 35% 7%",
      accent: "231 77% 90%",
      white: "0 0% 100%",
    },
  },
  typography: {
    fontFamily: {
      serif: '"Bellefair", serif',
      sansNormal: '"Barlow", sans-serif',
      sansCond: '"Barlow Condensed", sans-serif',
    },
    fontSize: {
      900: "9.375rem",
      800: "6.25rem",
      700: "3.5rem",
      600: "2rem",
      500: "1.75rem",
      400: "1.125rem",
      300: "1rem",
      200: "0.875rem",
    },
  },
};

export type Theme = typeof theme;
