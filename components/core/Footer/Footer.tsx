import Twitter from '@components/icons/Twitter'
import ExternalLink from '@components/ui/Link/ExternalLink'

type Props = {
  categories: TCategory[]
  pages: TPage[]
  global: TGlobal
}

const Footer = ({ categories, pages, global }: Props) => {
  return (
    <footer>
      <h6 className="text-serif">Sections</h6>
      <ul>
        {categories.map((category) => (
          <li key={category.slug}>{category.title}</li>
        ))}
      </ul>

      <h6>Contributors</h6>

      {pages.map((page) => (
        <h6 key={page.slug}>{page.Title}</h6>
      ))}

      <ul>
        <ExternalLink to={`https://twitter.com/${global.social_links.twitter}`}>
          <Twitter />
        </ExternalLink>
      </ul>
    </footer>
  )
}

export default Footer
