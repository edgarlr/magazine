import { useTheme } from 'next-themes'
import NextHead from 'next/head'

const Head = () => {
  const { systemTheme } = useTheme()
  return (
    <NextHead>
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
  )
}

export default Head
