import { useRouter } from 'next/router'
// import cn from 'classnames'
import { useState } from 'react'
import s from './SearchInput.module.css'
import Close from '@components/icons/Close'
import Filters from '@components/icons/Filters'
import Link from 'next/link'
import { filterQueries } from '@lib/search'
import { Button } from '@components/ui/Button'

const SearchInput = ({ categories }: { categories: TCategory[] }) => {
  const [showFilters, setShowFilters] = useState(false)

  const router = useRouter()
  const { q, category, sort } = router.query

  const SearchFilters = () => {
    return (
      <div className="absolute z-20 bg-primary left-0 right-0 px-2 py-4 border-b">
        <p>SORT BY</p>
        <ul>
          <Link
            href={{
              pathname: '/search',
              query: filterQueries({ q, category, sort: 'asc' }),
            }}
          >
            <li className={!sort || sort === 'asc' ? 'font-bold' : ''}>asc</li>
          </Link>
          <Link
            href={{
              pathname: '/search',
              query: filterQueries({ q, category, sort: 'desc' }),
            }}
          >
            <li className={sort === 'desc' ? 'font-bold' : ''}>desc</li>
          </Link>
        </ul>
        <p className="mt-4">FILTER BY</p>
        <ul>
          <Link
            href={{
              pathname: '/search',
              query: { q, sort },
            }}
          >
            <li className={!category ? 'font-bold' : ''}>All Categories</li>
          </Link>
          {categories.map((c) => (
            <Link
              href={{
                pathname: '/search',
                query: filterQueries({ q, category: c.slug, sort }),
              }}
              key={c.slug}
            >
              <li className={category === c.slug ? 'font-bold' : ''}>
                {c.title}
              </li>
            </Link>
          ))}
        </ul>
        {/* <Link
          href={{
            pathname: '/search',
            query: { q },
          }}
        >
          <p>CLEAR FILTERS</p>
        </Link> */}
      </div>
    )
  }

  return (
    <div className="sticky top-6 z-20 mb-6 ">
      <label
        htmlFor="search"
        className="flex bg-primary border border-secondary w-full py-2 px-1 rounded-xl focus-within:border-primary"
      >
        <input
          type="search"
          name="search"
          id="search"
          defaultValue={router.query.q}
          placeholder="Buscar..."
          className="bg-transparent outline-none w-full pr-2 pl-4 search-btn-none"
          onKeyUp={(e) => {
            e.preventDefault()
            if (e.key === 'Enter') {
              const q = e.currentTarget.value
              router.push(
                {
                  pathname: '/search',
                  query: q ? { q } : {},
                },
                undefined,
                { shallow: true }
              )
            }
          }}
        />
        {/* <span className={s.searchClear}>clear</span> */}
        <span className={s.searchClear}>
          <Button onClick={() => setShowFilters(!showFilters)}>
            <Filters />
          </Button>
        </span>
        <Link href="/">
          <Button className={s.searchClear}>
            <Close />
          </Button>
        </Link>
      </label>
      {showFilters && <SearchFilters />}
    </div>
  )
}

export default SearchInput
