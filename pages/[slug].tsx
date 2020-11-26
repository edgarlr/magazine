import { Layout } from '@components/core'
import { ArticlesList } from '@components/article'

import Hero from '@components/core/Hero/Hero'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { fetchAPI } from '@lib/api'

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
