import Link from 'next/link'
import SocialUrls from './SocialUrls'
import ThemeSwitch from '../ThemeSwitch'
import s from './Footer.module.css'
import ExternalLink from '@components/ui/Link/ExternalLink'
import Github from '@components/icons/Github'

const Footer = ({ categories, pages }: TNavigation) => {
  return (
    <footer className="block bottom-0 left-0 right-0 bg-primary-05 px-6 py-6 md:px-32 lg:px-48 xl:px-1/5">
      <nav
        className="flex flex-col  mt-6 mb-6 flex-wrap md:flex-row md:justify-between"
        aria-label="Footer Nav"
      >
        <div>
          <h3 className={s.heading}>Sections</h3>
          <ul className={s.ul}>
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/${category.slug}`}>
                  <a className={s.link}>{category.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={s.heading}>About</h3>
          <ul className={s.ul}>
            <li>
              <Link href="/contributors">
                <a className={s.link}>Contributors</a>
              </Link>
            </li>

            <li>
              <Link href="/contributors">
                <a className={s.link}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={s.heading}>Other</h3>
          <ul className={s.ul}>
            {pages.map((page) => (
              <li key={page.slug}>
                <Link href={`/pages/${page.slug}`}>
                  <a className={s.link}>{page.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <SocialUrls />

      <ThemeSwitch />

      <ExternalLink
        to="https://github.com/edgarlr/magazine"
        ariaLabel="Link to source coude"
        className="mx-auto flex items-center w-max pt-4 py-2 opacity-80 hover:opacity-100 text-sm"
      >
        <span className="mr-2">
          <Github width="16" height="16" />
        </span>
        Source
      </ExternalLink>
    </footer>
  )
}

export default Footer
