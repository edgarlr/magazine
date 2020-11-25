import { IconTwitter } from '@components/icons'
import ExternalLink from '@components/ui/Link/ExternalLink'

type Props = {
  urls: {
    id: number
    instagram: string | null
    twitter: string | null
  }
}

function SocialMediaLink({ urls }: Props) {
  if (urls.twitter)
    return (
      <ExternalLink
        className="text-secondary flex items-center pt-1"
        to={`https://twitter.com/${urls.twitter}`}
      >
        <IconTwitter width="20" height="20" />
        <p className="ml-1">{urls.twitter}</p>
      </ExternalLink>
    )
  return null
}

export default SocialMediaLink
