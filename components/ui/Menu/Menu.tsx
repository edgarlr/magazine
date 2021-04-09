import { useMenuContext } from './use-menu-context'
import cn from 'classnames'
import { useIsMobile } from '@lib/hooks/use-media-queries'
import s from './Menu.module.css'
import { Portal } from '../Portal'

type Props = {
  children: React.ReactNode
  title: string
  position?: 'left' | 'right'
}

const Menu = ({ children, title, position = 'right' }: Props) => {
  const { isVisible, toggle, menuWrapperRef } = useMenuContext()

  const isMobile = useIsMobile()

  if (!isVisible) return null

  const wrapperRect = menuWrapperRef.current?.getBoundingClientRect()

  if (isMobile) {
    return (
      <Portal id="drawer">
        <div
          className={cn(s.mobileMenu, 'animate-fade-in')}
          aria-labelledby="menuTitleId"
        >
          <div className={cn(s.mobileContent, 'animate-slide-up')}>
            <p className={s.mobileTitle} id="menuTitleId">
              {title}
            </p>
            <ul
              className={s.mobileList}
              role="menu"
              tabIndex={-1}
              aria-labelledby="menuTitleId"
            >
              {children}
            </ul>
          </div>

          <button onClick={toggle} className={s.closeBtn}>
            Close
          </button>
        </div>
      </Portal>
    )
  }

  return (
    <Portal id="menu">
      <div
        className={s.menu}
        aria-labelledby="menuTitleId"
        style={
          wrapperRect
            ? {
                top: `${
                  wrapperRect.top + wrapperRect.height + window.pageYOffset
                }px`,
                left:
                  position === 'left'
                    ? `${wrapperRect.left + window.pageXOffset}px`
                    : `calc(${
                        wrapperRect.left +
                        wrapperRect.width +
                        window.pageXOffset
                      }px - 16rem)`,
              }
            : {}
        }
      >
        <p
          className="px-6 mt-1 mx-0 mb-2 font-bold text-sm text-primary"
          id="menuTitleId"
        >
          {title}
        </p>
        <ul
          role="menu"
          tabIndex={-1}
          className="w-full m-0 p-0 flex flex-col rounded-2xl"
          aria-labelledby="menuTitleId"
        >
          {children}
        </ul>
      </div>
    </Portal>
  )
}

export default Menu
