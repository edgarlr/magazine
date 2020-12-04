import { InferGetStaticPropsType } from 'next'
import { ArticlesCarousel, ArticlesList } from '@components/article'
import { fetchAPI } from '@lib/api'

export async function getStaticProps() {
  const articles: TArticle[] = await fetchAPI('/articles')
  return { props: { articles } }
}

function Home({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <ArticlesCarousel title="Top stories" articles={articles} />
      <ArticlesList articles={articles} title="Recent" />
    </>
  )
}

export default Home
