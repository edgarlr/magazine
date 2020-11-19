import { Layout } from '@components/core'
import { ArticlesList } from '@components/articles'
import { articles } from '@lib/mocks/article-list'
import { IconList } from '@components/icons'
import Hero from '@components/core/Hero/Hero'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { fetchAPI } from '@lib/api'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

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
  return {
    props: {
      category,
      categories,
    },
  }
}

function CategoryPage({
  category,
}: // categories,
InferGetStaticPropsType<typeof getStaticProps>) {
  const { isFallback } = useRouter()

  if (!isFallback && !category?.slug) {
    return <ErrorPage statusCode={404} />
  }

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
