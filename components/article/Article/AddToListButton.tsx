import { useState, useEffect } from 'react'
import { removeContent, storeContent, getAllStoredContent } from '@lib/storage'
import Bookmark from '@components/icons/Bookmark'
import { Button } from '@components/ui/Button'

type Props = {
  article: TArticle
}

const AddToListButton = ({ article }: Props) => {
  const [list, setList] = useState<TArticle[]>([])

  useEffect(() => {
    const getStoredArticles = async () => {
      const storedArticles = await getAllStoredContent()
      setList(storedArticles)
    }
    getStoredArticles()
  }, [])

  const isOnList = list.some((item: TArticle) => item.slug === article.slug)

  const addToList = async (article: TArticle) => {
    setList([...list, article])
    await storeContent(article)
  }

  const removeFromList = async (article: TArticle) => {
    setList(list.filter((item: TArticle) => item.slug !== article.slug))
    await removeContent(article)
  }

  const onButtonClick = async () => {
    if (!isOnList) return await addToList(article)
    return await removeFromList(article)
  }

  return (
    <Button onClick={onButtonClick} ariaLabel="Add to list">
      <Bookmark style={isOnList ? { fill: 'currentColor' } : {}} />
    </Button>
  )
}

export default AddToListButton
