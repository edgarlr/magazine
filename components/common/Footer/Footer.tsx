import Link from 'next/link'
import SocialUrls from './SocialUrls'
import ThemeSwitch from '../ThemeSwitch'
import s from './Footer.module.css'

const Footer = ({ categories, pages }: TNavigation) => {
  return (
    <footer className="block bottom-0 left-0 right-0 bg-primary-05 px-4 py-6 md:px-32 lg:px-48 xl:px-1/5">
      <nav className="flex flex-col  mt-6 mb-6 flex-wrap md:flex-row md:justify-between">
        <div>
          <h3 className={s.heading}>Sections</h3>
          <ul className={s.ul}>
            {categories.map((category) => (
              <Link href={`/${category.slug}`} key={category.slug}>
                <li>
                  <a className={s.link}>{category.title}</a>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={s.heading}>About</h3>
          <ul className={s.ul}>
            <Link href="/contributors">
              <li>
                <a className={s.link}>Contributors</a>
              </li>
            </Link>

            <Link href="/contributors">
              <li>
                <a className={s.link}>Contact</a>
              </li>
            </Link>
          </ul>
        </div>

        <div>
          <h3 className={s.heading}>Other</h3>
          <ul className={s.ul}>
            {pages.map((page) => (
              <Link href={`/pages/${page.slug}`} key={page.slug}>
                <li>
                  <a className={s.link}>{page.Title}</a>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>

      <SocialUrls />

      <ThemeSwitch />
    </footer>
  )
}

export default Footer
