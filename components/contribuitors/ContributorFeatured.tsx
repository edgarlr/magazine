import Link from 'next/link'

const ContributorFeatured = ({
  contributor,
}: {
  contributor: TContributorFeatured
}) => {
  return (
    <Link href={`/contributors/${contributor.slug}`}>
      <a className="flex py-2">
        <div className="relative w-16 h-16">
          <img
            className="absolute h-full w-full object-cover rounded-full"
            src={contributor.urls.profilephoto}
            alt={contributor.name}
          />
        </div>
        <div className="ml-5">
          <div className="font-serif text-2xl">{contributor.name}</div>
          <p className="text-xs uppercase text-accents-3">
            {contributor.jobtitle}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default ContributorFeatured
