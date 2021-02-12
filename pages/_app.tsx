import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ListProvider>
        <Head />
        <Component {...pageProps} />
      </ListProvider>
    </ThemeProvider>
  )
}

export default MyApp
