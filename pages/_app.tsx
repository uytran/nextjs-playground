import '../styles/globals.css'
import '../styles/coffeesite.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="layout">
      <Component {...pageProps} />
      <Head>
        <title>Kontent.ai Next.js Coffee</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
    </div>
  )
}

