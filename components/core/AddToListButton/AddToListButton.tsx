import { IconBookmark } from '@components/icons'
// import { useList } from '@lib/hooks/use-list'
import { useLocalStorage } from '@lib/hooks/use-local-storage'

type Props = {
  article: TArticle
}

const AddToListButton = ({ article }: Props) => {
  const [list, setList] = useLocalStorage<TArticle[]>('saved', [])

  const isOnList = list.some((item) => item.slug === article.slug)

  const addToList = (article: TArticle) => {
    setList([...list, article])
  }

  const removeFromList = (article: TArticle) => {
    setList(list.filter((item: TArticle) => item.slug !== article.slug))
  }

  const onButtonClick = () => {
    if (isOnList) {
      removeFromList(article)
    } else {
      addToList(article)
    }
  }

  return (
    <button className="p-2" onClick={onButtonClick}>
      <IconBookmark style={isOnList ? { fill: 'currentColor' } : {}} />
    </button>
  )
}

export default AddToListButton
