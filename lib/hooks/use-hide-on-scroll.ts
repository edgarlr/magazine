import { useState, useEffect, useRef } from 'react'

export const useHideOnScroll = () => {
  const [isHidden, setIsHidden] = useState(false)
  const prevScrollY = useRef<number>(0)

  useEffect(() => {
    const onScroll = () => {
      const scrolledDown = window.scrollY > prevScrollY.current

      if (scrolledDown && !isHidden) {
        setIsHidden(true)
      } else if (!scrolledDown && isHidden) {
        setIsHidden(false)
      }

      prevScrollY.current = window.scrollY
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [isHidden])

  return { isHidden }
}
