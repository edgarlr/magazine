import { CSSProperties } from 'react'

type Props = {
  children: React.ReactNode
  to: string
  style?: CSSProperties
  className?: string
  ariaLabel: string
}

function ExternalLink({ children, to, style, className, ariaLabel }: Props) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer noopener"
      style={style}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  )
}

export default ExternalLink
