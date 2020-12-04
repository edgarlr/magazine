import { SocialLinks } from '../SocialLinks'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

type Props = {
  categories: TCategory[]
  pages: TPage[]
  socialLinks: TGlobal['social_links']
}

const Footer = ({ categories, pages, socialLinks }: Props) => {
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

      <SocialLinks socialLinks={socialLinks} />

      <ThemeSwitch />
    </footer>
  )
}

export default Footer
