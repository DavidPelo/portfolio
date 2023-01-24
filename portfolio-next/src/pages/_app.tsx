import { type AppType } from 'next/dist/shared/lib/utils'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
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
        <Header />
        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={url} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default MyApp
