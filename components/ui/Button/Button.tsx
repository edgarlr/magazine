import { CSSProperties, MouseEvent } from 'react'
import cn from 'classnames'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
  style?: CSSProperties
  className?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  ariaLabel?: string
  href?: string
}

const Button = ({
  children,
  onClick,
  className,
  style,
  ariaLabel,
  href,
  ...rest
}: Props) => {
  if (href) {
    return (
      <Link href={href}>
        <a
          aria-label={ariaLabel}
          style={style}
          className={cn(
            'p-2 w-max rounded-full disabled:opacity-50 hover:bg-primary-05',
            className
          )}
          {...rest}
        >
          {children}
        </a>
      </Link>
    )
  }
  return (
    <button
      onClick={onClick}
      style={style}
      aria-label={ariaLabel}
      className={cn(
        'p-2 w-max rounded-full disabled:opacity-50 hover:bg-primary-05',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
