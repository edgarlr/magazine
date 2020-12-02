import Link from 'next/link'

const Contributor = ({ contributor }: { contributor: TContributor }) => {
  return (
    <Link href={`/contributors/${contributor.slug}`}>
      <div className="py-4 border-b border-primary">
        <h4 className="serif">{contributor.name}</h4>
        <p className="text-xs capitalize text-secondary">{contributor.role}</p>
      </div>
    </Link>
  )
}

export default Contributor
