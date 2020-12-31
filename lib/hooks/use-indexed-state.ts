import { useState, useEffect, useCallback } from 'react'
import { set, get } from 'idb-keyval'

type ReturnProps<T> = [state: T, setIndexedState: (value: T) => void]

export const useIndexedState = <T>(
  key: string,
  defaultState: T
): ReturnProps<T> => {
  const [state, setState] = useState<T>(defaultState)

  useEffect(() => {
    get<T>(key).then((retrivedState) => {
      setState(retrivedState ?? defaultState)
    })
  }, [key, defaultState, setState])

  const setIndexedState = useCallback(
    (newVal: T) => {
      setState(newVal)
      set(key, newVal)
    },
    [key, setState]
  )
  return [state, setIndexedState]
}
