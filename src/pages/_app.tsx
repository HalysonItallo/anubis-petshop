import '../styles/global.ts'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'

/*
if (process.env.NODE_ENV === 'development') {
  if (typeof window === "undefined") {
    const { server } = require("../mocks/server");
    server.listen();
  } else {
    const { worker } = require("../mocks/browser");
    worker.start();
  }
}
*/
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />,
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default MyApp
