// import { useState, useEffect } from 'react'
import { useLocalStorage } from '@lib/hooks/use-local-storage'

type ReturnProps<T> = {
  list: T[]
  addToList: (article: T) => void
  removeFromList: (article: T) => void
}

export const useList = <T>(): ReturnProps<T> => {
  const [list, setList] = useLocalStorage<T[]>('saved', [])

  const addToList = (article: T) => {
    setList([...list, article])
  }

  const removeFromList = (article: T) => {
    setList(list.filter((item: T) => article !== item))
  }

  // useEffect(() => {
  //   setList(list)
  // }, [list, setList])

  return { list, addToList, removeFromList }
}
