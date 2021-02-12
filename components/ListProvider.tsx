import { useEffect, useState } from 'react'
import { removeContent, storeContent, getAllStoredContent } from '@lib/storage'
import { ListContext } from '@lib/hooks/use-list'

const ListProvider = ({ children }: { children: React.ReactNode }) => {
  const [list, setList] = useState<TArticle[]>([])

  useEffect(() => {
    const getStoredArticles = async () => {
      const storedArticles = await getAllStoredContent()
      setList(storedArticles)
    }
    getStoredArticles()
  }, [])

  const addToList = async (article: TArticle) => {
    setList([...list, article])
    await storeContent(article)
  }

  const removeFromList = async (article: TArticle) => {
    setList(list.filter((item: TArticle) => item.slug !== article.slug))
    await removeContent(article)
  }

  return (
    <ListContext.Provider value={{ addToList, removeFromList, list }}>
      {children}
    </ListContext.Provider>
  )
}

export default ListProvider
