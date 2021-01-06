import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { useHideOnScroll } from '@lib/hooks/use-hide-on-scroll'

const Nav = ({ categories }: { categories: TCategory[] }) => {
  const router = useRouter()
  const { isHidden } = useHideOnScroll()
  return (
    <nav
      className={cn(
        'overflow-x-scroll sticky flex whitespace-nowrap px-4 top-14 z-10 bg-primary scrollbar-none transform transition-transform duration-300',
        'md:justify-center',
        isHidden ? '-translate-y-full' : 'translate-y-0'
      )}
    >
      <Link href={`/`}>
        <a
          className={cn(
            'uppercase px-4 pt-1 pb-2 text-sm font-bold',
            router.pathname === '/' && 'border-b-2'
          )}
        >
          HOME
        </a>
      </Link>
      {categories.map((category) => (
        <Link href={`/${category.slug}`} key={category.slug}>
          <a
            className={cn(
              'uppercase pt-1 pb-2 px-4 text-sm font-bold ',
              router.query.slug === category.slug && 'border-b-2'
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
