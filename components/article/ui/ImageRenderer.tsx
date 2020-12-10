import Image from 'next/image'
import { getMediaURL } from '@lib/api'

const ImageRenderer = ({ src, alt }: { src: string; alt: string }) => {
  const srcUrl = getMediaURL(src)

  return (
    <figure className="relative w-full h-full">
      {src.startsWith(process.env.API_URL || 'http://localhost:1337') ? (
        // Optimize with next/image if the image come from our provider
        <Image src={srcUrl} alt={alt} layout="fill" objectFit="contain" />
      ) : (
        // Regular img tag whenever the image came from a different domain or source
        <img src={srcUrl} alt={alt} style={{ objectFit: 'contain' }} />
      )}
      <figcaption style={{ textAlign: 'center' }}>{alt}</figcaption>
    </figure>
  )
}

export default ImageRenderer
