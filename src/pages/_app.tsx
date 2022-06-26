/* eslint-disable import/no-extraneous-dependencies */
import { ThemeProvider } from "@mui/system";
import type { AppProps } from "next/app";
import { theme } from "styles/theme";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
