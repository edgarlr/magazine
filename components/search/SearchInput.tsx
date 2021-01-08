import { useRouter } from 'next/router'
import cn from 'classnames'
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
      <div className="absolute z-20 bg-primary left-0 right-0 px-2 pt-2 pb-6 border-b border-secondary">
        <p className={s.filterHeading}>SORT BY</p>
        <ul>
          <Link
            href={{
              pathname: '/search',
              query: filterQueries({ q, category, sort: 'asc' }),
            }}
          >
            <li
              className={cn(s.filter, {
                [s.filterActive]: !sort || sort === 'asc',
              })}
            >
              Newest
            </li>
          </Link>
          <Link
            href={{
              pathname: '/search',
              query: filterQueries({ q, category, sort: 'desc' }),
            }}
          >
            <li
              className={cn(s.filter, {
                [s.filterActive]: sort === 'desc',
              })}
            >
              Oldest
            </li>
          </Link>
        </ul>
        <p className={s.filterHeading}>FILTER BY</p>
        <ul>
          <Link
            href={{
              pathname: '/search',
              query: { q, sort },
            }}
          >
            <li
              className={cn(s.filter, {
                [s.filterActive]: !category,
              })}
            >
              All Categories
            </li>
          </Link>
          {categories.map((c) => (
            <Link
              href={{
                pathname: '/search',
                query: filterQueries({ q, category: c.slug, sort }),
              }}
              key={c.slug}
            >
              <li
                className={cn(s.filter, {
                  [s.filterActive]: category === c.slug,
                })}
              >
                {c.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="sticky bg-primary top-0 py-4 z-20 mb-6 ">
      <label
        htmlFor="search"
        className="flex border border-secondary w-full py-2 px-1 rounded-xl focus-within:border-primary"
      >
        <input
          type="search"
          inputMode="search"
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

        <Button
          className={s.searchButton}
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filters />
        </Button>

        <Button className={s.searchButton} onClick={() => router.push('/')}>
          <Close />
        </Button>
      </label>
      {showFilters && <SearchFilters />}
    </div>
  )
}

export default SearchInput
