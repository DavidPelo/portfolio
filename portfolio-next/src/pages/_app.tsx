import { type AppType } from 'next/dist/shared/lib/utils'
import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" attribute="class">
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
