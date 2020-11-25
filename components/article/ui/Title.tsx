import cn from 'classnames'

type Props = {
  title: string
  className?: string
}

function Title({ title, className }: Props) {
  return <h1 className={cn('text-4xl font-serif pb-4', className)}>{title}</h1>
}

export default Title
