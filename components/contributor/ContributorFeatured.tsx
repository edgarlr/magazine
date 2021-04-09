import { getMediaURL } from '@lib/api'
import Link from 'next/link'
import Image from 'next/image'
import s from './Contributor.module.css'

const ContributorFeatured = ({
  contributor,
}: {
  contributor: TContributor
}) => {
  const thumbnailUrl = getMediaURL(
    contributor?.featured?.profile_image.formats.thumbnail?.url
  )
  return (
    <li>
      <Link href={`/contributors/${contributor.slug}`}>
        <a className={s.featuredContributor}>
          <figure className="relative w-16 h-16">
            <Image
              src={thumbnailUrl}
              className="rounded-full"
              alt={`${contributor?.name} profile`}
              layout="fill"
            />
          </figure>
          <div className="ml-5">
            <h3 className="serif ">{contributor.name}</h3>
            <p className="text-xs uppercase text-primary-60">
              {contributor.role}
            </p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default ContributorFeatured
