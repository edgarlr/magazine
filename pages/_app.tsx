import type { AppProps } from 'next/app'
import '@styles/main.css'
// import '@styles/tailwind.css'
import 'tailwindcss/base.css'
import 'tailwindcss/components.css'
import 'tailwindcss/utilities.css'
import '@styles/base.css'
import '@styles/components.css'
import '@styles/utilities.css'
import Head from '@components/common/head'
import ListProvider from '@components/ListProvider'
import UIProvider from '@components/UIProvider'
import * as gtag from '@lib/gtag'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // Only run GA on Production
    if (process.env.NODE_ENV !== 'production') return

    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <UIProvider>
      <ListProvider>
        <Head />
        <Component {...pageProps} />
      </ListProvider>
    </UIProvider>
  )
}

export default MyApp
