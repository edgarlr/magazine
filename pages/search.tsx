import { useRouter } from 'next/router'
import { useSearch } from '@lib/hooks/use-search'
import { ArticlesList } from '@components/article'
import { fetchAPI } from '@lib/api'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { filterQueries } from '@lib/search'
import { Layout } from '@components/core'

export async function getStaticProps() {
  const categories: TCategory[] = await fetchAPI('/categories')
  return { props: { categories } }
}

function SearchPage({
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { query } = useRouter()
  const { q, category, sort } = query
  const { isLoading, data } = useSearch<TArticle>('/articles', query)
  return (
    <Layout>
      <h4>&quot;{query.q}&quot; in search</h4>
      {isLoading && <p>Loading...</p>}
      {data && data.length !== 0 ? (
        <ArticlesList articles={data} title="Recent Articles" />
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
