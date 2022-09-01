import type { AppProps } from 'next/app'
import { GlobalStyle } from "../global/style"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
