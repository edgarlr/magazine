import Facebook from '@components/icons/Facebook'
import Instagram from '@components/icons/Instagram'
import Linkedin from '@components/icons/Linkedin'
import Twitter from '@components/icons/Twitter'
import Youtube from '@components/icons/Youtube'
import ExternalLink from '@components/ui/Link/ExternalLink'
import { SOCIAL_USERNAMES } from '@lib/constants'

const SocialUrls = () => {
  const { twitter, instagram, facebook, youtube, linkedin } = SOCIAL_USERNAMES

  return (
    <ul className="flex py-6 justify-center">
      {twitter && (
        <li className="px-4">
          <ExternalLink
            to={`https://twitter.com/${twitter}`}
            ariaLabel="Twitter"
          >
            <Twitter width="20" height="20" />
          </ExternalLink>
        </li>
      )}
      {instagram && (
        <li className="px-4">
          <ExternalLink
            to={`https://instagram.com/${instagram}`}
            ariaLabel="Instagram"
          >
            <Instagram width="20" height="20" />
          </ExternalLink>
        </li>
      )}
      {facebook && (
        <li className="px-4">
          <ExternalLink
            to={`https://facebook.com/${facebook}`}
            ariaLabel="Facebook"
          >
            <Facebook width="20" height="20" />
          </ExternalLink>
        </li>
      )}
      {youtube && (
        <li className="px-4">
          <ExternalLink
            to={`https://youtube.com/user/${youtube}`}
            ariaLabel="Youtube"
          >
            <Youtube width="20" height="20" />
          </ExternalLink>
        </li>
      )}
      {linkedin && (
        <li className="px-4">
          <ExternalLink
            to={`https://linkedin.com/in/${linkedin}`}
            ariaLabel="Linkedin"
          >
            <Linkedin width="20" height="20" />
          </ExternalLink>
        </li>
      )}
    </ul>
  )
}

export default SocialUrls
