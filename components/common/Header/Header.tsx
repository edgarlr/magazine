import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import s from './Header.module.css'
import { useRouter } from 'next/router'
import Close from '@components/icons/Close'
import Search from '@components/icons/Search'
import Bookmark from '@components/icons/Bookmark'
import { Button } from '@components/ui/Button'
import { useIsMobile } from '@lib/hooks/use-media-queries'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

const Header = () => {
  const router = useRouter()
  const [showSearch, setShowSearch] = useState(false)
  const isMobile = useIsMobile()

  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (searchRef.current && isMobile) {
      if (showSearch) {
        disableBodyScroll(searchRef.current)
      } else {
        enableBodyScroll(searchRef.current)
      }
    }
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [showSearch, isMobile])

  return (
    <header
      ref={searchRef}
      className="fixed bg-secondary h-14 top-0 left-0 right-0 px-4 flex justify-between items-center z-20 "
    >
      <Button href="/lists" ariaLabel="My bookmarks">
        <Bookmark />
      </Button>
      <Link href="/">
        <a className="serif text-2xl">Magazine</a>
      </Link>
      <Button onClick={() => setShowSearch(true)} ariaLabel="Search">
        {showSearch ? <Close /> : <Search />}
      </Button>

      <div className={cn(s.searchContainer, showSearch ? 'flex' : 'hidden')}>
        <label className="flex items-center border-b w-full py-2 pl-3 focus-within:border-primary md:pb-0">
          <span className="absolute">
            <Search />
          </span>
          <input
            type="search"
            inputMode="search"
            name="search"
            id="search"
            placeholder="Search..."
            className="bg-transparent outline-none w-full py-2 pr-2 pl-9 search-btn-none lg:text-sm"
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
          <Button onClick={() => setShowSearch(false)} ariaLabel="Close search">
            <Close />
          </Button>
        </label>
      </div>
    </header>
  )
}

export default Header
