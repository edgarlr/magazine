import { useState, useEffect } from 'react'

type ReturnProps<T> = [storedValue: T, setLocalStorage: (value: T) => void]

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): ReturnProps<T> => {
  const readValue = () => {
    if (typeof window === 'undefined') return initialValue

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  }

  const [storedValue, setStoredValue] = useState<T>(initialValue)

  const setLocalStorage = (value: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStoredValue(value)
      window.dispatchEvent(new Event('local-storage'))
    } catch (e) {
      return
    }
  }

  useEffect(() => {
    setStoredValue(readValue())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onStorageChange = () => {
      setStoredValue(readValue())
    }
    window.addEventListener('local-storage', onStorageChange)
    return () => window.removeEventListener('local-storage', onStorageChange)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return [storedValue, setLocalStorage]
}
