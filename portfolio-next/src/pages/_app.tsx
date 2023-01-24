import { type AppType } from 'next/dist/shared/lib/utils'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Layout from '../components/Layout'
import type { AppProps } from 'next/app'

const MyApp: AppType = ({
  Component,
  pageProps,
  router
}: AppProps): JSX.Element => {
  const url = `https://www.davidpelo.com${router.route}`

  return (
    <>
      <Head>
        <title>David Pelo</title>
      </Head>
      <ThemeProvider defaultTheme="system" attribute="class">
        <Layout>
          <Component {...pageProps} key={url} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
