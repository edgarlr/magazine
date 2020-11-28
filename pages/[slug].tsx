import { Layout } from '@components/core'
import { ArticlesList } from '@components/article'

import Hero from '@components/core/Hero/Hero'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { fetchAPI, getMediaURL } from '@lib/api'
import { NextSeo } from 'next-seo'

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

  const categories: TCategory[] = await fetchAPI('/categories')

  const articles: TArticle[] = await fetchAPI(
    `/articles?category.slug=${params?.slug}`
  )

  return {
    props: {
      category,
      categories,
      articles,
    },
  }
}

function CategoryPage({
  category,
  articles,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout nav={categories}>
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
      <div className="">
        <p className="uppercase">Articles</p>
        <button></button>
      </div>
      <ArticlesList articles={articles} title="Articles" />
    </Layout>
  )
}

export default CategoryPage
