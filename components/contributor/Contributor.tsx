import Link from 'next/link'

const Contributor = ({ contributor }: { contributor: TContributor }) => {
  return (
    <li className="py-4 border-b cursor-pointer">
      <Link href={`/contributors/${contributor.slug}`}>
        <a>
          <h4 className="serif">{contributor.name}</h4>
          <p className="text-xs capitalize text-primary-60">
            {contributor.role}
          </p>
        </a>
      </Link>
    </li>
  )
}

export default Contributor
