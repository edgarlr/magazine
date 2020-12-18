import { useState, useEffect } from 'react'
import { useLocalStorage } from '@lib/hooks/use-local-storage'

type ReturnProps = {
  list: TArticle[]
  addToList: (item: TArticle) => void
  removeFromList: (item: TArticle) => void
}

export const useList = (): ReturnProps => {
  const { storedValue, setLocalStorage } = useLocalStorage<TArticle[]>(
    'saved',
    []
  )
  const [list, setList] = useState<TArticle[]>(storedValue)

  const addToList = (item: TArticle) => {
    setList([...list, item])
  }

  const removeFromList = (item: TArticle) => {
    setList(list.filter((article: TArticle) => article.slug !== item.slug))
  }

  useEffect(() => {
    setLocalStorage(list)
  }, [list, setLocalStorage])

  return { list, addToList, removeFromList }
}
