import '../styles/globals.css'
import type { AppProps } from 'next/app'

function Cully({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default Cully
