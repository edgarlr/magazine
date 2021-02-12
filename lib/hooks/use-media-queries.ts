import { useEffect, useState } from 'react'

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false)

  useEffect(() => {
    const updateTarget = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setTargetReached(true)
      } else {
        setTargetReached(false)
      }
    }

    const media = window.matchMedia(`(max-width: ${width}px)`)

    media.addEventListener('change', updateTarget)

    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeEventListener('change', updateTarget)
  }, [width])

  return targetReached
}

const useIsMobile = () => useMediaQuery(640)

export { useMediaQuery, useIsMobile }
