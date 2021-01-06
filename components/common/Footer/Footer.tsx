import Link from 'next/link'
import SocialUrls from './SocialUrls'
import ThemeSwitch from '../ThemeSwitch'

const Footer = ({ categories, pages }: TNavigation) => {
  return (
    <footer className="block bottom-0 left-0 right-0 bg-primary-2 px-4 py-6  md:px-32 lg:px-48 xl:px-1/5">
      <p className="mt-2">Sections</p>
      <ul>
        {categories.map((category) => (
          <Link href={`/${category.slug}`} key={category.slug}>
            <li>{category.title}</li>
          </Link>
        ))}
      </ul>

      <Link href="/contributors">
        <p className="mt-2">Contributors</p>
      </Link>

      <ul>
        {pages.map((page) => (
          <Link href={`/pages/${page.slug}`} key={page.slug}>
            <li className="my-4">{page.Title}</li>
          </Link>
        ))}
      </ul>

      <SocialUrls />

      <ThemeSwitch />
    </footer>
  )
}

export default Footer
