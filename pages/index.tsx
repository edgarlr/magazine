import { InferGetStaticPropsType } from 'next'
import { ArticlesCarousel, ArticlesList } from '@components/article'
import { fetchAPI, getNavigation } from '@lib/api'
import { Layout } from '@components/common/Layout'

export async function getStaticProps() {
  const articles: TArticle[] = await fetchAPI('/articles')
  const navigation: TNavigation = await getNavigation()

  return { props: { articles, navigation } }
}

function Home({
  articles,
  navigation,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout navigation={navigation}>
      <ArticlesCarousel title="Top stories" articles={articles} />
      <ArticlesList articles={articles} title="Recent" />

      <div className="lg:py-24 lg:flex lg:gap-28 lg:mx-auto">
        <ArticlesList
          articles={articles}
          title="Articulos Principales"
          variant="top"
        />
        <ArticlesList
          articles={articles}
          title="Artículos Más leidos"
          variant="top"
        />
      </div>
    </Layout>
  )
}

export default Home
