import { getAllStoredContent } from '@lib/storage'
import { useState, useEffect } from 'react'

type ReturnProps<T> = {
  list: T[]
  addToList: (article: T) => void
  removeFromList: (article: T) => void
}

export const useList = <T>(): ReturnProps<T> => {
  const [list, setList] = useState<T[]>([])

  useEffect(() => {
    const getStoredArticles = async () => {
      const storedArticles = await getAllStoredContent()
      setList(storedArticles)
    }
    getStoredArticles()
  }, [])

  const addToList = (article: T) => {
    setList([...list, article])
  }

  const removeFromList = (article: T) => {
    setList(list.filter((item: T) => article !== item))
  }

  return { list, addToList, removeFromList }
}
