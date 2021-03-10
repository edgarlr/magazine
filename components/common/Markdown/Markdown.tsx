import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { getMediaURL } from '@lib/api'

const ParagraphRenderer = (props: any) => {
  const element = props.children[0]
  // escape all the image elements
  return element.type.name === 'ImageRenderer' ? (
    { ...element }
  ) : (
    <p {...props} />
  )
}

const ImageRenderer = ({ src, alt }: { src: string; alt: string }) => {
  const srcUrl = getMediaURL(src)

  return (
    <figure className="relative w-full h-full mt-6">
      {src.startsWith(process.env.API_URL || 'http://localhost:1337') ? (
        // Optimize with next/image if the image come from our provider
        <Image src={srcUrl} alt={alt} layout="fill" objectFit="contain" />
      ) : (
        // Regular img tag whenever the image came from a different domain or source
        <img src={srcUrl} alt={alt} style={{ objectFit: 'contain' }} />
      )}
      <figcaption
        className="text-sm mt-4 text-primary-60"
        style={{ textAlign: 'center' }}
      >
        {alt}
      </figcaption>
    </figure>
  )
}

const Markdown = ({ content }: { content?: string }) => {
  return (
    <section className="markdown">
      <ReactMarkdown
        renderers={{ image: ImageRenderer, paragraph: ParagraphRenderer }}
      >
        {content || ''}
      </ReactMarkdown>
    </section>
  )
}

export default Markdown
