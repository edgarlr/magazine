import { useEffect, useState } from 'react'
import { removeContent, storeContent, getAllStoredContent } from '@lib/storage'
import { ListContext } from '@lib/hooks/use-list'
import { useToast } from '@lib/hooks/use-toast'

const ListProvider = ({ children }: { children: React.ReactNode }) => {
  const [list, setList] = useState<TArticle[]>([])
  const { addToast } = useToast()

  useEffect(() => {
    const getStoredArticles = async () => {
      const storedArticles = await getAllStoredContent()
      setList(storedArticles)
    }
    getStoredArticles()
  }, [])

  const addToList = async (article: TArticle) => {
    setList([...list, article])
    addToast('Article saved!')
    await storeContent(article)
  }

  const removeFromList = async (article: TArticle) => {
    setList(list.filter((item: TArticle) => item.slug !== article.slug))
    addToast('Article removed!')
    await removeContent(article)
  }

  return (
    <ListContext.Provider value={{ addToList, removeFromList, list }}>
      {children}
    </ListContext.Provider>
  )
}

export default ListProvider
