import { MouseEvent } from 'react'
import { Button } from '../Button'
import { useMenuContext } from './use-menu-context'

type Props = {
  children: React.ReactNode
  ariaLabel: string
  onClick?: (e: MouseEvent) => void
}

const MenuButton = ({ children, ariaLabel, onClick = undefined }: Props) => {
  const { toggle } = useMenuContext()

  const handleOnClick = (e: MouseEvent) => {
    onClick && onClick(e)
    toggle()
  }

  return (
    <Button onClick={handleOnClick} ariaLabel={ariaLabel}>
      {children}
    </Button>
  )
}

export default MenuButton
