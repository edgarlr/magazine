import { useRouter } from 'next/router'
// import { useSearch } from '@lib/hooks/use-search'
import { ArticlesList } from '@components/article'
import { fetchAPI } from '@lib/api'
import { InferGetStaticPropsType } from 'next'

import SearchInput from '@components/search/SearchInput'

export async function getStaticProps() {
  const categories: TCategory[] = await fetchAPI('/categories')
  const articles: TArticle[] = await fetchAPI('/articles')
  return { props: { categories, articles } }
}

function SearchPage({
  categories,
  articles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { query } = useRouter()
  const { q, category, sort } = query

  // This hook should work with the API
  // const { isLoading, data } = useSearch<TArticle>('/articles', query)

  // I'm using a filter implementation due heroku sleep problem
  const filteredArticles = articles.filter((a: TArticle) => {
    const stringQuery = decodeURIComponent(q as string).toLowerCase()
    if (category) {
      return (
        a.title.toLowerCase().includes(stringQuery) &&
        a.category.slug === decodeURIComponent(category as string)
      )
    }
    return a.title.toLowerCase().includes(stringQuery)
  })

  const sortedArticles = filteredArticles.sort((a: TArticle, b: TArticle) => {
    if (sort === 'desc')
      return a.published_at < b.published_at
        ? 1
        : a.published_at > b.published_at
        ? -1
        : 0
    return a.published_at > b.published_at
      ? 1
      : a.published_at < b.published_at
      ? -1
      : 0
  })

  return (
    <main className="min-h-screen px-4 pt-6 pb-20 flex flex-col mx-auto md:w-3/4 lg:w-2/3 xl:w-7/12">
      <SearchInput categories={categories} />

      {/* {isLoading && <p>Loading...</p>} */}
      {sortedArticles && sortedArticles.length !== 0 ? (
        <ArticlesList
          articles={sortedArticles}
          title={`${sortedArticles.length} ${
            sortedArticles.length > 1 ? 'results' : 'result'
          }`}
        />
      ) : (
        <p>we couldn&apos;t find anything</p>
      )}
    </main>
  )
}

export default SearchPage
