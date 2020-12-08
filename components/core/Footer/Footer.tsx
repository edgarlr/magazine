import { SocialUrls } from '../SocialUrls'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

type Props = {
  categories: TCategory[]
  pages: TPage[]
  socialUrls: TGlobal['social_urls']
}

const Footer = ({ categories, pages, socialUrls }: Props) => {
  return (
    <footer className="block bottom-0 left-0 right-0 bg-primary-2 px-4 py-6">
      <h6 className="mt-2">Sections</h6>
      <ul>
        {categories.map((category) => (
          <li key={category.slug}>{category.title}</li>
        ))}
      </ul>

      <h6 className="mt-2">Contributors</h6>

      {pages.map((page) => (
        <h6 className="my-2" key={page.slug}>
          {page.Title}
        </h6>
      ))}

      <SocialUrls socialUrls={socialUrls} />

      <ThemeSwitch />
    </footer>
  )
}

export default Footer
