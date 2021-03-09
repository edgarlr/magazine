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

function MyApp({ Component, pageProps }: AppProps) {
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
