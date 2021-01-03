import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

const Nav = ({ categories }: { categories: TCategory[] }) => {
  const router = useRouter()
  return (
    <nav className="overflow-x-scroll sticky flex h-14 items-center whitespace-nowrap top-14 px-4 z-10 bg-primary scrollbar-none standalone:top-16 pt-2">
      <Link href={`/`}>
        <a
          className={cn(
            'uppercase py-2 px-4 text-sm font-bold',
            router.pathname === '/' && 'underline'
          )}
        >
          HOME
        </a>
      </Link>
      {categories.map((category) => (
        <Link href={`/${category.slug}`} key={category.slug}>
          <a
            className={cn(
              'uppercase py-2 px-4 text-sm font-bold',
              router.query.slug === category.slug && 'underline'
            )}
          >
            {category.title}
          </a>
        </Link>
      ))}
    </nav>
  )
}

export default Nav
