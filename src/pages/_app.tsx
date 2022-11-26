import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { theme } from "../styles/shared/theme";
import GlobalStyles from "../styles/shared/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
