import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { MenuContext } from './use-menu-context'

const MenuWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggle = useCallback(() => {
    setIsVisible((oldVisible) => !oldVisible)
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const onOutsideClick = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        toggle()
      }
    }

    document.addEventListener('click', onOutsideClick)
    document.addEventListener('touchstart', onOutsideClick)
    return () => {
      document.removeEventListener('click', onOutsideClick)
      document.removeEventListener('touchstart', onOutsideClick)
    }
  }, [isVisible, toggle])

  const value = useMemo(() => ({ isVisible, toggle }), [isVisible, toggle])

  return (
    <MenuContext.Provider value={value}>
      <div className="relative" ref={menuRef}>
        {children}
      </div>
    </MenuContext.Provider>
  )
}

export default MenuWrapper
