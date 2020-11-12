import Link from 'next/link'

const Nav = ({ categories }: { categories: TCategory[] }) => {
  return (
    <nav className="overflow-x-scroll">
      {categories.map((category) => (
        <Link href={`/${category.slug}`} key={category.slug}>
          <a className="uppercase py-2 px-4">{category.title}</a>
        </Link>
      ))}
    </nav>
  )
}

export default Nav
