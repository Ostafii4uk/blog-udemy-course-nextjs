import '../styles/globals.css'
import Layout from '../components/layout/layout'
import Head from 'next/head'
import { SpeedInsights } from '@vercel/speed-insights/next'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My blog</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <SpeedInsights />
    </>
  )
}

export default MyApp
