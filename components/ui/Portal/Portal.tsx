// import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePortal } from './use-portal'

type Props = {
  id: string
  children: React.ReactNode
}

const Portal = ({ id, children }: Props) => {
  const target = usePortal(id)
  // const [mounted, setMounted] = useState(false)

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  return target ? createPortal(children, target) : null
}

export default Portal
