import Link from 'next/link'

const Nav = ({ categories }: { categories: TCategory[] }) => {
  return (
    <nav>
      {categories.map((category) => (
        <Link href={`/${category.slug}`} key={category.slug}>
          <a>{category.title}</a>
        </Link>
      ))}
    </nav>
  )
}

export default Nav
