import Close from '@components/icons/Close'
import Facebook from '@components/icons/Facebook'
import Share from '@components/icons/Share'
import Twitter from '@components/icons/Twitter'
import { Button } from '@components/ui/Button'
import ExternalLink from '@components/ui/Link/ExternalLink'
import { SITE_URL, SOCIAL_USERNAMES } from '@lib/constants'
import { useState, useEffect, useRef, MouseEvent } from 'react'

type Props = {
  title: string
  path: string
  message?: string
}

const ShareButton = ({ title, path, message = 'Chech this link' }: Props) => {
  const [showShare, setShowShare] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const shareMenuRef = useRef<HTMLDivElement>(null)

  const fullURL = `${SITE_URL}${path}`

  const onShareClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (navigator.share) {
      navigator
        .share({
          title: title,
          text: message,
          url: fullURL,
        })
        .catch(console.error)
    } else {
      setShowShare(!showShare)
    }
  }

  const onCopyToClipboard = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(fullURL)
        .then(() => setIsCopied(true))
        .catch(console.error)
    }
  }

  useEffect(() => {
    const onOutsideClick = (e: any) => {
      if (
        shareMenuRef.current &&
        !shareMenuRef.current.contains(e.target) &&
        showShare
      ) {
        setShowShare(false)
      }
    }

    document.addEventListener('click', onOutsideClick)
    return () => document.removeEventListener('click', onOutsideClick)
  }, [showShare])

  useEffect(() => {
    // Early return when isCopied is false.
    if (!isCopied) return

    const timer = setTimeout(() => {
      setIsCopied(!isCopied)
    }, 3000)

    return () => clearTimeout(timer)
  }, [isCopied])

  return (
    <div className="relative" ref={shareMenuRef}>
      <Button onClick={onShareClick} ariaLabel="Share">
        {showShare ? <Close /> : <Share />}
      </Button>
      {showShare && (
        <ul className="absolute z-20 right-0 bg-primary flex flex-col p-4 border rounded-lg w-64">
          <li>
            <button
              aria-label="Share on facebook"
              className="py-4 flex"
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${fullURL}`,
                  'facebook-share-dialog',
                  'width=800,height=600'
                )
              }
            >
              <Facebook className="mr-4 " />
              Share on Facebook
            </button>
          </li>
          <li>
            <ExternalLink
              className="py-4 flex"
              ariaLabel="Share on twitter"
              to={`https://twitter.com/intent/tweet?url=${fullURL}&text=${title}${
                SOCIAL_USERNAMES.twitter
                  ? `&via=${SOCIAL_USERNAMES.twitter}`
                  : ''
              }`}
            >
              <Twitter className="mr-4 " />
              Share on Twitter
            </ExternalLink>
          </li>
          <li className="border border-secondary flex rounded-md max-w-full">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis p-2">
              {fullURL}
            </p>
            <Button
              className="bg-primary-2"
              onClick={onCopyToClipboard}
              ariaLabel="Copy to clipboard"
            >
              {isCopied ? 'Copied' : 'Copy'}
            </Button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default ShareButton
