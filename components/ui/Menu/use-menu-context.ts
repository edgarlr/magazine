import { createContext, useContext } from 'react'

type MenuContextProps = {
  isVisible: boolean
  toggle: () => void
}

export const MenuContext = createContext<MenuContextProps | null>(null)

export const useMenuContext = (): MenuContextProps => {
  const context = useContext(MenuContext)

  if (!context) {
    throw new Error(
      `Menu compound components cannot be rendered outside the MenuWrapper component`
    )
  }

  return context
}
