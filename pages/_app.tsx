import '../styles/globals.css'
import type { AppProps } from 'next/app'

function GlobalWrap({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default GlobalWrap
