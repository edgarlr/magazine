import { fetchAPI, getMediaURL } from '@lib/api'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Link from 'next/link'

import { Article } from '@components/article'
import { IconArrowLeft } from '@components/icons'
import { NextSeo } from 'next-seo'

export async function getStaticPaths() {
  // If you don't have too many articles you can uncomment this code and pre-build each page instead
  const articles: TArticle[] = await fetchAPI('/articles')
  return {
    paths: articles.map((article) => `/articles/${article.slug}`),
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
  const article: TArticle = (
    await fetchAPI(`/articles?slug=${params?.slug}`)
  )[0]

  // No props will trigger a 404
  if (!article) return { props: {} }
  return { props: { article } }
}

function ArticlePage({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (!isFallback && !article) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <NextSeo
        title={article?.title}
        description={article?.description}
        openGraph={{
          title: article?.title,
          description: article?.description,
          type: 'article',
          article: {
            publishedTime: article?.published_at as string,
            modifiedTime: article?.updated_at as string,
            section: article?.category.title,
            authors: [
              `'https://www.example.com/contributors/'${article?.author.slug}`,
            ],
            tags: [`${article?.category.title}`],
          },
          // Only include OG image if exists
          // This will break disabling Strapi Image Optimization
          ...(article?.cover && {
            images: Object.values(article.cover.formats).map((image) => {
              return {
                url: getMediaURL(image?.url),
                width: image?.width,
                height: image?.height,
              }
            }),
          }),
        }}
      />
      <Link href={'/'}>
        <button>
          <IconArrowLeft />
        </button>
      </Link>
      <Article article={article} />
    </>
  )
}

export default ArticlePage
