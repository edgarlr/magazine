import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import { getMediaURL } from '@lib/api'
import { register, unregister } from 'next-offline/runtime'

const Head = ({ global }: { global: TGlobal }) => {
  const { systemTheme } = useTheme()
  useEffect(() => {
    register('/service-worker.js', { scope: '/' })
    return () => {
      unregister()
    }
  }, [])
  return (
    <>
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
      <NextHead>
        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=block"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=block"
          rel="stylesheet"
        />

        {/* General and favicon */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/static/favicon/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#603cba" />
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
