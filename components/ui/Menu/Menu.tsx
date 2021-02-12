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
      <div className="mobile-menu fadeIn">
        <div className="content slideUp">
          <p className="title">{title}</p>
          <ul className="list">{children}</ul>
        </div>

        <button onClick={toggle} className="close-btn">
          Close
        </button>

        <style jsx>{`
          .mobile-menu {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            z-index: 102;
            display: flex;
            flex-direction: column;
          }
          .content {
            flex: 0 0 1;
            display: flex;
            flex-direction: column;
            padding: 0;
            padding-top: 10rem;
            overflow-y: scroll;
            min-height: calc(100% - 5rem);
            max-height: calc(100% - 5rem);
            overflow-y: scroll;
          }
          .mobile-menu::before {
            content: '';
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: -1;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
          }
          .title {
            font-size: var(--font-3xl);
            text-align: center;
            margin: auto 0 2rem;
            font-weight: bold;
          }
          .list {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            border-radius: 15px;
            margin-bottom: 2.5rem;
          }
          .close-btn {
            flex: 0 0 5rem;
            width: 100%;
            height: 6rem;
            padding-bottom: 0.5rem;
            border-top: var(--default-border);
            font-size: var(--font-xl);
            font-weight: bold;
            text-align: center;
          }
        `}</style>
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
