import { Layout } from '@components/core'
import { ArticlesList } from '@components/article'
import { IconList } from '@components/icons'
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
}: // categories,
InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Hero title={category.title} description={category.description} />
      <div className="flex justify-between">
        <p className="uppercase font-bold">Articles</p>
        <button>
          <IconList />
        </button>
      </div>
      <ArticlesList articles={articles} />
    </Layout>
  )
}

export default CategoryPage
