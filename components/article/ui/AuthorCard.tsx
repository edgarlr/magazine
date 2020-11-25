import { getMediaURL } from '@lib/api'
import Link from 'next/link'
import SocialMediaLink from './SocialMediaLink'

function AuthorCard({ author }: { author: TContributor }) {
  const thumbnailUrl = getMediaURL(
    author.featured?.profile_image.formats.thumbnail?.url
  )

  return (
    <div className="flex py-2 items-center">
      {author.featured && (
        <Link href={`/contributors/${author.slug}`}>
          <figure className="relative w-12 h-12 mr-5">
            <img
              className="absolute h-full w-full object-cover rounded-full"
              src={thumbnailUrl}
              alt="profile"
            />
          </figure>
        </Link>
      )}
      <div>
        <Link href={`/contributors/${author.slug}`}>
          <a className="font-serif text-xl">{author.name}</a>
        </Link>
        <SocialMediaLink urls={author.urls} />
      </div>
    </div>
  )
}

export default AuthorCard
