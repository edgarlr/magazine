import { fetchAPI, getMediaURL, getNavigation } from '@lib/api'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import Custom404 from 'pages/404'
import { NextSeo } from 'next-seo'
import ExitPreviewButton from '@components/common/ExitPreviewButton'
import { Layout } from '@components/common/Layout'
import Markdown from '@components/common/Markdown/Markdown'
import Image from 'next/image'

export async function getStaticPaths() {
  // If you don't have too many pages or simply prefer to generate
  // all pages at build time, to you can uncomment this code below.

  // IMPORTANT! You MUST have at list one page published on your CMS

  // const slugs: TPage[] = await fetchAPI('/pages')
  // return {
  //   paths: slugs.map((page) => `/pages/${page.slug}`),
  //   fallback: true, // Needs to be `true` to enable preview mode
  // }

  return {
    paths: [],
    fallback: 'blocking', // `blocking` insted of `true` for better SEO https://nextjs.org/docs/basic-features/data-fetching#fallback-blocking
  }
}

export async function getStaticProps({
  params,
  preview = false,
}: GetStaticPropsContext<{ slug: string }>) {
  const page: TPage = (
    await fetchAPI(
      `/pages?slug=${params?.slug}${
        preview ? '&_publicationState=preview' : ''
      }`
    )
  )[0]
  const navigation: TNavigation = await getNavigation()

  // No props will trigger a 404
  if (!page) return { props: {} }
  return { props: { page, navigation, preview } }
}

function PagesPage({
  page,
  preview,
  navigation,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (!isFallback && !page) {
    return <Custom404 />
  }

  return (
    <Layout navigation={navigation} isMarkdown>
      <NextSeo
        title={page?.title}
        description={page?.description}
        openGraph={{
          title: page?.title,
          description: page?.description,
          // Only include OG image if exists
          // This will break disabling Strapi Image Optimization
          ...(page?.cover && {
            images: Object.values(page.cover.formats).map((image) => {
              return {
                url: getMediaURL(image?.url),
                width: image?.width,
                height: image?.height,
              }
            }),
          }),
        }}
      />

      <header>
        <h1 className="serif pb-4">{page?.title}</h1>
      </header>

      {page?.cover && (
        <div className="mt-4 mb-8">
          <Image
            src={getMediaURL(
              page.cover?.formats.medium?.url || page?.cover?.url
            )}
            alt={page?.cover?.alternativeText || ''}
            width={page?.cover?.width}
            height={page?.cover?.height}
          />
        </div>
      )}

      <Markdown content={page?.content} />
      {preview && <ExitPreviewButton />}
    </Layout>
  )
}

export default PagesPage
