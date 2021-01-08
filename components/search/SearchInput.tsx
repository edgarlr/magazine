import { useRouter } from 'next/router'
// import cn from 'classnames'
// import { useState } from 'react'
import s from './SearchInput.module.css'
import Close from '@components/icons/Close'
import Filters from '@components/icons/Filters'
import Link from 'next/link'

const SearchInput = () => {
  // const [showSearch, setShowSearch] = useState(true)
  const router = useRouter()
  return (
    <label
      htmlFor="search"
      className="sticky top-6 z-20 mb-6 flex bg-primary border border-secondary w-full py-2 px-1 rounded-xl focus-within:border-primary"
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
        <Filters />
      </span>
      <Link href="/">
        <span className={s.searchClear}>
          <Close />
        </span>
      </Link>
    </label>
  )
}

export default SearchInput
