import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { fetchAPI, getMediaURL } from '@lib/api'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { Layout } from '@components/core'
import '@styles/main.css'
// import '@styles/tailwind.css'
import 'tailwindcss/base.css'
import 'tailwindcss/components.css'
import 'tailwindcss/utilities.css'
import '@styles/base.css'
import '@styles/components.css'
import '@styles/utilities.css'

type Props = {
  global: TGlobal
  categories: TCategory[]
  pages: TPage[]
}

function MyApp({ Component, pageProps }: AppProps) {
  const { global, categories, pages }: Props = pageProps

  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo
        titleTemplate={`%s | ${global.site_name}`}
        title="Online Magazine Starter Kit"
        description={global.description}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: global.site_url,
          site_name: global.site_name,
          images: Object.values(global.cover.formats).map((image) => {
            return {
              url: getMediaURL(image?.url),
              width: image?.width,
              height: image?.height,
            }
          }),
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Layout global={global} categories={categories} pages={pages}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  // Fetch global site data
  const global = await fetchAPI('/global')
  const categories = await fetchAPI('/categories')
  const pages = await fetchAPI('/pages')

  return { ...appProps, pageProps: { global, categories, pages } }
}

export default MyApp
