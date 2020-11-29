import { useState } from 'react'
import Link from 'next/link'
import { IconBookmark, IconSearch, IconClose } from '@components/icons'
import cn from 'classnames'
import s from './Header.module.css'

const Header = () => {
  const [showSearch, setShowSearch] = useState(false)
  return (
    <header className="fixed bg-primary h-14 top-0 left-0 right-0 px-4 flex justify-between items-center z-20">
      <Link href="/lists">
        <a>
          <IconBookmark />
        </a>
      </Link>
      <Link href="/">
        <a className="font-serif text-3xl">Magazine</a>
      </Link>
      <button onClick={() => setShowSearch(!showSearch)}>
        {showSearch ? <IconClose /> : <IconSearch />}
      </button>
      <div className={cn(s.searchContainer, showSearch ? 'flex' : 'hidden')}>
        <label htmlFor="search" className={s.searchLabel}>
          <span className={s.searchIcon}>
            <IconSearch />
          </span>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Buscar..."
            className={s.searchInput}
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
