import Link from 'next/link'

const Contributor = ({ contributor }: { contributor: TContributor }) => {
  return (
    <Link href={`/contributors/${contributor.slug}`}>
      <div className="py-4 border-b border-accents-2">
        <p className="font-serif text-lg">{contributor.name}</p>
        <p className="text-xs capitalize text-accents-3">
          {contributor.jobtitle}
        </p>
      </div>
    </Link>
  )
}

export default Contributor
