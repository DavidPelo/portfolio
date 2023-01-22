import { type AppType } from 'next/dist/shared/lib/utils'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Layout from '../components/layout'
import Head from 'next/head'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider defaultTheme="system" attribute="class">
        <Head>
          <title>David Pelo</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
