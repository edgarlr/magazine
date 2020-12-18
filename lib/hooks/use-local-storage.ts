import { useState, useEffect } from 'react'

type ReturnProps<T> = {
  storedValue: T
  setLocalStorage: (value: T) => void
}

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): ReturnProps<T> => {
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    setStoredValue(() => {
      if (typeof window === 'undefined') return initialValue

      try {
        const item = window.localStorage.getItem(key)
        return item !== null ? JSON.parse(item) : initialValue
      } catch (e) {
        return initialValue
      }
    })
  }, [key, initialValue])

  const setLocalStorage = (value: T) => {
    try {
      window.localStorage.setItem(
        key,
        typeof value === 'string' ? value : JSON.stringify(value)
      )
      setStoredValue(value)
    } catch (e) {
      return
    }
  }

  return { storedValue, setLocalStorage }
}
