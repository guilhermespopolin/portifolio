import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
  }
  
  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.sansNormal};
    font-size: ${({ theme }) => theme.typography.fontSize[400]};
    background-color: hsl(${({ theme }) => theme.colors.hsl.primary});
    color: hsl(${({ theme }) => theme.colors.hsl.white});
  }
`;
