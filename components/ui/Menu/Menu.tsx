import { useMenuContext } from './use-menu-context'
import cn from 'classnames'
import { useIsMobile } from '@lib/hooks/use-media-queries'
import s from './Menu.module.css'

type Props = {
  children: React.ReactNode
  title: string
  position?: 'left' | 'right'
}

const Menu = ({ children, title, position = 'right' }: Props) => {
  const { isVisible, toggle } = useMenuContext()

  const isMobile = useIsMobile()

  if (!isVisible) return null

  if (isMobile) {
    return (
      <div className={cn(s.mobileMenu, 'animate-fade-in')}>
        <div className={cn(s.mobileContent, 'animate-slide-up')}>
          <p className={s.mobileTitle}>{title}</p>
          <ul className={s.mobileList}>{children}</ul>
        </div>

        <button onClick={toggle} className={s.closeBtn}>
          Close
        </button>
      </div>
    )
  }

  return (
    <div
      className={cn(s.menu, {
        ['left-0']: position === 'left',
        ['right-0']: position === 'right',
      })}
    >
      <p className="px-6 mt-1 mx-0 mb-2 font-bold text-sm text-primary">
        {title}
      </p>
      <ul className="m-0 p-0 flex flex-col rounded-2xl">{children}</ul>
    </div>
  )
}

export default Menu
