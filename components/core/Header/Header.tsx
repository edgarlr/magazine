import { useState } from 'react'
import Link from 'next/link'
import { IconBookmark, IconSearch, IconClose } from '@components/icons'
import cn from 'classnames'
import s from './Header.module.css'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const [showSearch, setShowSearch] = useState(false)
  return (
    <header className="fixed bg-primary h-14 top-0 left-0 right-0 px-4 flex justify-between items-center z-20 ">
      <Link href="/lists">
        <a>
          <IconBookmark />
        </a>
      </Link>
      <Link href="/">
        <a className="serif text-3xl">Magazine</a>
      </Link>
      <button onClick={() => setShowSearch(!showSearch)}>
        {showSearch ? <IconClose /> : <IconSearch />}
      </button>
      <div className={cn(s.searchContainer, showSearch ? 'flex' : 'hidden')}>
        <label
          htmlFor="search"
          className="flex border border-secondary w-full py-2 px-3 rounded-xl focus-within:border-primary"
        >
          <span className="absolute">
            <IconSearch />
          </span>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Buscar..."
            className="bg-transparent outline-none w-full pr-2 pl-10 search-btn-none"
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
          <span className={cn(s.searchClear, showSearch ? 'flex' : 'hidden')}>
            clear
          </span>
        </label>
      </div>
    </header>
  )
}

export default Header
