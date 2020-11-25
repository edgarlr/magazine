import Link from 'next/link'
import cn from 'classnames'

type Props = {
  category: TCategory
  className?: string
}

function CategoryTag({ category, className }: Props) {
  return (
    <Link href={`/${category.slug}`}>
      <a className={cn('uppercase text-sm font-bold text-accent', className)}>
        {category.title}
      </a>
    </Link>
  )
}

export default CategoryTag
