import Link from 'next/link'
import cn from 'classnames'

type Props = {
  author: TContributor
  className?: string
}

function Author({ author, className }: Props) {
  return (
    <p className={cn('serif text-s', className)}>
      By{' '}
      <Link href={`/contributors/${author.slug}`}>
        <a>{author.name}</a>
      </Link>
    </p>
  )
}

export default Author
