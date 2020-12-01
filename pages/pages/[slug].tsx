import { fetchAPI, getMediaURL } from '@lib/api'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import ReactMarkdown from 'react-markdown'
import { NextSeo } from 'next-seo'

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
}: GetStaticPropsContext<{ slug: string }>) {
  const page: TPage = (await fetchAPI(`/pages?slug=${params?.slug}`))[0]

  // No props will trigger a 404
  if (!page) return { props: {} }
  return { props: { page } }
}

function PagesPage({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (!isFallback && !page) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
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
      <section className="markdown">
        <ReactMarkdown>{page?.content || ''}</ReactMarkdown>
      </section>
    </>
  )
}

export default PagesPage
