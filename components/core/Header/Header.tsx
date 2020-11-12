import Link from 'next/link'
import { IconBookmark, IconSearch } from '@components/icons'

const Header = () => {
  return (
    <div className="fixed bg-primary top-0 left-0 right-0 text-center py-2 px-4 flex justify-between items-center">
      <Link href="/">
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
    </div>
  )
}

export default Header
