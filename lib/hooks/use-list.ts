import { createContext, useContext } from 'react'

type ListContextProps = {
  list: TArticle[]
  addToList: (article: TArticle) => void
  removeFromList: (article: TArticle) => void
}

export const ListContext = createContext<ListContextProps | null>(null)

export const useList = (): ListContextProps => {
  const result = useContext(ListContext)

  if (!result) {
    throw new Error()
  }

  return result
}
