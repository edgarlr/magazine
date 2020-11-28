import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import '@styles/main.css'
import { ThemeProvider } from 'next-themes'
import { fetchAPI, getMediaURL } from '@lib/api'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const { global }: { global: TGlobal } = pageProps

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
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  // Fetch global site data
  const global = await fetchAPI('/global')

  return { ...appProps, pageProps: { global } }
}

export default MyApp
