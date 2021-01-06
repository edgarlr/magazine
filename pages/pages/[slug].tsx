import { fetchAPI, getMediaURL, getNavigation } from '@lib/api'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { NextSeo } from 'next-seo'
import ExitPreviewButton from '@components/common/ExitPreviewButton'
import { Layout } from '@components/common/Layout'
import Markdown from '@components/common/Markdown/Markdown'

export async function getStaticPaths() {
  // If you don't have too many contributors you can uncomment
  // this code and pre-build each page instead.

  const slugs: TPage[] = await fetchAPI('/pages')
  return {
    paths: slugs.map((page) => `/pages/${page.slug}`),
    fallback: false,
  }

  // return {
  //   paths: [],
  //   fallback: 'blocking',
  // }
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
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout navigation={navigation}>
      <NextSeo
        title={page?.Title}
        description={page?.description}
        openGraph={{
          title: page?.Title,
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
      <h1 className="text-xl">{page?.Title}</h1>
      <Markdown content={page?.content} />
      {preview && <ExitPreviewButton />}
    </Layout>
  )
}

export default PagesPage
