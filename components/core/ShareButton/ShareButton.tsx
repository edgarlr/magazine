import { IconThreeDots, IconTwitter } from '@components/icons'
import ExternalLink from '@components/ui/Link/ExternalLink'
import { useGlobal } from '@lib/hooks/use-global'
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

  const { site_url, social_urls } = useGlobal()

  const fullURL = `${site_url}${path}`

  const onShareClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (typeof window !== 'undefined') {
      if (navigator.share) {
        navigator
          .share({
            title: title,
            text: message,
            url: fullURL,
          })
          .catch(console.error)
      } else {
        setShowShare(true)
      }
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
    // Early return when isCopied is false.
    if (!isCopied) return

    const timer = setTimeout(() => {
      setIsCopied(!isCopied)
    }, 3000)

    return () => clearTimeout(timer)
  }, [isCopied])

  useEffect(() => {
    document.addEventListener('click', onOutsideClick)
    return () => document.removeEventListener('click', onOutsideClick)
  })

  const onOutsideClick = (e: any) => {
    if (shareMenuRef.current && !shareMenuRef.current.contains(e.target)) {
      setShowShare(false)
    }
  }

  return (
    <div className="relative" ref={shareMenuRef}>
      <button className="p-2" onClick={onShareClick}>
        <IconThreeDots />
      </button>
      {showShare && (
        <ul className="bg-primary flex flex-col p-4 border rounded-lg w-64">
          <li>
            <button
              className="py-4 flex"
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${fullURL}`,
                  'facebook-share-dialog',
                  'width=800,height=600'
                )
              }
            >
              <IconTwitter className="mr-4 " />
              Share on Facebook
            </button>
          </li>
          <li>
            <ExternalLink
              className="py-4 flex"
              to={`https://twitter.com/intent/tweet?url=${fullURL}&text=${title}${
                social_urls?.twitter ? `&via=${social_urls?.twitter}` : ''
              }`}
            >
              <IconTwitter className="mr-4 " />
              Share on Twitter
            </ExternalLink>
          </li>
          <li className="border border-secondary flex rounded-md max-w-full">
            <p className="whitespace-nowrap overflow-hidden overflow-ellipsis p-2">
              {fullURL}
            </p>
            <button className="bg-primary-2 p-2" onClick={onCopyToClipboard}>
              {isCopied ? 'Copied' : 'Copy'}
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default ShareButton
