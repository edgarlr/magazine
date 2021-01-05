import { ArticlesList } from '@components/article'
import { Hero } from '@components/common/Hero'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { fetchAPI, getMediaURL, getNavigation } from '@lib/api'
import { NextSeo } from 'next-seo'
import { Layout } from '@components/common/Layout'

export async function getStaticPaths() {
  const categories: TCategory[] = await fetchAPI('/categories')
  return {
    paths: categories.map((category) => `/${category.slug}`),
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  const category: TCategory = (
    await fetchAPI(`/categories?slug=${params?.slug}`)
  )[0]

  const articles: TArticle[] = await fetchAPI(
    `/articles?category.slug=${params?.slug}`
  )
  const navigation: TNavigation = await getNavigation()

  return {
    props: {
      category,
      navigation,
      articles,
    },
  }
}

function CategoryPage({
  category,
  articles,
  navigation,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout navigation={navigation}>
      <NextSeo
        title={category.title}
        description={category.description}
        openGraph={{
          title: category.title,
          description: category.description,
          // Only include OG image if exists
          // This will break disabling Strapi Image Optimization
          ...(category.cover && {
            images: Object.values(category.cover.formats).map((image) => {
              return {
                url: getMediaURL(image?.url),
                width: image?.width,
                height: image?.height,
              }
            }),
          }),
        }}
      />
      <Hero title={category.title} description={category.description} />
      <ArticlesList articles={articles} title="Articles" />
    </Layout>
  )
}

export default CategoryPage
