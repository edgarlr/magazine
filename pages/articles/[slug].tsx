import { fetchAPI, getMediaURL, getNavigation } from '@lib/api'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { Article } from '@components/article'
import { NextSeo } from 'next-seo'
import ExitPreviewButton from '@components/common/ExitPreviewButton'
import { Layout } from '@components/common/Layout'
import ArrowLeft from '@components/icons/ArrowLeft'
import Custom404 from 'pages/404'
import { Button } from '@components/ui/Button'

export async function getStaticPaths() {
  const articles: TArticle[] = await fetchAPI('/articles')

  return {
    paths: articles.map((article) => `/articles/${article.slug}`),
    fallback: true, // Needs to be `true` to enable preview mode
  }

  // If you have too many articles you can pass no paths at all an generate all the pages at request time.
  // Read more on https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation

  // return {
  //   paths: [],
  //   fallback: 'blocking', `blocking` insted of `true` for better SEO https://nextjs.org/docs/basic-features/data-fetching#fallback-blocking
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
    return <Custom404 />
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
      <Button ariaLabel="Go back" href="/" className="-ml-2">
        <ArrowLeft />
      </Button>
      <Article article={article} />
      {preview && <ExitPreviewButton />}
    </Layout>
  )
}

export default ArticlePage
