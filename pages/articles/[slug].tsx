import { fetchAPI, getMediaURL, getNavigation } from '@lib/api'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Link from 'next/link'

import { Article } from '@components/article'
import { NextSeo } from 'next-seo'
import ExitPreviewButton from '@components/common/ExitPreviewButton'
import { Layout } from '@components/common/Layout'
import ArrowLeft from '@components/icons/ArrowLeft'

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
  preview = false,
}: GetStaticPropsContext<{ slug: string }>) {
  // if is preview it will search on to the unpublished entries as well
  const article: TArticle = (
    await fetchAPI(
      `/articles?slug=${params?.slug}${
        preview ? '&_publicationState=preview' : ''
      }`
    )
  )[0]

  const navigation: TNavigation = await getNavigation()

  // No props will trigger a 404
  if (!article) return { props: {} }
  return { props: { preview, navigation, article } }
}

function ArticlePage({
  article,
  navigation,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (!isFallback && !article) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout navigation={navigation}>
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
        <a aria-label="Go back">
          <ArrowLeft />
        </a>
      </Link>
      <Article article={article} />
      {preview && <ExitPreviewButton />}
    </Layout>
  )
}

export default ArticlePage
