import { IconList } from '@components/icons'
import Link from 'next/link'
import s from './Nav.module.css'

const Nav = ({ categories }: { categories: TCategory[] }) => {
  return (
    <nav className={s.root}>
      {categories.map((category) => (
        <Link href={`/${category.slug}`} key={category.slug}>
          <a className="uppercase py-2 px-4 text-sm font-bold">
            {category.title}
          </a>
        </Link>
      ))}
      <button className="sticky py-2 pl-2 right-0  bg-primary">
        <IconList />
      </button>
    </nav>
  )
}

export default Nav
