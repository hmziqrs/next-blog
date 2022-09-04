import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  console.log('MY APP',pageProps);
  
  return <div>
    <h1>WOW</h1>
    <Component {...pageProps} />
  </div>
}

export default MyApp
