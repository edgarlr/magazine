import Twitter from '@components/icons/Twitter'
import ExternalLink from '@components/ui/Link/ExternalLink'
import { SOCIAL_USERNAMES } from '@lib/constants'

const SocialUrls = () => {
  const { twitter, instagram, facebook, youtube, linkedin } = SOCIAL_USERNAMES
  return (
    <ul className="flex">
      {twitter && (
        <li>
          <ExternalLink to={`https://twitter.com/${twitter}`}>
            <Twitter />
          </ExternalLink>
        </li>
      )}
      {instagram && (
        <li>
          <ExternalLink to={`https://instagram.com/${instagram}`}>
            <Twitter />
          </ExternalLink>
        </li>
      )}
      {facebook && (
        <li>
          <ExternalLink to={`https://facebook.com/${facebook}`}>
            <Twitter />
          </ExternalLink>
        </li>
      )}
      {youtube && (
        <li>
          <ExternalLink to={`https://youtube.com/${youtube}`}>
            <Twitter />
          </ExternalLink>
        </li>
      )}
      {linkedin && (
        <li>
          <ExternalLink to={`https://linkedin.com/${linkedin}`}>
            <Twitter />
          </ExternalLink>
        </li>
      )}
    </ul>
  )
}

export default SocialUrls
