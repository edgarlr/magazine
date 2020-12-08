import { IconTwitter } from '@components/icons'
import ExternalLink from '@components/ui/Link/ExternalLink'

function SocialMediaUrls({ urls }: { urls: TContributor['urls'] }) {
  if (!urls) return null
  const { twitter } = urls
  return (
    <>
      {twitter && (
        <ExternalLink
          className="text-secondary flex items-center pt-1"
          to={`https://twitter.com/${twitter}`}
        >
          <IconTwitter width="20" height="20" />
          <p className="ml-1">{twitter}</p>
        </ExternalLink>
      )}
    </>
  )
}

export default SocialMediaUrls
