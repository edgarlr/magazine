import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import { getMediaURL } from '@lib/api'
import { register, unregister } from 'next-offline/runtime'
import { OG_IMAGE, SEO_DESCRIPTION, SITE_NAME, SITE_URL } from '@lib/constants'

const Head = () => {
  const { systemTheme } = useTheme()

  useEffect(() => {
    // Prevent registering the sw on development
    if (process.env.NODE_ENV === 'development') return
    register('/service-worker.js', { scope: '/' })
    return () => {
      unregister()
    }
  }, [])

  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${SITE_NAME}`}
        title="Online Magazine Starter Kit"
        description={SEO_DESCRIPTION}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: SITE_URL,
          site_name: SITE_NAME,
          images: Object.values(OG_IMAGE).map((image) => {
            return {
              url: getMediaURL(image.url),
              width: image.width,
              height: image.height,
            }
          }),
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <NextHead>
        {/* Fonts */}
        <link
          rel="preload"
          href="/fonts/playfair-display/playfair-display-v22-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/public-sans/public-sans-v5-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/public-sans/public-sans-v5-latin-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* status bar transparent */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* General and favicon */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#603cba" />

        <link
          rel="manifest"
          href="/static/favicon/site.webmanifest"
          key="site-manifest"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/apple-touch-icon.png"
        />
        <link
          rel="mask-icon"
          href="/static/favicon/safari-pinned-tab.svg"
          color="#000000"
        />

        {/* Dynamic favicon */}
        {!systemTheme || systemTheme === 'light' ? (
          <>
            å
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/static/favicon/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/static/favicon/favicon-16x16.png"
            />
          </>
        ) : (
          <>
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/static/favicon/dark-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/static/favicon/dark-16x16.png"
            />
          </>
        )}
      </NextHead>
    </>
  )
}

export default Head
