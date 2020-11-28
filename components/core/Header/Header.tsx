import Link from 'next/link'
import { IconBookmark, IconSearch } from '@components/icons'

const Header = () => {
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
      <Link href="/">
        <a>
          <IconSearch />
        </a>
      </Link>
    </header>
  )
}

export default Header
