import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "@/components/GlobalStyle";

import { theme } from "@/styles/theme";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
