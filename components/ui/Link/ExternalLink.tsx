import { CSSProperties } from 'react'

type Props = {
  children: React.ReactNode
  to: string
  newTab?: boolean
  style?: CSSProperties
  className?: string
}

function ExternalLink({
  children,
  to,
  newTab = true,
  style,
  className,
}: Props) {
  return (
    <a
      href={to}
      // Change target and rel attributes is newTab is true
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener noreferrer' : ''}
      style={style}
      className={className}
    >
      {children}
    </a>
  )
}

export default ExternalLink
