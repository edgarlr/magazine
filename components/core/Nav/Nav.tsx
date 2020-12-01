import Link from 'next/link'

const Nav = ({ categories }: { categories: TCategory[] }) => {
  return (
    <nav className="overflow-x-scroll sticky flex h-14 items-center whitespace-nowrap top-14 px-4 z-10 bg-primary scrollbar-none">
      {categories.map((category) => (
        <Link href={`/${category.slug}`} key={category.slug}>
          <a className="uppercase py-2 px-4 text-sm font-bold">
            {category.title}
          </a>
        </Link>
      ))}
    </nav>
  )
}

export default Nav
