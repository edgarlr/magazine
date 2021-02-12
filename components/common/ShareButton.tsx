import Copy from '@components/icons/Copy'
import Facebook from '@components/icons/Facebook'
import Share from '@components/icons/Share'
import Twitter from '@components/icons/Twitter'
import { Menu, MenuButton, MenuWrapper, MenuItem } from '@components/ui/Menu'
import { SITE_URL, SOCIAL_USERNAMES } from '@lib/constants'
import { useToast } from '@lib/hooks/use-toast'
import { MouseEvent } from 'react'

type Props = {
  title: string
  path: string
  message?: string
}

const ShareButton = ({ title, path, message = 'Chech this link' }: Props) => {
  const { addToast } = useToast()

  const fullURL = `${SITE_URL}${path}`

  const onShareClick = (e: MouseEvent) => {
    e.preventDefault()
    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: message,
          url: fullURL,
        })
        .catch(console.error)
    }
  }

  const onCopyToClipboard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(fullURL)
        .then(() => addToast('Copied to the clipboard!'))
        .catch(console.error)
    }
  }

  const onFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${fullURL}`,
      'facebook-share-dialog',
      'width=800,height=600'
    )
  }

  return (
    <MenuWrapper>
      <MenuButton ariaLabel="Share" onClick={onShareClick}>
        <Share />
      </MenuButton>
      <Menu title="Share">
        <MenuItem
          subfix={<Facebook width={20} height={20} />}
          onClick={onFacebookShare}
        >
          Share on Facebook
        </MenuItem>
        <MenuItem
          subfix={<Twitter width={20} height={20} />}
          href={`https://twitter.com/intent/tweet?url=${fullURL}&text=${title}${
            SOCIAL_USERNAMES.twitter ? `&via=${SOCIAL_USERNAMES.twitter}` : ''
          }`}
          external
        >
          Share on Twitter
        </MenuItem>
        <MenuItem unstyled>
          <button
            className="w-11/12 my-0 mx-auto border rounded-xl overflow-hidden whitespace-nowrap overflow-ellipsis relative text-sm py-4 pl-2 pr-9 opacity-70 transition-opacity hover:opacity-100 md:py-2"
            onClick={onCopyToClipboard}
            aria-label="Copy to clipboard"
            title={fullURL}
          >
            {fullURL}
            <span className="text-primary absolute right-3 leading-none">
              <Copy width={16} height={16} />
            </span>
          </button>
        </MenuItem>
      </Menu>
    </MenuWrapper>
  )
}

export default ShareButton
