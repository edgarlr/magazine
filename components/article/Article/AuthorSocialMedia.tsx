import Facebook from '@components/icons/Facebook'
import Instagram from '@components/icons/Instagram'
import Twitter from '@components/icons/Twitter'
import ExternalLink from '@components/ui/Link/ExternalLink'

function AuthorSocialMedia({ urls }: { urls: TContributor['urls'] }) {
  if (!urls) return null
  const { twitter, instagram, facebook } = urls

  // only return one social media

  if (twitter) {
    return (
      <ExternalLink
        className="text-secondary flex items-center pt-1"
        to={`https://twitter.com/${twitter}`}
        ariaLabel="Author's twitter"
      >
        <Twitter width="20" height="20" />
        <p className="ml-1">{twitter}</p>
      </ExternalLink>
    )
  }

  if (instagram) {
    return (
      <ExternalLink
        className="text-secondary flex items-center pt-1"
        to={`https://instagram.com/${instagram}`}
        ariaLabel="Author's instagram"
      >
        <Instagram width="20" height="20" />
        <p className="ml-1">{instagram}</p>
      </ExternalLink>
    )
  }

  if (facebook) {
    return (
      <ExternalLink
        className="text-secondary flex items-center pt-1"
        to={`https://facebook.com/${facebook}`}
        ariaLabel="Author's facebook"
      >
        <Facebook width="20" height="20" />
        <p className="ml-1">{facebook}</p>
      </ExternalLink>
    )
  }

  return null
}

export default AuthorSocialMedia
