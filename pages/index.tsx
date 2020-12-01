// import { useTheme } from 'next-themes'
import { InferGetStaticPropsType } from 'next'
import { ArticlesCarousel, ArticlesList } from '@components/article'
import { fetchAPI } from '@lib/api'

export async function getStaticProps() {
  const categories: TCategory[] = await fetchAPI('/categories')
  const articles: TArticle[] = await fetchAPI('/articles')

  return {
    props: {
      categories,
      articles,
    },
  }
}

function Home({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {
  // const { setTheme } = useTheme()

  return (
    <>
      <ArticlesCarousel title="Top stories" articles={articles} />
      <ArticlesList articles={articles} title="Recent" />
      {/* <button onClick={() => setTheme('dark')}>Light Mode</button>
        <button onClick={() => setTheme('light')}>Light Mode</button> */}
    </>
  )
}

export default Home
