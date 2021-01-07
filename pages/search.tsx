import { useRouter } from 'next/router'
// import { useSearch } from '@lib/hooks/use-search'
import { ArticlesList } from '@components/article'
import { fetchAPI } from '@lib/api'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { filterQueries } from '@lib/search'
import { Layout } from '@components/common/Layout'

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
    <Layout>
      <h4>&quot;{query.q}&quot; in search</h4>
      {/* {isLoading && <p>Loading...</p>} */}
      {sortedArticles && sortedArticles.length !== 0 ? (
        <ArticlesList articles={sortedArticles} title="Recent Articles" />
      ) : (
        <p>we couldn&apos;t find anything</p>
      )}
      <h3>Sort by</h3>
      <ul>
        <Link
          href={{
            pathname: '/search',
            query: filterQueries({ q, category, sort: 'asc' }),
          }}
        >
          <li>asc</li>
        </Link>
        <Link
          href={{
            pathname: '/search',
            query: filterQueries({ q, category, sort: 'desc' }),
          }}
        >
          <li>desc</li>
        </Link>
      </ul>
      <ul>
        {categories.map((category) => (
          <Link
            href={{
              pathname: '/search',
              query: filterQueries({ q, category: category.slug, sort }),
            }}
            key={category.slug}
          >
            <li>{category.title}</li>
          </Link>
        ))}
      </ul>
      <Link
        href={{
          pathname: '/search',
          query: { q },
        }}
      >
        <li>clear filters</li>
      </Link>
    </Layout>
  )
}

export default SearchPage
