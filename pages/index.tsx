import { InferGetStaticPropsType } from 'next'
import { ArticlesCarousel, ArticlesList } from '@components/article'
import { fetchAPI, getNavigation } from '@lib/api'
import { Layout } from '@components/common/Layout'
import { useMediaQuery } from '@lib/hooks/use-media-queries'
import ArticlesHero from '@components/article/ArticlesHero/ArticlesHero'

export async function getStaticProps() {
  const articles: TArticle[] = await fetchAPI('/articles')
  const navigation: TNavigation = await getNavigation()

  return { props: { articles, navigation } }
}

function Home({
  articles,
  navigation,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isTablet = useMediaQuery(1023)

  return (
    <Layout navigation={navigation}>
      {isTablet ? (
        //Tablet and smaller devices
        <ArticlesCarousel title="Top stories" articles={articles.slice(0, 4)} />
      ) : (
        <ArticlesHero articles={articles.slice(0, 4)} />
      )}

      <ArticlesList articles={articles.slice(5, 10)} title="Recent" />

      <div className="lg:py-24 lg:flex lg:w-full lg:gap-28 lg:mx-auto">
        <ArticlesList
          articles={articles.slice(0, 5)}
          title="Featured"
          variant="top"
          className="lg:w-1/2"
        />
        <ArticlesList
          articles={articles.slice(6, 11)}
          title="Popular"
          variant="top"
          className="lg:w-1/2"
        />
      </div>

      <ArticlesList articles={articles.slice(10, 15)} title="More articles" />
    </Layout>
  )
}

export default Home
