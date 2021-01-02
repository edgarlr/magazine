import { useState, useEffect } from 'react'

export const useIsOffline = () => {
  const [isOffline, setIsOffline] = useState(false)

  useEffect(() => {
    const handler = (event: Event) => {
      setIsOffline(navigator ? !navigator.onLine : event.type === 'offline')
    }

    window.addEventListener('online', handler)
    window.addEventListener('offline', handler)

    return () => {
      window.removeEventListener('online', handler)
      window.removeEventListener('offline', handler)
    }
  }, [])

  return { isOffline }
}
