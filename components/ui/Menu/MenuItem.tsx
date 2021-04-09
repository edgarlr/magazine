import Link from 'next/link'
import { HTMLAttributes, MouseEvent } from 'react'
import { useMenuContext } from './use-menu-context'
import cn from 'classnames'
import ExternalLink from '../Link/ExternalLink'
import s from './Menu.module.css'

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  active?: boolean
  subfix?: React.ReactNode
  onClick?: (e: MouseEvent) => void
  href?: string
  external?: boolean
  unstyled?: boolean
}

const MenuItem = ({
  children,
  active = false,
  subfix = null,
  external = false,
  unstyled = false,
  href,
  onClick,
  ...rest
}: Props) => {
  const { toggle } = useMenuContext()

  const handleOnClick = (e: MouseEvent) => {
    onClick && onClick(e)
    toggle()
  }

  let Component: any

  if (href) {
    if (external) {
      Component = (
        <ExternalLink to={href} ariaLabel="Link" className={s.itemContent}>
          {children}
        </ExternalLink>
      )
    } else {
      Component = (
        <Link href={href}>
          <a className={s.itemContent}>{children}</a>
        </Link>
      )
    }
  } else if (onClick) {
    Component = (
      <button onClick={handleOnClick} className={s.itemContent} {...rest}>
        {children}
      </button>
    )
  } else if (unstyled) {
    Component = <>{children}</>
  } else {
    Component = <span className={s.itemContent}>{children}</span>
  }

  return (
    <li
      role="menuitem"
      tabIndex={-1}
      data-selected={active ? '' : undefined}
      className={cn(s.menuItem, { [s.menuItemActive]: active })}
    >
      {Component}

      {subfix && <span className={s.subfix}>{subfix}</span>}
    </li>
  )
}
export default MenuItem
