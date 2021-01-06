import Link from 'next/link'
import SocialUrls from './SocialUrls'
import ThemeSwitch from '../ThemeSwitch'

const Footer = ({ categories, pages }: TNavigation) => {
  return (
    <footer className="block bottom-0 left-0 right-0 bg-primary-2 px-4 py-6  md:px-32 lg:px-48 xl:px-1/5">
      <h6 className="mt-2">Sections</h6>
      <ul>
        {categories.map((category) => (
          <Link href={`/${category.slug}`} key={category.slug}>
            <li>{category.title}</li>
          </Link>
        ))}
      </ul>

      <Link href="/contributors">
        <h6 className="mt-2">Contributors</h6>
      </Link>

      {pages.map((page) => (
        <Link href={`/pages/${page.slug}`} key={page.slug}>
          <h6 className="my-4">{page.Title}</h6>
        </Link>
      ))}

      <SocialUrls />

      <ThemeSwitch />
    </footer>
  )
}

export default Footer
