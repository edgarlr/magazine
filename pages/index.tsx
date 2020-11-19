// import { useTheme } from 'next-themes'
import { InferGetStaticPropsType } from 'next'
import { Layout, Nav } from '@components/core'
import { ArticlesCarousel } from '@components/articles'
import { articles } from '@lib/mocks/article-list'
import { ArticlesList } from '@components/articles'
import { fetchAPI } from '@lib/api'

export async function getStaticProps() {
  const categories: TCategory[] = await fetchAPI('/categories')

  return {
    props: {
      categories,
    },
  }
}

function Home({ categories }: InferGetStaticPropsType<typeof getStaticProps>) {
  // const { setTheme } = useTheme()

  return (
    <Layout>
      <ArticlesCarousel title="Top stories" articles={articles} />
      <Nav categories={categories} />
      <ArticlesList articles={articles} />
      {/* <button onClick={() => setTheme('dark')}>Light Mode</button>
        <button onClick={() => setTheme('light')}>Light Mode</button> */}
    </Layout>
  )
}

export default Home
