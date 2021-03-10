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
        className="text-primary-60 flex items-center pt-1"
        to={`https://twitter.com/${twitter}`}
        ariaLabel="Author's twitter"
      >
        <Twitter width="20" height="20" />
        <span className="ml-1 text-sm">{twitter}</span>
      </ExternalLink>
    )
  }

  if (instagram) {
    return (
      <ExternalLink
        className="text-primary-60 flex items-center pt-1"
        to={`https://instagram.com/${instagram}`}
        ariaLabel="Author's instagram"
      >
        <Instagram width="20" height="20" />
        <span className="ml-1 text-sm">{instagram}</span>
      </ExternalLink>
    )
  }

  if (facebook) {
    return (
      <ExternalLink
        className="text-primary-60 flex items-center pt-1"
        to={`https://facebook.com/${facebook}`}
        ariaLabel="Author's facebook"
      >
        <Facebook width="20" height="20" />
        <span className="ml-1 text-sm">{facebook}</span>
      </ExternalLink>
    )
  }

  return null
}

export default AuthorSocialMedia
