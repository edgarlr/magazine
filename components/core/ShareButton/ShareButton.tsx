import { IconThreeDots, IconTwitter } from '@components/icons'
import { useState, MouseEvent } from 'react'

type Props = {
  title: string
  path: string
  message?: string
}

const ShareButton = ({ title, path, message = 'Chech this link' }: Props) => {
  const [showShare, setShowShare] = useState(false)
  const onShareClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (typeof window !== 'undefined') {
      if (navigator.share) {
        try {
          navigator.share({
            title: title,
            text: message,
            url: `${window.location.protocol}//${window.location.hostname}${path}`,
          })
        } catch (error) {
          console.error(error)
        }
      } else {
        setShowShare(true)
      }
    }
  }

  return (
    <div>
      <button className="p-2" onClick={onShareClick}>
        <IconThreeDots />
      </button>
      {showShare && (
        <ul>
          <li>
            <IconTwitter />
          </li>
          <li>
            <IconTwitter />
          </li>
        </ul>
      )}
    </div>
  )
}

export default ShareButton
